import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Find Your Dream Property?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team of experts is ready to guide you through every step of your luxury real estate journey.
            Whether you're buying, selling, or investing, we're here to help.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/properties" className="btn-primary">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;