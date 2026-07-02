import { useState } from 'react';
import g1 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.13 PM.jpeg';
import g2 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.14 PM (1).jpeg';
import g3 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.14 PM.jpeg';
import g4 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.15 PM.jpeg';
import g5 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.16 PM (1).jpeg';
import g6 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.16 PM.jpeg';
import g7 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.17 PM.jpeg';
import g8 from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.18 PM.jpeg';
import bgImage from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.19 PM.jpeg';

const Gallery = () => {
  const categories = ['All', 'Boiler', 'Pipelines', 'Factories', 'Installation', 'Completed Projects'];
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryImages = [
    { id: 1, category: 'Boiler', src: g1 },
    { id: 2, category: 'Pipelines', src: g2 },
    { id: 3, category: 'Factories', src: g3 },
    { id: 4, category: 'Installation', src: g4 },
    { id: 5, category: 'Completed Projects', src: g5 },
    { id: 6, category: 'Boiler', src: g6 },
    { id: 7, category: 'Pipelines', src: g7 },
    { id: 8, category: 'Installation', src: g8 },
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={bgImage} 
            alt="Gallery Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">Our <span className="text-primary">Gallery</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
            A visual showcase of our industrial insulation expertise and quality workmanship.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-background text-dark hover:bg-secondary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.category} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-wider uppercase bg-primary/80 px-4 py-2 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
