'use client'

//import Welcome from "./components/Welcome";
//import Home from "./components/Home"
import About from "./components/About"
import { motion,useScroll,useTransform } from "framer-motion";

export default function App() {

  return (
    <main className="flex min-h-screen bg-black justify-center">
        <About/>        

    </main>
  );
}