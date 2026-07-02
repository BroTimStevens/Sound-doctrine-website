import "./globals.css";

export const metadata = {
  title: "Sound Doctrine with Bro Tim",
  description: "Biblical truth, sound doctrine, prophecy studies, and ministry teaching with Bro Tim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
