import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  UserCheck, 
  Home, 
  Gem
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { 
      icon: <Home className="h-8 w-8 text-primary-500" />,
      value: "25+", 
      label: "Properties Sold", 
      description: "Since our foundation in 2005" 
    },
    { 
      icon: <UserCheck className="h-8 w-8 text-primary-500" />,
      value: "100%", 
      label: "Client Satisfaction", 
      description: "Based on independent reviews" 
    },
    { 
      icon: <Award className="h-8 w-8 text-primary-500" />,
      value: "5+", 
      label: "Industry Awards", 
      description: "For excellence in real estate" 
    },
    { 
      icon: <Gem className="h-8 w-8 text-primary-500" />,
      value: "Rs. 1.2Cr", 
      label: "Transaction Volume", 
      description: "In the last 5 years alone" 
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg" 
                alt="Luxury Estate" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ height: "600px" }} 
              />
             
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">About Luxury Estates</h2>
            <p className="text-lg text-secondary-700 mb-6">
              For over many years, <b>Adi Anant Properties </b> has been the premier destination for those seeking exceptional properties 
              and unparalleled service in the luxury real estate market.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              Our team of dedicated professionals combines deep market knowledge with a personalized approach to help 
              our clients navigate the complex world of high-end real estate.
            </p>
            <p className="text-lg text-secondary-700 mb-8">
              Whether you're looking to buy, sell, or invest in luxury properties, our commitment to excellence and 
              discretion ensures a seamless experience tailored to your unique needs.
            </p>
            
            <Link to="/about" className="btn-primary mb-12">
              Learn More About Us
            </Link>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="font-display text-3xl font-bold text-secondary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="font-medium text-primary-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-secondary-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;