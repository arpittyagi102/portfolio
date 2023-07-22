'use client'

//import Welcome from "./components/Welcome";
import Home from "./components/Home"
import { motion,useScroll,useTransform } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className="flex min-h-screen bg-black justify-center">
        <motion.div
          style={{position:'fixed',top:0}}
        >
          <Home/>
        </motion.div>
        <div style={{height:'200vh'}}></div>
    </main>
  );
}