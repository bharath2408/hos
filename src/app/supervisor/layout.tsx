import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/app/supervisor/components/layout/MainLayout';  //D:\project\web-app\src\app\supervisor\components\layout\MainLayout.tsx

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supervisor Portal',
  description: 'Management portal for supervisors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}