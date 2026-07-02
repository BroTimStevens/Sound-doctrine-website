import "./globals.css";

export const metadata = {
  title: "Sound Doctrine with Bro Tim",
  description: "Bible teaching, prophecy studies, and sound doctrine with Bro Tim.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
