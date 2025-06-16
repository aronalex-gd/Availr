import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Working = ({ title, description }: Props) => {
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
      <ul className="list-disc list-inside space-y-4 bg-white/10 p-4 rounded-lg">
        <li>✅ <b>Upload CSV</b> – Add your participant list in seconds</li>
        <li>✅ <b>Trigger Emails</b> – Instantly send smart invites</li>
        <li>✅ <b>Users Choose Slot</b> – Attendees confirm with a single click</li>
        <li>✅ <b>View Confirmations</b> – Track responses in real time</li>
        <li>✅ <b>Clean Up Data</b> – Keep things neat with built-in cleanup tools</li>
      </ul>
    </motion.section>
  );
};

export default Working;