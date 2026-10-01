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
              Join the Sound Doctrine community and receive new Bible studies,
              ministry updates, livestream announcements, and important news
              directly from Bro Tim.
            </p>

            <div className="communityBenefits">
              <p>✦ NEW BIBLE STUDIES & TEACHINGS</p>
              <p>✦ LIVESTREAM NOTIFICATIONS</p>
              <p>✦ MINISTRY UPDATES</p>
              <p>✦ IMPORTANT ANNOUNCEMENTS</p>
            </div>

            <a
              className="btn btnPrimary"
              href={signupUrl}
              target="_blank"
              rel="noreferrer"
            >
              JOIN THE COMMUNITY
            </a>

            <p className="communityNote">
              Stand with believers who desire biblical truth and sound doctrine.
            </p>

          <p className="communityScripture">
              “For the time will come when they will not endure sound doctrine.”
            <br />

            <span>— 2 Timothy 4:3</span> 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
