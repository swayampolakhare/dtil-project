import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About FinLit Hub</h3>
            <p className="text-sm">Empowering financial literacy in India through education and tools.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/banking-schemes" className="hover:underline">
                  Banking Schemes
                </Link>
              </li>
              <li>
                <Link href="/investment-tips" className="hover:underline">
                  Investment Tips
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 FinLit Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

