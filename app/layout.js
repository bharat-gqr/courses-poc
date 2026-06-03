import "./globals.css";

export const metadata = {
  title: "GrowQR Video Workspace",
  description: "Seekho-inspired GrowQR video discovery workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
