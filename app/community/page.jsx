export default function CommunityPage() {
  const signupUrl =
    "https://preview.mailerlite.io/forms/2671587/199997741833651804/share";

  return (
    <main>
      <section className="communityPage">
        <div className="communityPageInner">
          <p className="eyebrow">SOUND DOCTRINE WITH BRO TIM</p>

          <h1>JOIN THE COMMUNITY</h1>

          <p className="communityLead">
            Grow in the Word. Stand firm in truth. Stay connected with
            Sound Doctrine with Bro Tim.
          </p>

          <div className="communityCard">
            <h2>STAY CONNECTED</h2>

            <p>
              Join the Sound Doctrine community to receive ministry updates,
              new Bible studies, teachings, and important announcements.
            </p>

            <a
              className="btn btnPrimary"
              href={signupUrl}
              target="_blank"
              rel="noreferrer"
            >
              JOIN THE COMMUNITY
            </a>

            <p className="communityNote">
              “For the time will come when they will not endure sound doctrine.”
            </p>

            <p className="communityScripture">2 Timothy 4:3</p>
          </div>
        </div>
      </section>
    </main>
  );
}
