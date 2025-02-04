import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-[#f2f2f2] py-2">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Departments
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Media Center
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#006a4e] hover:underline">
              Tenders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

