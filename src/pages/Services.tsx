import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

// Import data
import propertiesData from '../data/properties.json';

const Services: React.FC = () => {
  const [services, setServices] = useState(propertiesData.services);

  // Get the icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={48} className="text-primary-600" /> : null;
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
    hidden: { opacity: 0, y: 30 },
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive real estate services tailored to exceed the expectations of our discerning clients
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 gap-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={`service-${service.id}`}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-primary-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-6 text-secondary-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary-700 mb-6">
                    {service.description}
                  </p>
                  <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <h3 className="font-display font-bold text-xl mb-3 text-secondary-900">Why Choose Our {service.title}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-secondary-700">Personalized approach tailored to your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-secondary-700">Extensive network of industry professionals and resources</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-secondary-700">Experienced team with deep market knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={service.photoUrl}
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    style={{ height: "500px" }}
                  />
                  <div className={`absolute ${index % 2 === 0 ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} bg-white p-6 rounded-lg shadow-lg`}>
                    <p className="text-3xl font-display font-bold text-primary-600">100%</p>
                    <p className="text-secondary-700">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How we work with you to ensure a seamless experience
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  { 
                    number: 1, 
                    title: "Initial Consultation", 
                    description: "We begin by understanding your specific needs, preferences, and goals, whether you're buying, selling, or investing." 
                  },
                  { 
                    number: 2, 
                    title: "Strategy Development", 
                    description: "Based on your requirements, we develop a customized plan that aligns with your objectives and timeline." 
                  },
                  { 
                    number: 3, 
                    title: "Implementation", 
                    description: "Our team executes the strategy, handling all aspects of the process with meticulous attention to detail." 
                  },
                  { 
                    number: 4, 
                    title: "Ongoing Support", 
                    description: "Even after the transaction is complete, we continue to provide support and remain available for any future needs." 
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex flex-col md:flex-row gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md flex-grow">
                      <h3 className="text-xl font-display font-bold mb-3 text-secondary-900">
                        {step.title}
                      </h3>
                      <p className="text-secondary-700">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Answers to common questions about our services
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What areas do you serve?",
                  answer: "We primarily operate in major luxury markets including New York, Los Angeles, Miami, Aspen, and the Hamptons, with partner agencies extending our reach to international destinations."
                },
                {
                  question: "How do you determine the value of a luxury property?",
                  answer: "Our valuation process involves a comprehensive analysis of comparable sales, unique property features, location attributes, market trends, and potential for value appreciation. We combine traditional methods with innovative approaches to ensure accurate pricing."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes, we have extensive experience working with international buyers and sellers. Our team can navigate the complexities of cross-border transactions, currency considerations, and legal requirements."
                },
                {
                  question: "What makes your marketing approach different?",
                  answer: "Our marketing strategy for luxury properties combines traditional high-end exposure with cutting-edge digital techniques. We create custom marketing plans for each property, utilizing professional photography, virtual tours, targeted advertising, and exclusive networks."
                },
                {
                  question: "How long does the buying or selling process typically take?",
                  answer: "The timeline varies based on numerous factors including property type, location, price point, and market conditions. While some transactions may complete in as little as 30 days, others may take several months to ensure the optimal outcome."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary-50 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h3 className="text-lg font-medium text-secondary-900">{faq.question}</h3>
                      <span className="transition-transform duration-300 transform group-open:rotate-180">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-secondary-700">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
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
            Ready to Experience Exceptional Service?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss how we can assist with your real estate needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;