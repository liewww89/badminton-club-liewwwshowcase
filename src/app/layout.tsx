import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Badminton Club Management System | Sean Liew",
  description: "Explore Sean Liew's badminton club management project: sessions, registration, courts, attendance, inventory and finance in one workflow.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
