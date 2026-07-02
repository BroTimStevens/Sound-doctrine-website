import { Play, Users, Mail } from "lucide-react";

const youtubeUrl = "https://youtube.com/@brotim2024";

export default function HomePage() {
  const latestVideos = [
    ["The Weapons Of Our Warfare", "Latest Teaching", "28:45"],
    ["Discerning Truth In A Deceiving World", "Bible Study", "22:31"],
    ["Walking By Faith Not By Sight", "Sound Doctrine", "24:18"],
  ];

  const studies = [
    ["Prophecy Update", "Current Events And Bible Prophecy", "A scripture-centered look at the times we are living in."],
    ["Sound Doctrine", "Enduring Sound Doctrine", "Teaching truth without compromise in the last days."],
    ["Genesis Study", "The Evening And The Morning", "Verse-by-verse teaching through foundational Scripture."],
  ];

  return (
    <main className="page">
      <header className="topbar">
        <div className="nav">
          <a className="brand" href="#home">
            <img src="/logo.jpeg" alt="Sound Doctrine with Bro Tim logo" />
            <div><div className="brandMain">Sound Doctrine</div><div className="brandSub">with Bro Tim</div></div>
          </a>
          <nav className="menu">
            <a href="#home">Home</a><a href="#teachings">Teachings</a><a href="#community">Community</a><a href="#merch">Merch</a><a href="#contact">Contact</a>
          </nav>
        ></div>
          <a className="topCta" href={youtubeUrl} target="_blank">Join The Community</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroBg" /><div className="heroGlow" /><div className="heroLines" /><div className="heroWordmark">Sound Doctrine</div>
        <div className="heroInner">
          <div className="heroContent">
            <div className="kicker">Biblical Truth. Real Talk. Real Life.</div>
            <h1>Sound Doctrine.<br/><span>Strong Faith.</span></h1>
            <p className="heroCopy">Equipping believers with the truth of God&apos;s Word to live, stand, and speak with confidence.</p>
            <div className="actions">
              <a className="btn btnPrimary" href={youtubeUrl} target="_blank"><Play size={17} fill="currentColor"/> Watch Latest Teaching</a>
              <a className="btn btnSecondary" href="#community"><Users size={17}/> Join The Community</a>
            </div>
            <div className="quote">“Study to show thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.”<b>2 Timothy 2:15</b></div>
          </div>
        </div>
      </section>

      <section className="dashboard">
        <article className="glass">
          <h3 className="panelTitle">Featured Teaching</h3>
          <div className="featuredArt"><h3>Stand <span>Firm</span><br/>In The Truth</h3><div className="playButton"><Play size={30} fill="currentColor"/></div></div>
          <h4>Stand Firm In The Truth</h4>
          <p className="muted">The enemy is real, but so is your calling. It’s time to stand firm in God&apos;s truth.</p>
          <a className="goldLink" href={youtubeUrl} target="_blank">Watch Now →</a>
        </article>

        <article className="glass">
          <h3 className="panelTitle">Latest Videos <span>View All →</span></h3>
          <div className="videoList">
            {latestVideos.map(([title, type, time]) => (
              <div className="mini" key={title}><div className="miniThumb">{time}</div><div><h5>{title}</h5><p>{type}</p></div></div>
            ))}
          </div>
        </article>

        <div className="stack">
          <article id="community" className="glass small community"><h3 className="panelTitle">Join The Community</h3><p className="muted">Connect with believers, ask questions, and grow in the Word together.</p><a className="goldLink" href={youtubeUrl} target="_blank">Join The Community</a></article>
          <article id="merch" className="glass small merch"><h3 className="panelTitle">Official Merch</h3><p className="muted">Rep the message. Purpose over popularity.</p><a className="goldLink" href="#">Coming Soon</a><div className="hoodie"/></article>
        </div>
      </section>

      <section id="teachings" className="section dark">
        <div className="sectionInner">
          <div className="sectionHead"><div className="kicker">Teachings & Studies</div><h2>Latest Bible Studies</h2><p className="muted">Prophecy, sound doctrine, current events, and verse-by-verse teaching.</p></div>
          <div className="studyGrid">
            {studies.map(([label, title, copy]) => (
              <article className="study" key={title}><div className="studyArt">{label}</div><div className="studyBody"><h3>{title}</h3><p className="muted">{copy}</p><a className="goldLink" href={youtubeUrl} target="_blank">Watch Teaching →</a></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner"><div className="sectionHead"><div className="kicker">Stay Connected</div><h2>Join The Growing Community</h2><p className="muted">Get updates for new teachings, livestream announcements, prophecy studies, and future ministry content.</p><form className="signup"><input type="email" placeholder="Enter your email"/><button type="button">Notify Me</button></form></div></div>
      </section>

      <footer id="contact" className="footer">
        <div className="footerInner">
          <a className="brand" href="#home"><img src="/logo.jpeg" alt="Sound Doctrine with Bro Tim logo"/><div><div className="brandMain">Sound Doctrine</div><div className="brandSub">with Bro Tim</div></div></a>
          <div className="footerText">Teaching the uncompromised Word of God for a generation that needs truth.</div>
          <div className="footerIcons"><a href={youtubeUrl} target="_blank" aria-<Mail size={20}/></div>
        </div>
      </footer>
    </main>
  );
}
