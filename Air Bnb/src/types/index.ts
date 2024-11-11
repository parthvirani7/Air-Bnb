export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  host: {
    id: string;
    name: string;
    avatar: string;
  };
  amenities: string[];
  type: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isHost: boolean;
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
  propertyType: string[];
  amenities: string[];
}