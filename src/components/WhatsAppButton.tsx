import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919035000569"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded animate-ping opacity-75"></div>
        
        {/* Button - square style */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded shadow-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
