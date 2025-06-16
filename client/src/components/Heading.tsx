import { motion } from "framer-motion";

const Heading = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-12"
    >
      <h1 className="text-4xl font-bold">Availr</h1>
      <p className="mt-4 text-lg">
        Perfect CLI tool & minimal web server for availability scheduling
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-white text-blue-900 font-semibold rounded-full"
      >
        Get Started
      </motion.button>
    </motion.header>
  );
};

export default Heading;