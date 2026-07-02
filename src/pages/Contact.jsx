import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, FileText, Send } from 'lucide-react';
import bgImage from '../assets/images/WhatsApp Image 2026-07-01 at 5.08.12 PM.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    projectLocation: '',
    serviceRequired: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        projectLocation: '',
        serviceRequired: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Contact Us - Annai Insulation</title>
        <meta name="description" content="Get in touch with Annai Insulation for a free consultation and quotation on your insulation needs." />
      </Helmet>
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={bgImage} 
            alt="Contact Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">Contact <span className="text-primary">Us</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
            Get in touch with us for a free consultation and quotation on your insulation needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info Cards */}
            <div className="w-full lg:w-1/3 space-y-4 max-w-sm mx-auto lg:mx-0">
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <MapPin size={24} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">Our Address</h3>
                  <a href="https://maps.app.goo.gl/mCKdt72wZUmEfBuX8" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-primary transition-colors block">2/491, 1st Street, Sri Sowdeshwari Nagar, Veerapandi, Tirupur – 641605</a>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <Phone size={24} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">Phone Number</h3>
                  <a href="tel:9524632500" className="text-gray-600 text-sm block hover:text-primary">9524632500</a>
                  <a href="tel:9524635500" className="text-gray-600 text-sm block hover:text-primary">9524635500</a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <Mail size={24} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">Email Address</h3>
                  <a href="mailto:annaipramesh@gmail.com" className="text-gray-600 text-sm hover:text-primary">annaipramesh@gmail.com</a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <FileText size={24} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">GST Details</h3>
                  <p className="text-gray-600 text-sm font-medium tracking-wide">33AZCPR6031P1Z2</p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-heading font-bold text-dark mb-6">Send an Enquiry</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full text-green-600 text-sm">✓</span>
                    <p className="font-medium text-sm">Thank you! Your enquiry has been submitted successfully.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm"
                        placeholder="Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Location</label>
                      <input 
                        type="text" 
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-sm"
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                      <select 
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-white text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="Boiler Insulation">Boiler Insulation</option>
                        <option value="Steam Pipeline">Steam Pipeline Insulation</option>
                        <option value="Thermal Insulation">Thermal Insulation</option>
                        <option value="Aluminium Cladding">Aluminium Cladding</option>
                        <option value="Other">Other Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none text-sm"
                      placeholder="Please describe your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-base">
                    Submit Enquiry <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
