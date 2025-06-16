import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const subject = encodeURIComponent(form.subject.value);
    const message = encodeURIComponent(form.message.value);
    
    // Redirect to mailto link
    window.location.href = `mailto:info@luxuryestates.com?subject=${subject}&body=${message}`;
    // - Mukul
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to assist you with all your luxury real estate needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-6 text-secondary-900">
                  Send Us a Message
                </h2>
                <form 
  action="https://formsubmit.co/rajhdr@gmail.com" 
  method="POST"
>
  {/* Optional: Disable CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Optional: Redirect after submission */}
  <input type="hidden" name="_next" value="https://adianantproperties.in" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
        Your Name
      </label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required
        className="w-full px-4 py-3 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
        Your Email
      </label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        className="w-full px-4 py-3 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="john@example.com"
      />
    </div>
  </div>
  
  <div className="mb-6">
    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
      Subject
    </label>
    <input 
      type="text" 
      id="subject" 
      name="subject" 
      required
      className="w-full px-4 py-3 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      placeholder="How can we help you?"
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
      Message
    </label>
    <textarea 
      id="message" 
      name="message" 
      rows={6} 
      required
      className="w-full px-4 py-3 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      placeholder="Write your message here..."
    ></textarea>
  </div>
  
  <div>
    <button 
      type="submit" 
      className="btn-primary flex items-center justify-center gap-2"
    >
      <Send size={18} />
      Send Message
    </button>
  </div>
</form>

              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-secondary-900 text-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-display font-bold mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-primary-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <a href="https://maps.app.goo.gl/wm28nw2Hjezq4ku67" className="text-secondary-300 hover:text-white transition-colors duration-300">
                        A-13 Shivalik Nagar Complex, BHEL<br />
                        Haridwar - 249403
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-primary-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <a href="mailto:rajhdr@gmail.com" className="text-secondary-300 hover:text-white transition-colors duration-300">
                        rajhdr@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-primary-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <a href="tel:+918218514554" className="text-secondary-300 hover:text-white transition-colors duration-300">
                        (+91)8218514554
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-primary-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-secondary-300">
                        Monday - Friday: 9:00 AM - 10:00 PM<br />
                        Saturday: 10:00 AM - 9:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-12">
                  <h3 className="font-medium mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Office Information */}


      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
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
            className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let our experts guide you through the luxury real estate market.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/properties" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Browse Properties
            </a>
            <a href="tel:+918218514554" className="btn border-2 border-white text-white hover:bg-white/10">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;