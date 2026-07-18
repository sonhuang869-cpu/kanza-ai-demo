import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KANZA/AI — The Content Studio',
  description: 'An editorial-grade content studio for Saudi brands. Unearth your content treasure, powered by AI.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 48 48%22%3E%3Cpath d=%22M24 3 L45 24 L24 45 L3 24 Z%22 stroke=%22%230F0F0F%22 stroke-width=%221.5%22 fill=%22none%22/%3E%3Cpath d=%22M14 14 L14 34 M14 24 L26 14 M14 24 L26 34%22 stroke=%22%230F0F0F%22 stroke-width=%222.5%22 fill=%22none%22/%3E%3Cpath d=%22M32 18 L38 24 L32 30 Z%22 fill=%22%23A93E1E%22/%3E%3Ccircle cx=%2224%22 cy=%2224%22 r=%221.5%22 fill=%22%23A93E1E%22/%3E%3C/svg%3E',
      },
    ],
  },
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
