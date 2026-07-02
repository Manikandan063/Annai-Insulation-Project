import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-9xl font-black text-primary mb-4 drop-shadow-sm">404</h1>
        <h2 className="text-3xl font-bold text-dark mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-primary/30"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
