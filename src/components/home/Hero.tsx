import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen-90 flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-secondary-900/60 to-secondary-900/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover Your Dream <span className="text-primary-400"></span> Property
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience unparalleled service in finding the perfect home tailored to your lifestyle.
            Our exclusive listings showcase the finest properties worldwide.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/properties" className="btn-primary">
              View Properties
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Property Search */}
       <motion.div 
  className="mt-12 flex justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <Link 
    to="/properties" 
    className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
  >
    <Search size={18} />
    <span>Search Properties</span>
  </Link>
</motion.div>
      </div>
      
      {/* Scroll Indicator
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <p className="text-sm mb-2">Scroll to explore</p>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3, 1], y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Hero;