import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center z-50 bg-transparent">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-xl font-bold text-blue-600">TR</span>
        </div>
        <span className="text-2xl font-bold text-blue-600">ToxRemedies</span>
      </div>
      <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
        <li className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-1">
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Expertise</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
      <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
        Get a Consultation
      </button>
    </nav>
  )
}

export default Navbar
