"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Navbar />
      <Hero />
    </motion.main>
  );
}
