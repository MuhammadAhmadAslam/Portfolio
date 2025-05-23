import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader } from "@/components/index";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Muhammad Ahmed | fFull Stack Developer based in Karachi, Pakistan",
    description:
      "Explore the portfolio of Muhammad Ahmed based in Karachi , Pakistan, a skilled Full Stack Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
    images: [
      {
        url: "https://res.cloudinary.com/durstxroh/image/upload/v1738261904/mbzw9citnwhll1tpg47r.jpg",
        alt: "Muhammad Ahmed | Full Stack Developer based in Karachi , Pakistan",
      },
    ],
  },
  title:
    "Muhammad Ahmed | Full Stack Developer based in Karachi , Pakistan",
  description:
    "Explore the portfolio of Muhammad Ahmed based in Karachi Pakistan, a skilled Full Stack Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
  keywords:
    "Muhammad Ahmed, Ahmed Aslam Portolio , Proffesional Portfolio ,ReactJS Developer, NextJS Developer, ReactJS, NextJS, Redux, Material UI, TailwindCSS, Web Development, Portfolio, React developer, Next js developer, Karachi , Pakistan , NodeJS , ExpressJS , SMIT , Saylani Mass IT Training Program , SMIT Almuni , Senior Web Developer , Full Stack Developer , MERN Stack Developer , MERN Stack , Software Engineer , Software Development, Web Development, Frontend Developer, Backend Developer , Web Designer, UI/UX Designer, UI/UX Developer, UI/UX Engineer, UI/UX Design, UI/UX Development, UI/UX Engineering , UI/UX Portfolio, UI/UX Projects, UI/UX Case Studies, UI/UX Research, UI/UX Testing, UI/UX Prototyping, UI/UX Wireframing, UI/UX Mockups, UI/UX Design Systems, UI/UX Design Patterns, UI/UX Design Principles, UI/UX Design Process , LMS , Developer Portfolio , Software Engineer Portfolio , Software Engineer Projects , Software Engineer Case Studies , Software Engineer Research , Software Engineer Testing , Software Engineer Prototyping , Software Engineer Wireframing , Software Engineer Mockups , Software Engineer Design Systems, Software Engineer Design Patterns, Software Engineer Design Principles, Software Engineer Design Process",
  authors: [{ name: "Muhammad Ahmed", url: "https://ahmed-portfolio-sable.vercel.app/" }],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
};

export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
