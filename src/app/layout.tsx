import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vivek Parekh Productions - Creative Marketing & Film Distribution",
  description: "Empowering creators to reach the right audience through impactful advertising. Co-Branding, Advertising, Social Media Planning & Buying, and Film Distribution.",
  keywords: "film production, marketing, advertising, social media, film distribution, creative services, branding",
  authors: [{ name: "Vivek Parekh Productions" }],
  creator: "Vivek Parekh Productions",
  publisher: "Vivek Parekh Productions",
  robots: "index, follow",
  openGraph: {
    title: "Vivek Parekh Productions - Creative Marketing & Film Distribution",
    description: "Empowering creators to reach the right audience through impactful advertising. Co-Branding, Advertising, Social Media Planning & Buying, and Film Distribution.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Parekh Productions - Creative Marketing & Film Distribution",
    description: "Empowering creators to reach the right audience through impactful advertising. Co-Branding, Advertising, Social Media Planning & Buying, and Film Distribution.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B5CF6", // Lavender theme color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="lavender">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var root = document.documentElement;
                  var theme = 'lavender';
                  var isDark = false;
                  root.setAttribute('data-theme', theme);
                  if (isDark) root.classList.add('dark'); else root.classList.remove('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
