const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919524632500?text=Hi%20Annai%20Insulation,%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.135 1.556 5.92L0 24l6.195-1.62c1.725.932 3.659 1.42 5.836 1.42 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm5.836 17.38c-.266.745-1.52 1.435-2.095 1.49-.53.055-1.215.11-3.645-.885-2.92-1.2-4.785-4.18-4.93-4.37-.145-.19-1.175-1.56-1.175-2.975 0-1.415.735-2.12 1.005-2.41.27-.29.585-.36.78-.36.195 0 .39.005.565.015.195.01.455-.075.71.54.265.635.91 2.23.99 2.395.08.165.13.36.035.55-.095.19-.145.31-.29.475-.145.165-.305.345-.435.49-.145.165-.305.345-.13.635.175.29.775 1.275 1.66 2.065.925.825 1.88 1.115 2.17 1.26.29.145.465.125.64-.065.175-.19.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.705.805 1.995.95.29.145.485.22.555.345.07.125.07.72-.195 1.465z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
