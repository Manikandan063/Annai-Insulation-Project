const ServiceCard = ({ service }) => {
  return (
    <div className="glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
        <button className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:text-secondary transition-colors duration-300">
          Learn More
          <span className="transform transition-transform group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
