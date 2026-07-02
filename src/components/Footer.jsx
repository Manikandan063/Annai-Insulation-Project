import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import logo from '../assets/Company_logo.png';

const Footer = () => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match) {
      const lang = match[2].split('/')[2];
      if (lang) setCurrentLang(lang);
    }
  }, []);

  const logoTranslations = {
    en: { annai: 'ANNAI', insulation: 'INSULATION' },
    ta: { annai: 'அன்னை', insulation: 'இன்சுலேஷன்' },
    te: { annai: 'అన్నై', insulation: 'ఇన్సులేషన్' },
    kn: { annai: 'ಅನ್ನೈ', insulation: 'ಇನ್ಸುಲೇಶನ್' },
    hi: { annai: 'अन्नई', insulation: 'इंसुलेशन' }
  };
  const logoText = logoTranslations[currentLang] || logoTranslations.en;

  return (
    <footer className="bg-dark text-background relative overflow-hidden border-t border-primary/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-6">
          
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                <img src={logo} alt="Annai Insulation Logo" className="h-12 w-auto object-contain drop-shadow-lg" />
              </div>
              <h3 className="text-3xl font-logo font-black tracking-tight text-white notranslate">
                {logoText.annai} <span className="text-primary">{logoText.insulation}</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-sm">
              Delivering professional industrial insulation solutions with unparalleled quality. Specializing in boiler, steam pipeline, thermal insulation, and advanced aluminium cladding services.
            </p>
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-medium">
              GSTIN: 33AZCPR6031P1Z2
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Quick Links
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={14} className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Our Services
            </h4>
            <ul className="space-y-1.5 text-sm">
              {['Boiler Insulation', 'Steam Pipeline Insulation', 'Thermal Insulation', 'Aluminium Cladding', 'Ceramic Blanket Works'].map((service) => (
                <li key={service} className="group flex items-center text-gray-400 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Contact Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-400 pt-1 leading-snug">2/491, 1st Street, Sri Sowdeshwari Nagar, Veerapandi, Tirupur – 641605</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col text-gray-400">
                  <a href="tel:9524632500" className="hover:text-white transition-colors">9524632500</a>
                  <a href="tel:9524635500" className="hover:text-white transition-colors">9524635500</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <a href="mailto:annaipramesh@gmail.com" className="text-gray-400 hover:text-white transition-colors truncate">annaipramesh@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Annai Insulation. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Designed By <span className="text-white font-medium">Mk Tech Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
