import React from 'react';
import { Search, User, Menu, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-rose-500">stayscape</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="border-r pr-4">Anywhere</div>
            <div className="border-r px-4">Any week</div>
            <div className="pl-4 pr-2">Add guests</div>
            <div className="bg-rose-500 p-2 rounded-full">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-full">
              Become a Host
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Globe className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md cursor-pointer">
              <Menu className="h-5 w-5" />
              <User className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}