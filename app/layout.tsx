import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font";

export const metadata: Metadata = {
  title: "Code On JVM",
  description:
    "Join Code on JVM to connect with industry professionals, enhance your skills in JVM technologies, and prepare for real-world challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
