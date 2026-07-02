const youtubeUrl = "https://youtube.com/@brotim2024";

const videos = [
  {
    label: "Latest Teaching",
    title: "The Weapons Of Our Warfare",
    time: "28:45",
  },
  {
    label: "Bible Study",
    title: "Discerning Truth In A Deceiving World",
    time: "22:31",
  },
  {
    label: "Sound Doctrine",
    title: "Walking By Faith Not By Sight",
    time: "24:18",
  },
];

const studies = [
  {
    label: "Prophecy Update",
    title: "Current Events And Bible Prophecy",
    body: "A scripture-centered look at the times we are living in.",
  },
  {
    label: "Sound Doctrine",
    title: "Enduring Sound Doctrine",
    body: "Teaching truth without compromise in the last days.",
  },
  {
    label: "Genesis Study",
    title: "The Evening And The Morning",
    body: "Verse-by-verse teaching through foundational Scripture.",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="nav">
          <a className="brand" href="#home">
            <img src="/logo.jpeg" alt="Sound Doctrine with Bro Tim logo" />
            <div>
              <div className="brandMain">Sound Doctrine</div>
              <div className="brandSub">with Bro Tim</div>
            </div>
          </a>

          <nav className="menu" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#teachings">Teachings</a>
            <a href="#community">Community</a>
            <a href="#merch">Merch</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="topCta" href={youtubeUrl} target="_blank" rel="noreferrer">
            Join The Community
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroBg" />
        <div className="heroGrid" />
        <div className="heroGlow" />
        <div className="heroWordmark">Sound Doctrine</div>

        <div className="heroInner">
          <div className="heroContent">
            <div className="kicker">Biblical Truth • Real Talk • Real Life</div>
            <h1>
              Sound Doctrine.
              <br />
              <span>Strong Faith.</span>
            </h1>
            <p className="heroCopy">
              Equipping believers with the truth of God&apos;s Word to live, stand, and speak with confidence.
            </p>

            <div className="actions">
              <a className="btn btnPrimary" href={youtubeUrl} target="_blank" rel="noreferrer">
                ▶ Watch Latest Teaching
              </a>
              <a className="btn btnSecondary" href="#community">
                Join The Community
              </a>
            </div>

            <div className="quote">
              “Study to show thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.”
              <b>2 Timothy 2:15</b>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard" aria-label="Featured ministry content">
        <article className="glass featured">
          <h2 className="panelTitle">Featured Teaching</h2>
          <div className="featuredArt">
            <div className="playButton">▶</div>
            <h3>
              Stand <span>Firm</span>
              <br />
              In The Truth
            </h3>
          </div>
          <h4>Stand Firm In The Truth</h4>
          <p className="muted">
            The enemy is real, but so is your calling. It&apos;s time to stand firm in God&apos;s truth.
          </p>
          <a className="goldLink" href={youtubeUrl} target="_blank" rel="noreferrer">
            Watch Now →
          </a>
        </article>

        <article className="glass">
          <h2 className="panelTitle">Latest Videos</h2>
          <div className="videoList">
            {videos.map((video) => (
              <a className="miniVideo" href={youtubeUrl} target="_blank" rel="noreferrer" key={video.title}>
                <div className="miniThumb">{video.time}</div>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.label}</p>
                </div>
              </a>
            ))}
          </div>
        </article>

        <div className="stack">
          <article id="community" className="glass small community">
            <h2 className="panelTitle">Join The Community</h2>
            <p className="muted">
              Connect with believers, ask questions, and grow in the Word together.
            </p>
            <a className="goldLink" href={youtubeUrl} target="_blank" rel="noreferrer">
              Join The Community
            </a>
          </article>

          <article id="merch" className="glass small merch">
            <h2 className="panelTitle">Official Merch</h2>
            <p className="muted">Rep the message. Purpose over popularity.</p>
            <a className="goldLink" href="#merch">
              Coming Soon
            </a>
            <div className="hoodie" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section id="teachings" className="section dark">
        <div className="sectionInner">
          <div className="sectionHead">
            <div className="kicker">Teachings & Studies</div>
            <h2>Latest Bible Studies</h2>
            <p className="muted">
              Prophecy, sound doctrine, current events, and verse-by-verse teaching.
            </p>
          </div>

          <div className="studyGrid">
            {studies.map((study) => (
              <article className="study" key={study.title}>
                <div className="studyArt">{study.label}</div>
                <div className="studyBody">
                  <h3>{study.title}</h3>
                  <p className="muted">{study.body}</p>
                  <a className="goldLink" href={youtubeUrl} target="_blank" rel="noreferrer">
                    Watch Teaching →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner split">
          <div>
            <div className="kicker">Stay Connected</div>
            <h2>Join The Growing Community</h2>
            <p className="muted">
              Get updates for new teachings, livestream announcements, prophecy studies, and future ministry content.
            </p>
            <form className="signup">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="button">Notify Me</button>
            </form>
          </div>

          <div className="scriptureCard">
            <img src="/logo.jpeg" alt="Sound Doctrine logo" />
            <p>
              “For the time will come when they will not endure sound doctrine.”
            </p>
            <b>2 Timothy 4:3</b>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footerInner">
          <a className="brand footerBrand" href="#home">
            <img src="/logo.jpeg" alt="Sound Doctrine with Bro Tim logo" />
            <div>
              <div className="brandMain">Sound Doctrine</div>
              <div className="brandSub">with Bro Tim</div>
            </div>
          </a>

          <p>Teaching the uncompromised Word of God for a generation that needs truth.</p>

          <a className="footerLink" href={youtubeUrl} target="_blank" rel="noreferrer">
            YouTube Channel →
          </a>
        </div>
      </footer>
    </main>
  );
}
