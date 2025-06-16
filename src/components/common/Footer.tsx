import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import LOGO from '../../../public/LOGO Full.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              {/* <Home size={24} className="text-primary-400" /> */}
              <img
            src={LOGO}
            alt="Logo"
            className={`h-10 transition-all duration-300` }
          />
              <span className="font-display text-xl font-bold text-white">Adi Anant Properties</span>
            </Link>
            <p className="text-secondary-300 mb-6">
              Providing exceptional real estate services for discerning clients since 2005. 
              Your luxury property journey begins with us.
            </p>
            {/* <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-secondary-300 hover:text-white transition-colors duration-300">
                <Link to="/services">Adi Anant Properties Sales</Link>
              </li>
              <li className="text-secondary-300 hover:text-white transition-colors duration-300">
                <Link to="/services">Premium Property Acquisition</Link>
              </li>
              <li className="text-secondary-300 hover:text-white transition-colors duration-300">
                <Link to="/services">Investment Advisory</Link>
              </li>
              <li className="text-secondary-300 hover:text-white transition-colors duration-300">
                <Link to="/services">Relocation Services</Link>
              </li>
              <li className="text-secondary-300 hover:text-white transition-colors duration-300">
                <Link to="/services">Property Management</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">
                  Address: A-13 Shivalik Nagar Complex
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+918218514554" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  (+91)8218514554
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:rajhdr@gmail.com" className="text-secondary-300 hover:text-white transition-colors duration-300">
                  rajhdr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Adi Anant Properties. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-400 text-sm hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 text-sm hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-400 text-sm hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;