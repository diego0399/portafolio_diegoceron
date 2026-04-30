import "./globals.css";

export const metadata = {
  title: "Portafolio - Diego Cerón",
  description:
    "Portafolio profesional de Diego Cerón, desarrollador back end junior con experiencia en Java, Spring Boot, PHP, APIs, bases de datos y aplicaciones web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
