import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#006a4e] text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="KMC Logo" width={80} height={80} />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Karachi Metropolitan Corporation</h1>
            <p className="text-sm">Government of Sindh</p>
          </div>
        </div>
        <div className="flex items-center">
          <Link href="#" className="mr-4 text-sm">
            Sitemap
          </Link>
          <Link href="#" className="mr-4 text-sm">
            Contact Us
          </Link>
          <div className="relative">
            <input type="text" placeholder="Search" className="bg-white text-black px-2 py-1 rounded" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Image src="/search-icon.png" alt="Search" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

