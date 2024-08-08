"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-700/40 hover:to-blue-700/40 shadow-lg">
      <div className="flex items-center">
        <Image src="/image.svg" alt="Logo" width={40} height={40} className="mr-4" />
        <div className="flex space-x-2">
          {['Home', 'Explore Us', 'About Us', 'Contact Us'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={`text-sm font-medium transition-all duration-500 ease-in-out rounded-full
                ${pathname === '/' + (item === 'Home' ? '' : item.toLowerCase().replace(' ', '-'))
                  ? 'bg-white/30 text-white'
                  : 'hover:bg-white/30 hover:scale-105 text-white/80 hover:text-white'
                }`}
              asChild
            >
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-500 ease-in-out rounded-full text-white/80 hover:text-white">
          Theme
        </Button>
        <Button variant="ghost" className="text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-500 ease-in-out rounded-full text-white/80 hover:text-white">
          Sign In
        </Button>
        <Button variant="ghost" className="text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-500 ease-in-out rounded-full text-white/80 hover:text-white">
          Login
        </Button>
      </div>
    </nav>
  )
}

export default Navbar