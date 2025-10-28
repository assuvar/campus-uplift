import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9035000569"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-glass flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
