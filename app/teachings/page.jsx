
"use client";

import { useState } from "react";

import { teachings as videos, cloudflareCustomerCode as customerCode } from "../../data/teachings";

const categories = [
  "All Videos",
  "Bible Studies",
  "Prophecy",
  "Sound Doctrine",
  "Current Events",
];


  
    
    
    
    
  



export default function TeachingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  const filteredVideos = videos.filter(
    (video) =>
      selectedCategory === "All Videos" ||
      video.category === selectedCategory
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "20px 6%",
          borderBottom: "1px solid #5c461d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#ffffff" }}>
          <img
            src="/logo.jpeg"
            alt="Sound Doctrine with Bro Tim"
            style={{ width: "65px", height: "65px", objectFit: "contain" }}
          />
          <strong style={{ color: "#dcb65d", fontSize: "20px" }}>
            Sound Doctrine
          </strong>
        </a>

        <nav style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            Home
          </a>
          <a href="/teachings" style={{ color: "#dcb65d", textDecoration: "none" }}>
            Teachings
          </a>
        </nav>
      </header>

      <section
        style={{
          padding: "75px 6% 55px",
          textAlign: "center",
          background: "linear-gradient(180deg, #29200f, #090909)",
        }}
      >
        <p style={{ color: "#dcb65d", letterSpacing: "3px", fontSize: "13px" }}>
          SOUND DOCTRINE WITH BRO TIM
        </p>

        <h1 style={{ fontSize: "clamp(32px, 6vw, 58px)", margin: "18px 0" }}>
          Teachings &amp; Bible Studies
        </h1>

        <p style={{ color: "#c8c8c8", fontSize: "17px" }}>
          Study the Word. Grow in Truth. Stand Firm in Sound Doctrine.
        </p>

        <p style={{ color: "#dcb65d", marginTop: "25px" }}>
          2 Timothy 2:15
        </p>
      </section>

      <section style={{ padding: "35px 6% 90px", maxWidth: "1400px", margin: "auto" }}>
        <h2 style={{ color: "#dcb65d", marginBottom: "25px" }}>
          Video Library
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "35px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              style={{
                background:
                  selectedCategory === category ? "#dcb65d" : "#191919",
                color:
                  selectedCategory === category ? "#090909" : "#ffffff",
                border: "1px solid #735a2a",
                borderRadius: "30px",
                padding: "12px 20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "28px",
          }}
        >
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              style={{
                background: "#171717",
                border: "1px solid #59451f",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={`https://${customerCode}.cloudflarestream.com/${video.id}/iframe`}
                  title={video.title}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div style={{ padding: "22px" }}>
                <p style={{ color: "#dcb65d", fontSize: "13px" }}>
                  {video.category}
                </p>

                <h3 style={{ fontSize: "21px", lineHeight: "1.4" }}>
                  {video.title}
                </h3>

                <p style={{ color: "#bdbdbd", lineHeight: "1.6" }}>
                  {video.description}
                </p>

                <a
                  href={`https://${customerCode}.cloudflarestream.com/${video.id}/watch`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#dcb65d", fontWeight: "bold" }}
                >
                  Watch Full Teaching →
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <p style={{ color: "#bdbdbd", padding: "30px 0" }}>
            More teachings are coming soon in this category.
          </p>
        )}
      </section>

      <footer
        style={{
          borderTop: "1px solid #59451f",
          padding: "30px 6%",
          textAlign: "center",
          color: "#dcb65d",
        }}
      >
        Sound Doctrine with Bro Tim
        <p style={{ color: "#aaaaaa", fontSize: "13px" }}>
          For the time will come when they will not endure sound doctrine.
          — 2 Timothy 4:3
        </p>
      </footer>
    </main>
  );
}
