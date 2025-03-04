import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPage from "./pages/AboutPage";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.3 } },
};

function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-4 p-4 bg-blue-500 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <Routes>
        <Route
          path="/"
        />
        <Route
          path="/about"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AboutPage />
            </motion.div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
