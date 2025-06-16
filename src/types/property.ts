export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  featured: boolean;
  status: string;
  type: string;
  amenities: string[];
  images: string[];
  agent: Agent;
}

export interface Agent {
  name: string;
  phone: string;
  email: string;
  image: string;
  title?: string;
  bio?: string;
  specialties?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}