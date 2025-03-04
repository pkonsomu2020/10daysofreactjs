import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
      whileTap={{ scale: 0.9 }} // Shrinks when clicked
      className="bg-blue-500 text-white p-3 rounded-lg shadow-md"
    >
      Click Me
    </motion.button>
  );
};

export default AnimatedButton;