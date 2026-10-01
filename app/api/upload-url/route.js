export async function POST(request) {
  try {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return Response.json(
        { error: "Cloudflare environment variables are missing." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const uploadLength = body.size;
    const fileName = body.name || "teaching-video";

    if (!uploadLength) {
      return Response.json(
        { error: "Video file size is required." },
        { status: 400 }
      );
    }

    const encodedFileName = Buffer.from(fileName).toString("base64");

    const uploadMetadata =
      `filename ${encodedFileName},` +
      `maxDurationSeconds NzIwMA==`;

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream?direct_user=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Tus-Resumable": "1.0.0",
          "Upload-Length": String(uploadLength),
          "Upload-Metadata": uploadMetadata,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return Response.json(
        {
          error: "Cloudflare could not create the TUS upload URL.",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const uploadURL = response.headers.get("Location");

    if (!uploadURL) {
      return Response.json(
        { error: "Cloudflare did not return an upload URL." },
        { status: 500 }
      );
    }

    return Response.json({
      uploadURL,
    });
  } catch (error) {
    return Response.json(
      {
        error: error.message || "Something went wrong creating the upload URL.",
      },
      { status: 500 }
    );
  }
}
