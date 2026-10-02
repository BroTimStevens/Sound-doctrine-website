"use client";

import { useState } from "react";

const CHUNK_SIZE = 50 * 1024 * 1024;

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  async function uploadChunk(uploadURL, chunk, offset) {
    const response = await fetch(uploadURL, {
      method: "PATCH",
      headers: {
        "Tus-Resumable": "1.0.0",
        "Upload-Offset": String(offset),
        "Content-Type": "application/offset+octet-stream",
      },
      body: chunk,
    });

    if (!response.ok) {
      throw new Error(
        `Upload failed at ${Math.round(offset / 1024 / 1024)} MB.`
      );
    }

    const nextOffset = response.headers.get("Upload-Offset");

    if (nextOffset === null) {
      return offset + chunk.size;
    }

    return Number(nextOffset);
  }

  async function getServerOffset(uploadURL) {
    const response = await fetch(uploadURL, {
      method: "HEAD",
      headers: {
        "Tus-Resumable": "1.0.0",
      },
    });

    if (!response.ok) {
      throw new Error("Could not check the upload progress.");
    }

    const offset = response.headers.get("Upload-Offset");

    return offset ? Number(offset) : 0;
  }

  async function handleUpload() {
    if (!file) {
      setStatus("Please choose a video first.");
      return;
    }

    try {
      setProgress(0);
      setStatus("Preparing upload...");

      const response = await fetch("/api/upload-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          size: file.size,
          name: file.name,
          title: title,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.uploadURL) {
        throw new Error(
          data.error || "Could not create the Cloudflare upload URL."
        );
      }

      const uploadURL = data.uploadURL;

      let offset = 0;

      while (offset < file.size) {
        const end = Math.min(offset + CHUNK_SIZE, file.size);
        const chunk = file.slice(offset, end);

        setStatus(
          `Uploading ${Math.round(offset / 1024 / 1024)} MB of ${Math.round(
            file.size / 1024 / 1024
          )} MB...`
        );

        try {
          offset = await uploadChunk(uploadURL, chunk, offset);
        } catch (error) {
          setStatus("Connection interrupted. Resuming upload...");

          offset = await getServerOffset(uploadURL);
        }

        const percent = Math.min(
          100,
          Math.round((offset / file.size) * 100)
        );

        setProgress(percent);
      }

      setProgress(100);
      setStatus("Upload complete! Your teaching is now being processed.");
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
    type="text"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    placeholder="Enter teaching title"
    style={{
        display: "block",
        width: "100%",
        padding: "14px",
        margin: "0 auto 20px",
        color: "#ffffff",
        background: "#181818",
        border: "1px solid #595451",
        borderRadius: "8px",
        fontSize: "16px",
    }}
/>
        <input
          type="file"
          accept="video/*"
          onChange={(event) => {
            setFile(event.target.files?.[0] || null);
            setStatus("");
            setProgress(0);
          }}
          style={{
            display: "block",
            margin: "0 auto 25px",
            color: "#ffffff",
          }}
        />

        {file && (
          <p style={{ color: "#dcb65d", marginBottom: "20px" }}>
            Selected: {file.name}
            <br />
            Size: {(file.size / 1024 / 1024 / 1024).toFixed(2)} GB
          </p>
        )}

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

        {progress > 0 && (
          <div style={{ marginTop: "25px" }}>
            <div
              style={{
                width: "100%",
                height: "14px",
                background: "#333333",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "#dcb65d",
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            <p style={{ color: "#ffffff" }}>{progress}%</p>
          </div>
        )}
      </div>
    </main>
  );
}
