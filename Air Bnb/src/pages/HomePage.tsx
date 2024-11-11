import React from 'react';
import Hero from '../components/Hero';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import { featuredProperties } from '../data/properties';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SearchFilters />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Featured places to stay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}