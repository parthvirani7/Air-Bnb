import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[500px] w-full">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Find your next adventure
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Discover unique stays around the world
          </p>
          <div className="bg-white rounded-full p-2 flex items-center w-full max-w-2xl shadow-lg">
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-1 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}