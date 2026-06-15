import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimony } from '../types';

interface AnimatedTestimonialsProps {
  testimonials: Testimony[];
  autoplay?: boolean;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({ 
  testimonials, 
  autoplay = false 
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = (index: number) => {
    // Deterministic random rotation based on index to keep it consistent
    return ((index * 7) % 20) - 10;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20 font-sans">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side: Image Stack */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimony, index) => (
              <motion.div
                key={testimony.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(index),
                  zIndex: isActive(index) 
                    ? 50 
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(index),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimony.photo}
                  alt={testimony.name}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Side: Content */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="mb-4">
              <Quote className="text-brand-blue/20 mb-4" size={48} />
              <h3 className="text-2xl font-black text-brand-navy">
                {testimonials[active].name}
              </h3>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
                {testimonials[active].date}
              </p>
            </div>
            
            <motion.p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed italic">
              {testimonials[active].story.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0 mt-8">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-brand-bg border border-gray-100 flex items-center justify-center group/button transition-all hover:bg-brand-navy hover:text-white shadow-lg shadow-brand-navy/5"
            >
              <ChevronLeft className="h-6 w-6 group-hover/button:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-brand-bg border border-gray-100 flex items-center justify-center group/button transition-all hover:bg-brand-navy hover:text-white shadow-lg shadow-brand-navy/5"
            >
              <ChevronRight className="h-6 w-6 group-hover/button:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
