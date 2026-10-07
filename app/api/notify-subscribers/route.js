export async function POST(request) {
  try {
    const { title } = await request.json();

    if (!title) {
      return Response.json(
        { error: "Teaching title is required" },
        { status: 400 }
      );
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN;
    const groupId = "199997860348953819";

    if (!apiToken) {
      return Response.json(
        { error: "MailerLite API token is missing." },
        { status: 500 }
      );
    }

    const createResponse = await fetch(
      "https://connect.mailerlite.com/api/campaigns",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          name: `New Sound Doctrine Teaching - ${title}`,
          type: "regular",
          emails: [
            {
              subject: `New Teaching from Sound Doctrine: ${title}`,
              from_name: "Sound Doctrine with Bro Tim",
              from: process.env.MAILERLITE_FROM_EMAIL,
              reply_to: process.env.MAILERLITE_FROM_EMAIL,
              content: `
                <h1>New Teaching from Sound Doctrine with Bro Tim</h1>
                <p>A new teaching has been added to the Sound Doctrine video library.</p>
                <h2>${title}</h2>
                <p>Visit the Sound Doctrine website to watch the latest teaching.</p>
                <p>
                  <a href="https://www.sounddoctrinewithbrotim.com">
                    Watch the Latest Teaching
                  </a>
                </p>
              `,
            },
          ],
          groups: [groupId],
        }),
      }
    );

    const campaignData = await createResponse.json();

    if (!createResponse.ok) {
      return Response.json(
        { error: campaignData },
        { status: createResponse.status }
      );
    }

    const campaignId = campaignData.data.id;

    const sendResponse = await fetch(
      `https://connect.mailerlite.com/api/campaigns/${campaignId}/schedule`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          delivery: "instant",
        }),
      }
    );

    const sendData = await sendResponse.json();

    if (!sendResponse.ok) {
      return Response.json(
        { error: sendData },
        { status: sendResponse.status }
      );
    }

    return Response.json({
      success: true,
      campaign: sendData.data,
    });
  } catch (error) {
    return Response.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
