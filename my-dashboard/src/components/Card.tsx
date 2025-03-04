import { motion } from "framer-motion";

const Card = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="p-5 border rounded-lg shadow-md bg-white"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
};

export default Card;