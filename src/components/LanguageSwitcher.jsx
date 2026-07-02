import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'kn', name: 'Kannada' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ml', name: 'Malayalam' }
];

const LanguageSwitcher = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Add Google Translate script if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ta,te,kn,ml',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    }

    // Determine current language from cookie
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match) {
      const lang = match[2].split('/')[2];
      if (lang) setCurrentLang(lang);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (langCode === 'en') {
      // Clear cookie to revert to original
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.` + window.location.hostname;
    }
    window.location.reload();
  };

  const activeLang = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      {/* Hidden google translate element */}
      <div id="google_translate_element" className="hidden"></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 shadow-sm
          ${scrolled 
            ? 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-dark' 
            : 'bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-md'
          }`}
      >
        <Globe size={16} />
        <span className="hidden sm:inline notranslate">{activeLang.name}</span>
        <span className="sm:hidden notranslate">{activeLang.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`notranslate w-full text-left px-4 py-2.5 text-sm transition-colors ${currentLang === lang.code ? 'text-primary font-bold bg-primary/10' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
