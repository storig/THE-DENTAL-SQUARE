import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#006a4e] text-white py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; 2023 Karachi Metropolitan Corporation. All rights reserved.</p>
        </div>
        <div>
          <Link href="#" className="mr-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

