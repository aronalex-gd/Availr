import { motion } from "framer-motion";

const main = [
  {
    text: "A must-have for fast RSVP collection. Made my workshop planning so much easier.",
    author: "Anjali M., Bootcamp Organizer",
  },
  {
    text: "Clean, simple, and it just works. Saved me hours.",
    author: "Kiran R., Tech Lead",
  },
  {
    text: "Scheduling interviews used to be a nightmare. Now it's a breeze with Availr.",
    author: "Naveen J., HR Manager",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const People = () => {
  return (
    <motion.section
      className="text-white py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {main.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/5 p-6 rounded-lg shadow-sm backdrop-blur-md hover:shadow-md transition duration-300"
            variants={itemVariants}
          >
            <p className="italic">“{item.text}”</p>
            <p className="mt-2 text-right font-semibold">– {item.author}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default People;
