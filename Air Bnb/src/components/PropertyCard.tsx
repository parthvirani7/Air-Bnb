import React from 'react';
import { Star } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <h3 className="font-medium">{property.location}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{property.title}</p>
        <p className="mt-2">
          <span className="font-semibold">${property.price}</span> night
        </p>
      </div>
    </div>
  );
}