import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FEINCA | Material Eléctrico Industrial, Energía Solar y LED en el Zulia",
  description:
    "Ferretería Eléctrica Industrial, C.A. Venta al mayor y detal de material eléctrico, energía solar, iluminación LED, tratamiento de agua y herramientas en Cabimas, Maracaibo y Ciudad Ojeda.",
  keywords: ["FEINCA", "material eléctrico", "energía solar", "Zulia", "Cabimas", "Maracaibo", "Ciudad Ojeda"],
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
