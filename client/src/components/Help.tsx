import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Help = ({ title, description }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-2 bg-white/10 p-4 rounded-lg">
        <li>✅ No account or login needed for participants</li>
        <li>✅ CLI-first workflow — made for developers and organizers</li>
        <li>✅ Scales effortlessly — from 10 to 10,000 users</li>
        <li>✅ Built with privacy in mind — no unnecessary data collection</li>
      </ul>
    </motion.section>
  );
};

export default Help;