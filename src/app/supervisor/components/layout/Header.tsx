import { BellIcon, Settings, UserCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>
        <div className="relative">
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <UserCircle className="w-5 h-5" />
            <span className="text-sm">Kirthy Rajan</span>
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Profile
              </button>
              <Link href="/user">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Logout
              </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}