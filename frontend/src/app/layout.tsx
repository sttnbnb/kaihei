import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaihei",
  description: "Minecraft server status",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="h-screen w-screen px-44 py-6">
        <Header />
        <div className="flex h-full w-full items-center">{children}</div>
      </body>
    </html>
  );
}