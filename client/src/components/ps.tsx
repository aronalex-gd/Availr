import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const ProblemStatement = ({ title, description }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 bg-white/10 p-4 rounded-lg">
        {description}
      </p>
    </motion.section>
  );
};

export default ProblemStatement;