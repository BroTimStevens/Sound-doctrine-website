export async function GET() {
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
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream?per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return Response.json(
        {
          error: "Cloudflare could not return the video list.",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      {
        error:
          error.message || "Something went wrong loading the video list.",
      },
      { status: 500 }
    );
  }
}
