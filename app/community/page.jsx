"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/mailerlite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessage("You're subscribed! Welcome to the Sound Doctrine community.");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

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
              <p>+ NEW BIBLE STUDIES & TEACHINGS</p>
              <p>+ LIVESTREAM NOTIFICATIONS</p>
              <p>+ MINISTRY UPDATES</p>
              <p>+ IMPORTANT ANNOUNCEMENTS</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <button
                type="submit"
                className="btn btnPrimary"
                disabled={loading}
              >
                {loading ? "JOINING..." : "JOIN THE COMMUNITY"}
              </button>
            </form>

            {message && <p className="communityNote">{message}</p>}

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
