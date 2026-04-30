import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import GlobalEnquiryPopup from "@/components/GlobalEnquiryPopup";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  verification: {
    google: "-uzJ_6qeakGANZNZjU1sWENiMJaNwWiis8PqEsMxcpw",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "Multi-site Blog System",
    template: "%s | Multi-site Blog System",
  },
  description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  openGraph: {
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRTKKVST');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* performance hints to reduce render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://nidads.com" />
        {/* tailwind is compiled via PostCSS; no CDN script needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} app-shell`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRTKKVST"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar/>
        {children}
        <Footer/>
        <FloatingContactButtons phoneE164={"+919205436796"} />
        <GlobalEnquiryPopup />
      </body>
    </html>
  );
}
