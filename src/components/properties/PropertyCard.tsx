import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

// Types
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
const formatPrice = (price: number) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} Lakh`;
  }
  return `₹ ${price.toLocaleString()}`;
};

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="property-card group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link to={`/properties/${property.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              {property.status}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              {property.type}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary-900 to-transparent h-24 pointer-events-none"></div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-display font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
              {property.title}
            </h3>
            <span className="text-lg font-bold text-primary-600">
              {formatPrice(property.price)}
            </span>
          </div>
          
          <div className="flex items-center text-secondary-600 mb-4">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          
          <p className="text-secondary-700 mb-4 line-clamp-2">
            {property.description}
          </p>
          
          <div className="flex justify-between pt-4 border-t border-secondary-200">
            <div className="flex items-center text-secondary-700">
              <Bed size={18} className="mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-secondary-700">
              <Bath size={18} className="mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-secondary-700">
              <Square size={18} className="mr-1" />
              <span>{property.area.toLocaleString()} ft²</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;