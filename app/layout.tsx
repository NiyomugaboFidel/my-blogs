import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sidebar from "@/components/sidebar";

export const metadata: any = {
  title: {
    default: "Fidele Noyomugabo",
    template: "%s | Fidele Noyomugabo",
  },
  description: "Developer, writer, Creator, and Animator.",
  openGraph: {
    title: "Fidele Noyomugabo",
    description: "Developer, writer, Creator, and Animator.",
    type: "website",
    url: "https://fidele.vercel.app/",
    siteName: "Fidele Noyomugabo",
    images: [
      {
        url: "https://feldux.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Filede Niyomugibo",
      },
    ],
    locale: "en-US",
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Filede Niyomugibo",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "font-sans text-black bg-white dark:bg-black dark:text-white"
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col  mx-4 mt-4 md:mt-20 lg:mt-20 lg:mx-auto">
        <div className="pb-5">
          <Sidebar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
