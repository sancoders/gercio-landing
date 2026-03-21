import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gercio.site"),
  title: "Gercio - Sistema de Gestión para Restaurantes con IA | Argentina",
  description:
    "Duplicá tus mesas sin contratar más mozos. Menú digital con chat IA, pagos integrados y gestión de cocina en tiempo real. ROI 18x. Prueba gratis 30 días.",
  keywords:
    "sistema restaurante qr argentina, menu digital restaurante, gestion restaurante ia, pedidos digitales restaurante, mercado pago restaurante",
  authors: [{ name: "Gercio" }],
  openGraph: {
    title: "Gercio - Duplicá tus mesas sin contratar más mozos",
    description:
      "Sistema completo de gestión con IA para restaurantes argentinos. Menú digital, chat inteligente, pagos automáticos y cocina sincronizada.",
    url: "https://gercio.site",
    siteName: "Gercio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gercio - Sistema de Gestión para Restaurantes",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gercio - Sistema de Gestión para Restaurantes con IA",
    description:
      "Duplicá tus mesas sin contratar más mozos. Prueba gratis 30 días.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
