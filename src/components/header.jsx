import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Wand2 } from 'lucide-react'

export function Header() {
  return (
    (<header
      className="bg-[#1B1212] shadow-md sticky top-0 z-50 border-b border-[#FFFFFF20]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#FFFFFF]">
          Finckr
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link
              href="/"
              className="text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors">Home</Link></li>
            <li><Link
              href="/explore"
              className="text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors">Explore</Link></li>
            <li><Link
              href="/calculators"
              className="text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors">Calculators</Link></li>
            <li><Link
              href="/blog"
              className="text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors">Blog</Link></li>
            <li><Link
              href="/card-gallery"
              className="text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors">Card Gallery</Link></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button
            asChild
            variant="outline"
            className="group border-[#FFFFFF40] text-[#FFFFFF] hover:bg-[#FFFFFF20]">
            <Link href="/card-wizard">
              <Wand2 className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Card Wizard
            </Link>
          </Button>
          <Button className="bg-[#FFFFFF] text-[#1B1212] hover:bg-[#FFFFFF80]">Sign Up</Button>
        </div>
        <button className="md:hidden text-[#FFFFFF]">
          <Menu size={24} />
        </button>
      </div>
    </header>)
  );
}

