import { MapPin, Briefcase } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.service}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold text-dark mb-3">
          {project.title}
        </h3>
        
        <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-primary" />
            <span className="font-medium text-dark">Client:</span> {project.client}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span className="font-medium text-dark">Location:</span> {project.location}
          </div>
        </div>
        
        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
