import React from 'react';
import { Home, Building2, Warehouse, Tent } from 'lucide-react';

const categories = [
  { label: 'Houses', icon: Home },
  { label: 'Apartments', icon: Building2 },
  { label: 'Lofts', icon: Warehouse },
  { label: 'Unique stays', icon: Tent },
];

export default function SearchFilters() {
  return (
    <div className="container mx-auto px-4 py-4 border-b">
      <div className="flex space-x-8 overflow-x-auto pb-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              className="flex flex-col items-center min-w-[80px] gap-2 text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 pb-2 transition-all"
            >
              <Icon className="h-6 w-6" />
              <span className="text-sm">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}