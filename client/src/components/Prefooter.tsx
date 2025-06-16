import { motion } from "framer-motion";

const Prefooter = () => {
  return (
    <motion.section
      className="text-white text-center px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-2">Ready to Save Hours of Work?</h2>
      <p className="text-lg">Ditch endless email threads and clunky forms — let Availr handle the heavy lifting.</p>
    </motion.section>
  );
};

export default Prefooter;
