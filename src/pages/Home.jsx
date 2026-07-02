import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import boilerWorksImg from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.11 PM.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={boilerWorksImg} 
            alt="Annai Insulation Boiler Works" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Professional Industrial <span className="text-primary">Insulation</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
            Boiler, Steam Pipeline, Thermal Insulation and Aluminium Cladding Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Request Quotation <ArrowRight size={20} />
            </Link>
            <Link to="/projects" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-dark flex items-center justify-center gap-2">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 glass-card border-none bg-background/50 hover:bg-background transition-colors duration-300">
              <ShieldCheck size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Quality Assured</h3>
              <p className="text-gray-600">We use premium materials and strictly adhere to safety standards.</p>
            </div>
            <div className="text-center p-8 glass-card border-none bg-background/50 hover:bg-background transition-colors duration-300">
              <Clock size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Timely Delivery</h3>
              <p className="text-gray-600">Committed to completing projects within the agreed timeline.</p>
            </div>
            <div className="text-center p-8 glass-card border-none bg-background/50 hover:bg-background transition-colors duration-300">
              <Award size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">Highly skilled professionals with 25+ years of industrial experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-bold text-dark mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            <Link to="/services" className="text-primary font-bold hover:text-secondary flex items-center gap-2 hidden sm:flex">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/services" className="btn-primary inline-flex">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-outline inline-flex">
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Optimize Your Industrial Operations?</h2>
          <p className="text-xl text-gray-100 mb-10 font-light">
            Contact us today for a free consultation and quotation on your insulation needs.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-background transition-colors duration-300 shadow-xl inline-block">
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
