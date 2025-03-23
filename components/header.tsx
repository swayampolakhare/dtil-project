"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import News from '../components/news';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        >
          FinLit Hub
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/banking-schemes" className="hover:text-blue-500 transition-colors">
                Banking Schemes
              </Link>
            </li>
            <li>
              <Link href="/investment-tips" className="hover:text-blue-500 transition-colors">
                Investment Tips
              </Link>
            </li>
            <li>
            <Link href="/about" className="hover:text-blue-500 transition-colors">
                About Us
              </Link>
              
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

