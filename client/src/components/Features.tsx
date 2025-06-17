import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Features = ({ title, description }: Props) => {
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
      <ul className="list-none list-inside space-y-4 bg-white/10 p-4 rounded-lg">
        <li>✅ <b>Email-Based Confirmation Workflow</b> – Send availability invites with ease</li>
        <li>📥 <b>CSV Import</b> – Upload attendee lists instantly</li>
        <li>🔗 <b>Personalized Links</b> – One-click confirmations, no login needed</li>
        <li>🌐 <b>Secure Hosted Pages</b> – Privacy-respecting and lightweight</li>
        <li>🧹 <b>Auto Cleanup</b> – Keep your data tidy and up-to-date</li>
        <li>👥 <b>Multi-Tenant Ready</b> – Perfect for teams, bootcamps, and more</li>
      </ul>
    </motion.section>
  );
};

export default Features;