import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Usage = ({ title, description }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-2 bg-white/10 p-4 rounded-lg">
        <li>💻 Tech Bootcamps</li>
        <li>📚 Workshops & Trainings</li>
        <li>🎤 Interviews</li>
        <li>👨‍💻 Hackathons & Developer Events</li>
      </ul>
    </motion.section>
  );
};

export default Usage;
