import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, Building, Users, Award, TrendingUp } from 'lucide-react';

// Import data
import propertiesData from '../data/properties.json';

const About: React.FC = () => {
  const [agents, setAgents] = useState(propertiesData.agents);

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: "Global Reach",
      description: "With partners worldwide, we connect buyers and sellers across Indian markets."
    },
    {
      icon: <Building className="h-6 w-6 text-primary-600" />,
      title: "Exclusive Properties",
      description: "Access to exclusive off-market listings not available to the general public."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Expert Team",
      description: "Our agents average multiple years of experience in real estate markets."
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: "Award-Winning",
      description: "Recognized annually for excellence in property representation by our customers."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: "Market Insights",
      description: "Deep analysis and reporting on market trends and investment opportunities."
    },
    {
      icon: <Check className="h-6 w-6 text-primary-600" />,
      title: "Personalized Service",
      description: "Tailored approach meeting the unique needs of each client."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
            About Luxury Estates
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Setting the standard in luxury real estate since 2005
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-secondary-700 mb-6">
                At Adi Anant Properties, we began with a simple but powerful vision — to redefine how people find their place in the world. As a newly established real estate venture, we are driven by passion, integrity, and a deep commitment to helping individuals and families discover not just a property, but a place they can truly call home.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Founded with the belief that real estate should be more than transactions, Adi Anant stands for trust, transparency, and long-term relationships. Whether it's your first home, an investment property, or a dream commercial space, we walk alongside you every step of the way — listening, guiding, and delivering.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Over the years, we've had the privilege of representing some of the world's most extraordinary 
                properties and working with clients who demand the very best. Our success is built on a foundation 
                of trust, expertise, and an unwavering commitment to exceeding expectations.
              </p>
              <p className="text-lg text-secondary-700">
                While our journey has just begun, our ambition is boundless. With every listing we post and every deal we close, we're building a foundation for a future where real estate is more accessible, reliable, and rewarding.

Join us as we grow — brick by brick, bond by bond — into a name that stands tall in the world of real estate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg" 
                alt="Luxury Estate Property" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-display font-bold text-primary-600">5+ Years</p>
                <p className="text-secondary-700">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-secondary-900">
                  {feature.title}
                </h3>
                <p className="text-secondary-700">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our team of experienced luxury real estate professionals
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {agents.map((agent) => (
              <motion.div 
                key={agent.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {agent.title}
                  </p>
                  <p className="text-secondary-700 mb-4 line-clamp-3">
                    {agent.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a href={`mailto:${agent.email}`} className="text-primary-600 hover:text-primary-700">
                      Email
                    </a>
                    <a href={`tel:${agent.phone}`} className="text-primary-600 hover:text-primary-700">
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Exclusive Network
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated on our latest luxury property listings, market insights, and exclusive events.
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary sm:flex-shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-secondary-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;