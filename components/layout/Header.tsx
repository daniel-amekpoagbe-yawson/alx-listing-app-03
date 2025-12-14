import Image from "next/image";
import Link from "next/link";

const accommodations = ["Rooms", "Mansion", "Countryside", "Villas", "Apartments"];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/logo.png" // Replace with your logo path
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="ml-2 text-xl font-bold text-gray-800">StayFinder</span>
              </a>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search for a place..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <a className="text-gray-700 hover:text-blue-500 font-medium">Sign In</a>
            </Link>
            <Link href="/signup">
              <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-medium">
                Sign Up
              </a>
            </Link>
          </div>
        </div>

        {/* Types of Accommodation */}
        <nav className="mt-2 flex space-x-4 overflow-x-auto py-2">
          {accommodations.map((type) => (
            <Link key={type} href={`/accommodation/${type.toLowerCase()}`}>
              <a className="px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 whitespace-nowrap">
                {type}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
