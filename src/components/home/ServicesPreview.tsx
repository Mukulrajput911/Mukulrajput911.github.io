import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServicesPreviewProps {
  services: Service[];
}

const ServicesPreview: React.FC<ServicesPreviewProps> = ({ services }) => {
  // Get the icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={36} className="text-primary-600" /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive real estate services tailored to exceed the expectations of our discerning clients
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 6).map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="bg-secondary-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-lg shadow-md flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-secondary-900">
                {service.title}
              </h3>
              <p className="text-secondary-700 mb-4">
                {service.description}
              </p>
              <Link 
                to={`/services#service-${service.id}`} 
                className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;