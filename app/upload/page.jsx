"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  async function handleUpload() {
    if (!file) {
      setStatus("Please choose a video first.");
      return;
    }

    try {
      setStatus("Preparing upload...");

      const response = await fetch("/api/upload-url", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok || !data.uploadURL) {
        throw new Error(data.error || "Could not create upload URL.");
      }

      setStatus("Uploading video to Cloudflare...");

      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch(data.uploadURL, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Video upload failed.");
      }

      setStatus(
        `Upload complete! Video ID: ${data.uid}`
      );
    } catch (error) {
      setStatus(error.message || "Upload failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#ffffff",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid #59451f",
          borderRadius: "18px",
          padding: "50px 30px",
          background: "#101010",
        }}
      >
        <p
          style={{
            color: "#dcb65d",
            letterSpacing: "4px",
            fontWeight: "bold",
          }}
        >
          SOUND DOCTRINE WITH BRO TIM
        </p>

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Upload a Teaching
        </h1>

        <p
          style={{
            color: "#aaaaaa",
            marginBottom: "35px",
          }}
        >
          Upload a video directly to the Sound Doctrine video library.
        </p>

        <input
          type="file"
          accept="video/*"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
          style={{
            display: "block",
            margin: "0 auto 25px",
            color: "#ffffff",
          }}
        />

        <button
          onClick={handleUpload}
          style={{
            background: "#dcb65d",
            color: "#000000",
            border: "none",
            borderRadius: "8px",
            padding: "15px 30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          UPLOAD VIDEO
        </button>

        {status && (
          <p
            style={{
              marginTop: "30px",
              color: "#dcb65d",
              fontWeight: "bold",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
