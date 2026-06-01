import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const soraSans = Sora({
  variable: '--font-sora-sans',
  subsets: ['latin'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const manropeSans = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const metadata = {
  title: 'Vet for your Pet',
  description: 'Pet Doctor for your Adorable Pet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${soraSans.variable} ${manropeSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
