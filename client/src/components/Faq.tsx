import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const faqs = [
  "Is Availr free to use?",
  "Where is my data stored?",
  "Can I use my own domain?",
];

const FAQ = () => {
  return (
    <motion.section
      className="text-white px-4 py-12 space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Frequently Asked Questions:</h2>
      {faqs.map((q, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-white/10 rounded-lg px-6 py-3 cursor-pointer hover:bg-white/20 transition"
        >
          <span>{q}</span>
          <ArrowRight />
        </div>
      ))}
    </motion.section>
  );
};

export default FAQ;
