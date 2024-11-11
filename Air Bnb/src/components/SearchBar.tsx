import React, { useState } from 'react';
import { Search, Users } from 'lucide-react';
import { useStore } from '../lib/store';
import DatePicker from './ui/DatePicker';
import Button from './ui/Button';

export default function SearchBar() {
  const { searchFilters, setSearchFilters } = useStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    setIsExpanded(false);
    // Implement search functionality
  };

  return (
    <div className="relative">
      <div
        className={`bg-white rounded-full shadow-lg transition-all ${
          isExpanded ? 'rounded-t-2xl rounded-b-none' : ''
        }`}
      >
        <div className="flex items-center p-2 gap-4">
          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-1 px-4 py-2 rounded-full focus:outline-none"
            value={searchFilters.location}
            onChange={(e) => setSearchFilters({ location: e.target.value })}
            onFocus={() => setIsExpanded(true)}
          />
          <Button
            icon={Search}
            onClick={handleSearch}
            className="rounded-full"
          >
            Search
          </Button>
        </div>

        {isExpanded && (
          <div className="absolute top-full left-0 right-0 bg-white rounded-b-2xl shadow-lg p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DatePicker
                selected={searchFilters.checkIn}
                onChange={(date) => setSearchFilters({ checkIn: date })}
                placeholder="Check in"
                minDate={new Date()}
              />
              <DatePicker
                selected={searchFilters.checkOut}
                onChange={(date) => setSearchFilters({ checkOut: date })}
                placeholder="Check out"
                minDate={searchFilters.checkIn || new Date()}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={searchFilters.guests}
                  onChange={(e) => setSearchFilters({ guests: parseInt(e.target.value) })}
                  className="w-16 p-1 border rounded focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
                <span className="text-gray-600">guests</span>
              </div>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}