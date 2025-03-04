import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md"
      style={{ opacity: scrollYProgress }}
    >
      <h1 className="text-lg font-bold">My App</h1>
    </motion.nav>
  );
};

export default Navbar;
