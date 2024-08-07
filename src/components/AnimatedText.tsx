'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function AnimatedText() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 2000);
      return () => clearTimeout(timer);
    }, []);
  
    if (!isLoaded) return null;
  
    return (
      <motion.div
        className="absolute top-full left-0 right-0 text-center py-24 mt-96"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse-slow mb-8">
          We&apos;ve Got You Covered
        </h1>
        <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
          Get Started
        </Button>
      </motion.div>
    );
}