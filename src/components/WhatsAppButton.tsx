import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Hello Jewels Event, I would like to inquire about your services.",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348037419758?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

      {/* Icon */}
      <MessageCircle className="w-7 h-7 text-white fill-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-luxury-black text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.button>
  );
}
