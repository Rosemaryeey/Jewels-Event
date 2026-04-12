import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

      <div className="container-luxury mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">FAQ</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-gold-gradient">Questions</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to reach out to us directly.
            </p>
            <a
              href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ask a Question
            </a>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="glass-card border border-white/10 rounded-xl overflow-hidden data-[state=open]:border-gold/30"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                    <span className="text-white font-medium pr-4 group-hover:text-gold transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
