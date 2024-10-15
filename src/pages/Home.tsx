import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('תודה על פנייתך! נחזור אליך בהקדם.');
    setFormData({ name: '', email: '', phone: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1565898835704-3d6be4a2c98c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop'
  ];

  return (
    <>
      <section className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url("/placeholder-curtain.svg")'}}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light text-white sm:text-6xl mb-6 tracking-wide">®Vecco</h2>
          <p className="mt-4 text-xl text-gray-200 mb-12 font-light">עיצוב מינימליסטי ויוקרתי לחלל שלך</p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-light rounded-full text-white bg-gold hover:bg-gold-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            צרו קשר
            <MessageCircle className="mr-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-16">השירותים שלנו</h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {['עיצוב מותאם אישית', 'התקנה מקצועית', 'מבחר בדים יוקרתי'].map((feature) => (
            <div key={feature} className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="px-6 py-8">
                <h3 className="text-xl font-light text-gray-900 mb-4">{feature}</h3>
                <p className="text-base text-gray-600 font-light">אנו מתמחים באספקת פתרונות וילונות ברמה הגבוהה ביותר, תוך שימת דגש על איכות ודיוק.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full h-64 flex items-center justify-center text-black text-3xl font-light">
              ®Vecco Designs
            </div>
            {galleryImages.slice(0, 8).map((image, index) => (
              <div key={index} className="relative overflow-hidden shadow-lg group">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    צפה בתמונה
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="max-w-md mx-auto bg-gray-100 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-light text-center text-gray-900 mb-8">צרו קשר</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-700">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-700">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-light text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors duration-300"
                >
                  שלח פרטים
                  <Send className="mr-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;