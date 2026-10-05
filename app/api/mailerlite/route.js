export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        email,
        groups: ["199997860348953819"],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data },
        { status: response.status }
      );
    }

    return Response.json({ success: true, subscriber: data });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
