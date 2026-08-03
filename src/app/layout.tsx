import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Native Development · Hany Saad",
  description: "CognitionX Egypt 2026 conference presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
