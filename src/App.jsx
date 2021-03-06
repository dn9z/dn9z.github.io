import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import EnvAnims from "./components/anim/EnvAnims/EnvAnims";
import { MyProvider } from "./components/Context/Context";
import Background from "./components/Background/Background";
import PageNotFound from "./routes/PageNotFound/PageNotFound";

function App() {
  const location = useLocation();

  return (
    <MyProvider>
      <motion.main
        animate={
          location.pathname === "/about"
          ? { 
            overflowY: 'hidden',
            maxHeight: '100vh'}
          : { 
            overflowY: 'auto',
            maxHeight: 'none'}
        }
      >
        <Background />
        <Navbar />
        <section>
          <AnimatePresence exitBeforeEnter>
            <EnvAnims key={location.pathname} />
          </AnimatePresence>

          <motion.div
            className="content-container"
            animate={
              location.pathname !== "/"
                ? { y: "-10rem", transition: { delay: 2 } }
                : ""
            }
            exit={{ transition: { duration: 1 } }}
          >
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        </section>
      </motion.main>
    </MyProvider>
  );
}

export default App;
