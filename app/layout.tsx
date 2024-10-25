import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketMind AI - Indian Market Analysis Platform',
  description: 'AI-powered marketing insights for India\'s diverse consumer base',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>{children}</main>
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}