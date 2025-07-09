import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader } from "@/components/index";
import { Suspense } from "react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ahmed | Full Stack & MERN Stack Developer Karachi, Pakistan",
  description:
    "Muhammad Ahmed - Professional MERN Stack Developer & Full Stack Engineer based in Karachi, Pakistan. Building high-quality web applications using ReactJS, NextJS, NodeJS, Express, MongoDB, Redux, Material UI, and TailwindCSS.",
  keywords:
    "Muhammad Ahmed, Muhammad Ahmed Aslam, Full Stack Developer Karachi, MERN Stack Developer Karachi, ReactJS Developer Pakistan, NextJS Developer Pakistan, NodeJS Developer, ExpressJS Developer, SMIT Alumni, Saylani Mass IT Training, Integral Technologists, Software Engineer, Frontend Developer, Backend Developer, Web Designer, UI/UX Developer, Hire Developer Karachi, Developer Portfolio, Developer Resume, Full Stack Portfolio",
  authors: [{ name: "Muhammad Ahmed", url: "https://mahmedportfolio.vercel.app/" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmedportfolio.vercel.app/",
    title: "Muhammad Ahmed | Full Stack Developer Karachi, Pakistan",
    description:
      "Professional MERN Stack Developer & Full Stack Engineer from Karachi, Pakistan. Expert in React, Next.js, Node.js, Express, MongoDB & modern web technologies.",
    images: [
      {
        url: "https://res.cloudinary.com/durstxroh/image/upload/v1738261904/mbzw9citnwhll1tpg47r.jpg",
        alt: "Muhammad Ahmed | Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahmed | Full Stack Developer",
    description:
      "Hire Muhammad Ahmed — Full Stack Developer & MERN Stack Specialist in Karachi, Pakistan. Building robust, scalable web apps.",
    images: ["https://res.cloudinary.com/durstxroh/image/upload/v1738261904/mbzw9citnwhll1tpg47r.jpg"],
  },
};


export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="author" content="Muhammad Ahmed" />
        <link rel="canonical" href="https://mahmedportfolio.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="_q9tsAXyZ8Vq4579CGrRpFR35f71c91XvPt_POyQlTs" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
            <FloatingNav />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
