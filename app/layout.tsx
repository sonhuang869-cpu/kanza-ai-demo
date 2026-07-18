import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KANZA AI — Smart Content Management',
  description: 'AI-powered content management platform for Saudi businesses. Generate, analyze, and schedule social media content in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
