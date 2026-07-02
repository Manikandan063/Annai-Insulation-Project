import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/Company_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out flex justify-center ${
      scrolled 
        ? 'top-4 px-4' 
        : 'top-0 px-0 bg-gradient-to-b from-dark/60 to-transparent'
    }`}>
      <div 
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'max-w-6xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-3 px-6' 
            : 'max-w-7xl py-6 px-6 lg:px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10 mr-2 flex-shrink-0">
            <img 
              src={logo} 
              alt="Annai Insulation Logo" 
              className={`transition-all duration-300 object-contain drop-shadow-md group-hover:scale-105 ${scrolled ? 'h-8 md:h-9' : 'h-9 md:h-10 lg:h-12'}`}
            />
            <div className="flex flex-col justify-center">
              <span className={`text-base md:text-lg xl:text-xl font-logo font-black tracking-tight transition-colors duration-300 whitespace-nowrap leading-none ${scrolled ? 'text-dark' : 'text-white'} drop-shadow-sm notranslate`}>
                {logoText.annai} <span className={`hidden sm:inline ${scrolled ? 'text-primary' : 'text-primary/90'}`}>{logoText.insulation}</span>
              </span>
              <span className={`sm:hidden text-[10px] md:text-xs font-logo font-bold tracking-[0.2em] transition-colors duration-300 leading-tight ${scrolled ? 'text-primary' : 'text-primary/90'} notranslate`}>
                {logoText.insulation}
              </span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 overflow-hidden">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2 xl:px-4 py-1.5 xl:py-2 rounded-full font-medium text-xs xl:text-sm transition-all duration-300 overflow-hidden group whitespace-nowrap
                    ${isActive 
                      ? (scrolled ? 'text-white bg-primary shadow-md' : 'text-primary bg-white shadow-md') 
                      : (scrolled ? 'text-gray-600 hover:text-primary hover:bg-primary/5' : 'text-gray-200 hover:text-white hover:bg-white/10')
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Call Button & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 ml-2">
            <LanguageSwitcher scrolled={scrolled} />

            <a 
              href="tel:9524632500" 
              className={`hidden md:flex items-center gap-1.5 xl:gap-2 px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg
                ${scrolled ? 'bg-dark text-white hover:bg-primary' : 'bg-primary text-white hover:bg-secondary'}`}
            >
              <Phone size={16} className={scrolled ? 'text-gray-300' : 'text-white'} />
              <span>Get Quote</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 focus:outline-none relative z-50
                ${scrolled ? 'text-dark hover:bg-gray-100' : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-[55] transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel - Side Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[60] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
             <img src={logo} alt="Logo" className="h-8 object-contain" />
             <div className="flex flex-col">
               <span className="text-lg font-logo font-black tracking-tight text-dark leading-tight notranslate">{logoText.annai}</span>
               <span className="text-[10px] font-logo font-bold tracking-widest text-primary leading-tight notranslate">{logoText.insulation}</span>
             </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-white text-gray-500 hover:text-dark hover:bg-gray-100 transition-colors shadow-sm border border-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl font-medium transition-all duration-300 
                  ${isActive ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-dark'}`}
              >
                <span className="text-lg">{link.name}</span>
                <ChevronRight size={18} className={isActive ? 'text-primary' : 'text-gray-400 opacity-50'} />
              </Link>
            );
          })}
        </div>

        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-auto">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Need an estimate?</p>
            <a 
              href="tel:9524632500" 
              className="flex items-center justify-center gap-2 w-full p-3.5 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-colors shadow-md shadow-primary/20"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
