import "./globals.css";

export const metadata = {
  title: "Ashim Maharjan",
  description: "Ashim Maharjan's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
