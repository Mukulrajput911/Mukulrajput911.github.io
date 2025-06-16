import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Home,
  BedDouble, 
  Bath, 
  Square, 
  Mail, 
  Phone, 
  Share2,
  Heart,
  ArrowLeft
} from 'lucide-react';
import PropertyGallery from '../components/properties/PropertyGallery';

// Types
import { Property } from '../types/property';

// Import data
import propertiesData from '../data/properties.json';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    
    try {
      if (id) {
        const foundProperty = propertiesData.properties.find(p => p.id === parseInt(id));
        
        if (foundProperty) {
          // Transform the data to match the Property type
          const transformedProperty: Property = {
            ...foundProperty,
            // Convert price from string to number if it's a string
            price: typeof foundProperty.price === 'string' 
              ? parseFloat(foundProperty.price.replace(/[^0-9.-]+/g, '')) 
              : foundProperty.price,
            // Ensure yearBuilt is a number or provide a default
            yearBuilt: foundProperty.yearBuilt || new Date().getFullYear(),
            // Ensure images array exists
            images: foundProperty.images || [],
          };
          
          setProperty(transformedProperty);
        } else {
          setError(true);
        }
      }
    } catch (err) {
      setError(true);
    }
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">Property Not Found</h2>
        <p className="text-secondary-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/properties" className="btn-primary">
          <ArrowLeft size={18} className="mr-2" />
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Property Gallery */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <Link 
              to="/properties" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <PropertyGallery images={property.images} title={property.title} />
              </motion.div>
            </div>

            <div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {property.status}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-secondary-900">
                      {formatPrice(property.price)}
                    </h2>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 transition-colors duration-300">
                      <Heart size={20} className="text-secondary-700" />
                    </button>
                    <button className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 transition-colors duration-300">
                      <Share2 size={20} className="text-secondary-700" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-secondary-200 pt-4 mb-6">
                  <div className="flex items-start mb-4">
                    <MapPin size={18} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{property.address}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Home size={18} className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{property.type}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar size={18} className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">Built in {property.yearBuilt}</span>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="border-t border-secondary-200 pt-4 mb-6">
                  <h3 className="text-lg font-display font-bold mb-4 text-secondary-900">Listing Agent</h3>
                  <div className="flex items-center mb-4">
                    <img 
                      src={property.agent.image} 
                      alt={property.agent.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-secondary-900">{property.agent.name}</h4>
                      <p className="text-sm text-primary-600">Luxury Estates Agent</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href={`tel:${property.agent.phone}`} 
                      className="flex items-center text-secondary-700 hover:text-primary-600"
                    >
                      <Phone size={18} className="mr-3" />
                      {property.agent.phone}
                    </a>
                    <a 
                      href={`mailto:${property.agent.email}`} 
                      className="flex items-center text-secondary-700 hover:text-primary-600"
                    >
                      <Mail size={18} className="mr-3" />
                      {property.agent.email}
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="border-t border-secondary-200 pt-4">
                  <h3 className="text-lg font-display font-bold mb-4 text-secondary-900">Request Information</h3>
                  <form 
  action="https://formsubmit.co/rajhdr@gmail.com" 
  method="POST"
>
  {/* Honeypot field for spam prevention */}
  <input type="text" name="_honey" style={{ display: "none" }} />
  
  {/* Disable CAPTCHA if desired */}
  <input type="hidden" name="_captcha" value="false" />
  
  {/* Optional: Set redirect after success */}
  <input type="hidden" name="_next" value="https://adianantproperties.in/thank-you" />
  
  {/* Optional: Domain verification (must be added in FormSubmit dashboard) */}
  <input type="hidden" name="_origin" value="https://adianantproperties.in" />

  <div className="mb-4">
    <input 
      type="text" 
      name="name"
      placeholder="Your Name" 
      required
      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
  </div>

  <div className="mb-4">
    <input 
      type="email" 
      name="email"
      placeholder="Your Email" 
      required
      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
  </div>

  <div className="mb-4">
    <input 
      type="tel" 
      name="phone"
      placeholder="Your Phone" 
      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
  </div>

  <div className="mb-4">
    <textarea 
      name="message"
      placeholder="Your Message" 
      rows={3}
      required
      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      defaultValue={`I'm interested in ${property.address}`}
    ></textarea>
  </div>

  <button type="submit" className="btn-primary w-full">
    Send Message
  </button>
</form>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6 text-secondary-900">
                  {property.title}
                </h2>
                <p className="text-lg leading-relaxed text-secondary-700 mb-6">
                  {property.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-secondary-50 p-4 rounded-lg text-center">
                    <BedDouble size={24} className="text-primary-600 mx-auto mb-2" />
                    <span className="block text-sm text-secondary-600">Bedrooms</span>
                    <span className="block text-xl font-bold text-secondary-900">{property.bedrooms}</span>
                  </div>
                  <div className="bg-secondary-50 p-4 rounded-lg text-center">
                    <Bath size={24} className="text-primary-600 mx-auto mb-2" />
                    <span className="block text-sm text-secondary-600">Bathrooms</span>
                    <span className="block text-xl font-bold text-secondary-900">{property.bathrooms}</span>
                  </div>
                  <div className="bg-secondary-50 p-4 rounded-lg text-center">
                    <Square size={24} className="text-primary-600 mx-auto mb-2" />
                    <span className="block text-sm text-secondary-600">Square Feet</span>
                    <span className="block text-xl font-bold text-secondary-900">{property.area.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold mb-4 text-secondary-900">Property Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {property.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-700">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-display font-bold mb-6 text-secondary-900">Location</h3>
                {/* Map placeholder - would be replaced with actual map component */}
                <div className="bg-secondary-100 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin size={48} className="text-secondary-400 mx-auto mb-2" />
                    <span className="text-secondary-600">Interactive map would be displayed here</span>
                  </div>
                </div>
                <p className="text-secondary-700">
                  {property.address}, {property.location}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* <h3 className="text-xl font-display font-bold mb-4 text-secondary-900">
                  Schedule a Viewing
                </h3> */}
                {/* <p className="text-secondary-700 mb-6">
                  Choose your preferred date and time to visit this property in person.
                </p> */}
                {/* <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Schedule Viewing
                  </button>
                </form> */}
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* <h3 className="text-xl font-display font-bold mb-4 text-secondary-900">
                  Mortgage Calculator
                </h3> */}
                {/* <p className="text-secondary-700 mb-6">
                  Estimate your monthly payments for this property.
                </p>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Purchase Price
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      defaultValue={formatPrice(property.price)}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Down Payment (%)
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      defaultValue="20"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Interest Rate (%)
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      defaultValue="3.5"
                      step="0.1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Loan Term (years)
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="30">30 years</option>
                      <option value="20">20 years</option>
                      <option value="15">15 years</option>
                      <option value="10">10 years</option>
                    </select>
                  </div>
                  <button type="button" className="btn-primary w-full">
                    Calculate
                  </button>
                </form> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;