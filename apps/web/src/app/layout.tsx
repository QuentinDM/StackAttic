import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackAttic",
  description: "Open source foundation for modular SaaS applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
