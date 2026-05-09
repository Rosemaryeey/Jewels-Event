import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Calendar,
  Users,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Package as PackageIcon,
} from "lucide-react";
import type { Package } from "@/data/packages";

interface PackageFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  expectedGuests: string;
  extraNotes: string;
}

const eventTypes = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Traditional",
  "Anniversary",
  "Bridal Shower",
  "Baby Shower",
  "Other",
];

export default function PackageFormModal({
  isOpen,
  onClose,
  selectedPackage,
}: PackageFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    expectedGuests: "",
    extraNotes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPackage) return;

    const message = `Hello Jewels Event 👋

I'm interested in the ${selectedPackage.name}.

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Event Type: ${formData.eventType}
Date: ${formData.eventDate ? new Date(formData.eventDate).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) : "Not specified"}
Location: ${formData.eventLocation}
Guests: ${formData.expectedGuests}${formData.extraNotes ? `\nNotes: ${formData.extraNotes}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348037419758?text=${encodedMessage}`, "_blank");

    onClose();
    setFormData({
      fullName: "",
      phoneNumber: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      expectedGuests: "",
      extraNotes: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card border border-gold/20 overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-gold/20 to-gold-dark/20 p-6 border-b border-gold/20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <PackageIcon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-white">
                      Book Your Package
                    </h2>
                    <p className="text-gold text-sm">{selectedPackage?.name}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <User className="w-4 h-4 text-gold" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="08123456789"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <PackageIcon className="w-4 h-4 text-gold" />
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-luxury-dark">
                        Select event type
                      </option>
                      {eventTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-luxury-dark"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>

                  {/* Event Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      Event Location *
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="Lagos, Nigeria"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>

                  {/* Expected Guests */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold" />
                      Expected Guests *
                    </label>
                    <input
                      type="number"
                      name="expectedGuests"
                      value={formData.expectedGuests}
                      onChange={handleInputChange}
                      required
                      placeholder="100"
                      min="1"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>
                </div>

                {/* Extra Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gold" />
                    Extra Notes (Theme, Colors, Preferences)
                  </label>
                  <textarea
                    name="extraNotes"
                    value={formData.extraNotes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="I want a white and gold theme with rose accents..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-luxury-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gold-light hover:shadow-gold transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-center text-white/40 text-xs">
                  Clicking send will open WhatsApp with your pre-filled message
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
