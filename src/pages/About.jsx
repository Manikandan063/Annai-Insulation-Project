import { Target, Eye, Gem } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import boilerWorksImg from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.11 PM.jpeg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - Annai Insulation</title>
        <meta name="description" content="Learn about Annai Insulation's 25+ years of experience in delivering excellence in industrial insulation." />
      </Helmet>
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920" 
            alt="About Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">About <span className="text-primary">Annai Insulation</span></h1>
          <p className="text-xl max-w-3xl mx-auto font-light text-gray-300">
            Delivering excellence in industrial insulation since our inception. We pride ourselves on quality, safety, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Company & Work Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">Our Company & Work Details</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong className="text-dark">Annai Insulation</strong> is a premier provider of industrial insulation solutions, renowned for our unwavering commitment to quality and safety. We specialize in robust thermal management that optimizes plant performance.
                </p>
                <p>
                  Our comprehensive work details encompass a wide array of specialized services. We execute complex boiler insulation, precise steam pipeline wrapping, and extensive thermal cladding for large-scale industrial facilities. 
                </p>
                <p>
                  Equipped with advanced tools and premium materials like ceramic blankets and LRB mattresses, our skilled technicians ensure every project—whether it's a new installation or critical maintenance—is delivered on time, minimizing downtime and maximizing energy efficiency.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass-card p-6 border-l-4 border-l-primary bg-background/30 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-4xl font-bold text-primary mb-2">25+</h4>
                  <p className="text-dark font-medium">Years of Experience</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-l-secondary bg-background/30 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-4xl font-bold text-secondary mb-2">500+</h4>
                  <p className="text-dark font-medium">Industrial Projects</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-dark">
                <img 
                  src={boilerWorksImg} 
                  alt="Annai Insulation Boiler Works" 
                  className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold drop-shadow-md">Expert Execution</h3>
                  <p className="text-gray-200 font-medium tracking-wide drop-shadow-md mt-1">Precision in every detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Target size={48} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide top-tier industrial insulation solutions that enhance energy efficiency, ensure operational safety, and reduce environmental impact for our clients.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Eye size={48} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading and most trusted industrial insulation partner in the region, recognized for our innovation, reliability, and unparalleled quality of service.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Gem size={48} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Safety First</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Uncompromised Quality</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Customer Centricity</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Integrity & Honesty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
