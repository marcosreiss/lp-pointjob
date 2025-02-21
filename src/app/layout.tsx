import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Point Job",
  description: "Obtenha mais produtividade no registro de ponto da sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
