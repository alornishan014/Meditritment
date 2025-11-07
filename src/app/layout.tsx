import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Meditritment - Your Trusted Medical Information Source",
    template: "%s | Meditritment"
  },
  description: "Comprehensive medical information and treatment insights written by qualified medical professionals. Expert health articles, treatment options, and medical education.",
  keywords: [
    "medical information",
    "health articles",
    "treatment options",
    "medical education",
    "healthcare professionals",
    "medical advice",
    "health tips",
    "wellness",
    "medical research",
    "patient education"
  ],
  authors: [{ name: "Meditritment Medical Team" }],
  creator: "Meditritment",
  publisher: "Meditritment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meditritment.com',
    title: 'Meditritment - Your Trusted Medical Information Source',
    description: 'Comprehensive medical information and treatment insights written by qualified medical professionals.',
    siteName: 'Meditritment',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meditritment - Medical Information Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meditritment - Your Trusted Medical Information Source',
    description: 'Comprehensive medical information and treatment insights written by qualified medical professionals.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://meditritment.com',
  },
  app_name: 'Meditritment',
  applicationName: 'Meditritment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Structured Data for Medical Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Meditritment",
              "url": "https://meditritment.com",
              "logo": "https://meditritment.com/logo.png",
              "description": "Comprehensive medical information and treatment insights written by qualified medical professionals.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United States"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-MEDICAL",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://t.me/drmaksudaruhi"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
