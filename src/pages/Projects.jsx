import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import bgImage from '../assets/images/boiler-works.jpeg';

const Projects = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={bgImage} 
            alt="Projects Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">Our Featured <span className="text-primary">Projects</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
            Explore our portfolio of successful industrial insulation implementations across various sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Marquee */}
      <section className="py-16 bg-background border-y border-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-3xl font-heading font-bold text-dark">Our Trusted Clients</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          {(() => {
            const clients = [
              { name: 'GRB Ghee', logo: '/clients/grb.png' },
              { name: 'Aroma Milk', logo: '/clients/aroma.png' },
              { name: 'Udhaya Krishna Ghee', logo: '/clients/udhayakrishna.png' },
              { name: 'Core Carbon', logo: '/clients/corecarbon.png' },
              { name: 'Vee Cee Exports', logo: '/clients/veecee.png' },
              { name: 'Jayapriya Food', logo: '/clients/jayapriya.png' },
              { name: 'White Giant Cashews', logo: '/clients/whitegiant.png' },
              { name: 'Milky Mist', logo: '/clients/milkymist.png' },
              { name: 'Aavin Dairy', logo: '/clients/aavin.png' },
              { name: 'Sakthi Masala', logo: '/clients/sakthi.png' }
            ];
            
            const renderClients = (prefix) => clients.map((client, idx) => (
              <div key={`${prefix}-${idx}`} className="bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[200px] h-[100px] hover:shadow-md hover:border-primary/30 transition-all cursor-default">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="font-bold text-gray-700 text-lg hidden text-center">{client.name}</span>
              </div>
            ));

            return (
              <>
                <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-4 whitespace-nowrap min-w-full shrink-0">
                  {renderClients('m1')}
                </div>
                <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-4 whitespace-nowrap min-w-full shrink-0 pl-6 sm:pl-8" aria-hidden="true">
                  {renderClients('m2')}
                </div>
              </>
            );
          })()}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Client Reviews</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 bg-background/30">
              <div className="text-primary text-4xl mb-4">"</div>
              <p className="text-gray-700 text-lg italic mb-6">
                Annai Insulation delivered exceptional work on our boiler and pipeline. The heat retention improved significantly, and their team was highly professional throughout the installation.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold text-dark">SMMT Power Pvt Ltd</h4>
                  <p className="text-sm text-gray-500">Plant Manager</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 bg-background/30">
              <div className="text-primary text-4xl mb-4">"</div>
              <p className="text-gray-700 text-lg italic mb-6">
                Their aluminium cladding work on our textile machinery was flawless. The quality of materials used and their attention to detail exceeded our expectations.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">T</div>
                <div>
                  <h4 className="font-bold text-dark">TexCo Industries</h4>
                  <p className="text-sm text-gray-500">Operations Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
