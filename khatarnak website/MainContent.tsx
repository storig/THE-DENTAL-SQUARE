import Image from "next/image"
import Link from "next/link"

export default function MainContent() {
  return (
    <main className="flex-grow bg-white py-8">
      <div className="container mx-auto flex">
        <div className="w-3/4 pr-8">
          <h2 className="text-2xl font-bold mb-4 text-[#006a4e]">Welcome to Karachi Metropolitan Corporation</h2>
          <p className="mb-4">
            Karachi Metropolitan Corporation (KMC) is the principal municipal agency responsible for governing and
            providing municipal services to the city of Karachi, the largest city in Pakistan and the capital of Sindh
            province.
          </p>
          <Image src="/karachi-skyline.jpg" alt="Karachi Skyline" width={800} height={400} className="mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#006a4e]">Latest News</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>KMC launches new waste management initiative</li>
            <li>Mayor announces infrastructure development plan</li>
            <li>City-wide tree plantation drive begins next week</li>
          </ul>
          <Link href="#" className="text-[#006a4e] hover:underline">
            Read more news
          </Link>
        </div>
        <div className="w-1/4">
          <div className="bg-[#f2f2f2] p-4 mb-4">
            <h3 className="text-lg font-bold mb-2 text-[#006a4e]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#006a4e] hover:underline">
                  Online Tax Payment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#006a4e] hover:underline">
                  Building Permits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#006a4e] hover:underline">
                  Complaint Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#006a4e] hover:underline">
                  Job Opportunities
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#f2f2f2] p-4">
            <h3 className="text-lg font-bold mb-2 text-[#006a4e]">Upcoming Events</h3>
            <ul className="space-y-2">
              <li>City Council Meeting - June 15</li>
              <li>Public Hearing on Zoning - June 22</li>
              <li>Community Clean-up Day - July 1</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

