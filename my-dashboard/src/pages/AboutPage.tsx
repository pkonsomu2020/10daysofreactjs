import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
      className="p-6 text-center"
    >
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our platform! We are dedicated to providing the best user experience.
      </p>
    </motion.div>
  );
};

export default AboutPage;