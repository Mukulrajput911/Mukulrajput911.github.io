import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X } from 'lucide-react';
import LOGO from '../../../public/LOGO Full.png';
interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const headerClass = scrolled
  ? 'bg-white shadow-md py-4 text-secondary-900 backdrop-blur-sm'
  : 'bg-transparent py-6 text-black';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 relative px-4 py-2 ${
      isActive 
        ? scrolled ? 'text-primary-600 font-medium' : 'text-white font-medium' 
        : scrolled ? 'text-secondary-800 hover:text-primary-600' : 'text-white hover:text-accent-300'
    }`;

  const menuVariants = {
    closed: { opacity: 0, x: '-100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}
>
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display text-2xl font-bold"
        >
          {/* <Home 
            size={28} 
            className={`transition-colors duration-300 ${scrolled ? 'text-primary-600' : 'text-white'}`} 
          /> */}
          <img
            src={LOGO}
            alt="Logo"
            className={`h-10 transition-all duration-300 ${scrolled ? 'shadow-md scale-105' : 'scale-100'}`}
          />
          <span className="tracking-tight">Adi Anant Properties</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
       <button
  onClick={toggleMenu}
  className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
    scrolled ? 'text-secondary-900' : 'text-black'
  }`}
  aria-label="Toggle Menu"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-[60] md:hidden pt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col h-full">
                <div className="p-4 flex justify-between items-center border-b">
                  <Link to="/" className="flex items-center gap-2 text-2xl font-bold" onClick={closeMenu}>
                    <img
                      src={LOGO}
                      alt="Logo"
                      className="h-10"
                    />
                    <span className="font-display tracking-tight">Adi Anant Properties</span>
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-800 focus:outline-none"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col py-8 px-4 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block text-xl font-medium py-2 ${
                            isActive ? 'text-primary-600' : 'text-secondary-800 hover:text-primary-600'
                          }`
                        }
                        onClick={closeMenu}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;