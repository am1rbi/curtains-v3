import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" onClick={handleLogoClick} className="text-2xl font-light text-gray-900">®Vecco</Link>
        <nav className="flex-grow">
          <ul className="flex justify-end items-center space-x-8">
            <li><Link to="/about" className="text-gray-600 hover:text-gold transition-colors duration-300">אודות</Link></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-600 hover:text-gold transition-colors duration-300">שירותים</a></li>
            <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-gray-600 hover:text-gold transition-colors duration-300">גלריה</a></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-gold transition-colors duration-300">בלוג</Link></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-600 hover:text-gold transition-colors duration-300">צור קשר</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;