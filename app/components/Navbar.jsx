'use client';
import { useState } from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold text-lg tracking-tight">
              <Link href="/">
                Doc<span className="text-primary">Appoint</span>
              </Link>
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-2 md:flex font-medium text-sm ">
          <li className="text-foreground/80 hover:text-foreground hover:bg-secondary transition px-3 py-2 rounded-lg">
            <Link href="#">Features</Link>
          </li>
          <li className="text-foreground/80 hover:text-foreground hover:bg-secondary transition px-3 py-2 rounded-lg">
            <Link href="#" className="font-medium " aria-current="page">
              Dashboard
            </Link>
          </li>
          <li className="text-foreground/80 hover:text-foreground hover:bg-secondary transition px-3 py-2 rounded-lg">
            <Link href="#">Pricing</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="#"
            className="hover:bg-secondary px-3 py-2 rounded-lg text-sm font-semibold transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg text-sm font-semibold transition shadow-soft"
          >
            Register
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 font-medium text-accent">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
