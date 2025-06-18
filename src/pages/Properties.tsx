import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, IndianRupee, Tag } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';

// Types
import { Property } from '../types/property';

// Import data
import propertiesData from '../data/properties.json';

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  
  // Filter states
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [status, setStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Set properties from JSON data
    setProperties(propertiesData.properties);
    setFilteredProperties(propertiesData.properties);
  }, []);

  // Handle filter changes
  useEffect(() => {
    let result = properties;

    // Filter by location
    if (location) {
      result = result.filter(property => property.location.includes(location));
    }

    // Filter by property type
    if (propertyType) {
      result = result.filter(property => property.type === propertyType);
    }

    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        result = result.filter(property => property.price >= min && property.price <= max);
      } else {
        // Handle cases like "10000000+" where there's no upper limit
        result = result.filter(property => property.price >= min);
      }
    }

    // Filter by status
    if (status) {
      result = result.filter(property => property.status === status);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query)
      );
    }

    setFilteredProperties(result);
  }, [properties, location, propertyType, priceRange, status, searchQuery]);

  const uniqueLocations = [...new Set(properties.map(property => property.location))];
  const uniqueTypes = [...new Set(properties.map(property => property.type))];
  const uniqueStatuses = [...new Set(properties.map(property => property.status))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg)' }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Luxury Properties
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our exclusive collection of premium properties
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by property name, location, or features..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-secondary-400" size={20} />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-secondary-700 mb-2">
                  <MapPin size={16} className="mr-2" />
                  Location
                </label>
                <select 
                  className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Any Location</option>
                  {uniqueLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-secondary-700 mb-2">
                  <Home size={16} className="mr-2" />
                  Property Type
                </label>
                <select 
                  className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Any Type</option>
                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-secondary-700 mb-2">
                  <IndianRupee size={16} className="mr-2" />
                  Price Range
                </label>
                <select 
                  className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="1000000-3000000">1000000 - 3000000</option>
                  <option value="3000000-5000000">3000000 - 5000000</option>
                  <option value="5000000-10000000">5000000 - 10000000</option>
                  <option value="10000000">$10M+</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-secondary-700 mb-2">
                  <Tag size={16} className="mr-2" />
                  Status
                </label>
                <select 
                  className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Any Status</option>
                  {uniqueStatuses.map((stat) => (
                    <option key={stat} value={stat}>{stat}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <motion.h2 
              className="text-2xl font-display font-bold text-secondary-900 mb-4 sm:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {filteredProperties.length} Properties Found
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <select className="px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Sort by: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </motion.div>
          </div>

          {filteredProperties.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-secondary-800 mb-2">No properties found</h3>
              <p className="text-secondary-600">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;