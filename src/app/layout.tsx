import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:"Nurture nerve | Competitive and Govt. Jobs exam preparation",
    template:"%s"
  },
  description: "Competitive and Govt. Jobs exam preparation",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}
