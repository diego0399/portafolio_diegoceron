import "./globals.css";

export const metadata = {
  title: "Portafolio - Diego Cerón",
  description:
    "Desarrollador full-stack con experiencia en React Native y FastAPI",
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
