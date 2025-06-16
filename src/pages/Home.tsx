import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import AboutSection from '../components/home/AboutSection';
import ServicesPreview from '../components/home/ServicesPreview';

import CTASection from '../components/home/CTASection';

// Import types
import { Property, Service } from '../types/property';

// Import data
import propertiesData from '../data/properties.json';

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Set properties from JSON data
    setProperties(propertiesData.properties);
    

    
    // Set services from JSON data
    setServices(propertiesData.services);
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProperties properties={properties} />
      <AboutSection />
      <ServicesPreview services={services} />
      
      <CTASection />
    </div>
  );
};

export default Home;