import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Users, Bed, Bath, Home } from 'lucide-react';
import Button from '../components/ui/Button';
import { featuredProperties } from '../data/properties';

export default function PropertyPage() {
  const { id } = useParams();
  const property = featuredProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Property not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <Star className="h-5 w-5 fill-current text-yellow-400" />
            <span className="font-medium">{property.rating}</span>
            <span className="text-gray-500">({property.reviews} reviews)</span>
          </div>
          
          <p className="text-gray-600 mb-6">{property.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-400" />
              <span>{property.guests} guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="h-5 w-5 text-gray-400" />
              <span>{property.bedrooms} bedrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="h-5 w-5 text-gray-400" />
              <span>{property.baths} bathrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-gray-400" />
              <span>{property.type}</span>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-2xl font-bold">${property.price}</span>
                <span className="text-gray-500"> / night</span>
              </div>
              <Button size="lg">Book now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}