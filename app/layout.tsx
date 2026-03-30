import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/next';
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    template: '%s | ZigZag',
    default: 'ZigZag — Developer Tools for Polkadot',
  },
  description:
    'Simple, typed developer tools for Polkadot SDK chains. Chain registry, wallet auth, React hooks, and more.',
  metadataBase: new URL('https://zigzag.js.org'),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ZigZag',
    title: 'ZigZag — Developer Tools for Polkadot',
    description:
      'Simple, typed developer tools for Polkadot SDK chains. Chain registry, wallet auth, React hooks, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@itsyogesh18',
  },
  keywords: [
    'Polkadot',
    'Substrate',
    'TypeScript',
    'developer tools',
    'chain registry',
    'wallet auth',
    'Better Auth',
    'Dedot',
    'LunoKit',
    'React hooks',
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
