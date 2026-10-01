export async function POST() {
  try {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return Response.json(
        { error: "Cloudflare environment variables are missing." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/direct_upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maxDurationSeconds: 7200,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      return Response.json(
        {
          error: "Cloudflare could not create the upload URL.",
          details: data.errors || data,
        },
        { status: 500 }
      );
    }

    return Response.json({
      uploadURL: data.result.uploadURL,
      uid: data.result.uid,
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong creating the upload URL." },
      { status: 500 }
    );
  }
}
