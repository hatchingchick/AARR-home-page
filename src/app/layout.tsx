import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import type { ReactNode } from "react";
import Container from "@mui/material/Container";
import { headers } from "next/headers";
import Stack from "@mui/material/Stack";
import { Noto_Sans_JP } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { siteDescription, siteName, siteShortDescription } from "@/constants/site";
import Footer from "@/components/footer";

import "@/styles/global.scss";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const viewport: Viewport = {
  themeColor: "#f381a7"
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = new URL(headers().get("x-url") as string);

  return {
    metadataBase: BASE_URL === undefined ? undefined : new URL(BASE_URL),
    title: {
      default: `${siteName} - ${siteShortDescription}`,
      template: `%s | ${siteName}`
    },
    description: siteDescription,
    twitter: {
      card: "summary_large_image"
    },
    openGraph: {
      url: url.href,
      type: url.pathname === "/" ? "website" : "article",
      siteName,
      title: {
        default: `${siteName} - ${siteShortDescription}`,
        template: `%s | ${siteName}`
      },
      description: siteDescription,
      images: [
        {
          alt: "",
          width: 1200,
          height: 630,
          type: "image/png",
          url: "/images/ogp-image-1200x630.png"
        }
      ]
    },
    icons: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicons/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "194x194",
        url: "/favicons/favicon-194x194.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicons/android-chrome-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png"
      },
      {
        rel: "shortcut icon",
        url: "/favicons/favicon.ico"
      }
    ],
    manifest: "/favicons/site.webmanifest",
    other: {
      "msapplication-TileColor": "#2d89ef",
      "msapplication-TileImage": "/favicons/mstile-144x144.png",
      "msapplication-config": "/favicons/browserconfig.xml"
    }
  };
};

export type LayoutProps = {
  children: ReactNode
};

type NamedColor = "blue" | "green" | "red";

type Color = NamedColor | string;

const color: Color = "a";

color;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <head />
      <body className={notoSansJp.className}>
        <ThemeProvider>
          <Stack minHeight="100svh">
            <Header />
            <Container
              sx={{
                paddingY: "1rem",
                display: "flex",
                flexDirection: "column",
                flex: 1
              }}
            >
              {children}
            </Container>
            <Footer />
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  );
}