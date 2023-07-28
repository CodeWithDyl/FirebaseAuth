'use client';
import Navbar from './components/Navbar';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Firebase Next.js Authentication',
  description:
    'Following Next.js tutorial on Firebase Authentication from Code Commerce.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
