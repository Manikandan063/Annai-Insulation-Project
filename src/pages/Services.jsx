import ServiceCard from '../components/ServiceCard';
import IndiaServiceMap from '../components/IndiaServiceMap';
import { servicesData } from '../data/servicesData';
import bgImage from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.17 PM.jpeg';

const Services = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={bgImage} 
            alt="Services Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">Our Premium <span className="text-primary">Services</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
            Comprehensive industrial insulation solutions designed for maximum efficiency, safety, and durability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndiaServiceMap />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Our Work Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Detailed assessment of your industrial insulation needs.' },
              { step: '02', title: 'Planning', desc: 'Customized solution design and material selection.' },
              { step: '03', title: 'Execution', desc: 'Professional installation by our expert team.' },
              { step: '04', title: 'Inspection', desc: 'Rigorous quality checks and final handover.' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg z-10 relative">
                  {item.step}
                </div>
                {index !== 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                )}
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
