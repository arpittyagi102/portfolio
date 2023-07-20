'use client'

import Welcome from "./components/Welcome";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="flex min-h-screen bg-black items-center justify-center">
      
        <Welcome/>

      

    </main>
  );
}