import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Ministry } from '../types';

interface MinistryCarouselProps {
  ministries: Ministry[];
}

const MinistryCard: React.FC<{ 
  ministry: Ministry; 
  isActive: boolean; 
  rotation: number; 
  radius: number; 
  isCenter: boolean; 
}> = ({ ministry, isActive, rotation, radius, isCenter }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax tilt effect
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 100 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      className="absolute inset-0 preserve-3d"
      style={{
        transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isCenter ? rotateX : 0,
          rotateY: isCenter ? rotateY : 0,
        }}
        className={`w-full h-full rounded-2xl overflow-hidden group relative transition-all duration-500 shadow-2xl ${
          isActive 
            ? 'ring-4 ring-brand-blue ring-offset-4 ring-offset-brand-navy scale-105 z-10' 
            : 'opacity-40 grayscale-[0.5] hover:opacity-100 hover:grayscale-0'
        }`}
      >
        <Link 
          to={`/ministries#${ministry.slug}`}
          className="block w-full h-full"
        >
          <img 
            src={ministry.image} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={ministry.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="font-extrabold text-xl text-white drop-shadow-md tracking-tight leading-tight mb-2">
              {ministry.name}
            </h4>
            <div className="w-8 h-1 bg-brand-gold rounded-full transform origin-left group-hover:w-full transition-all duration-500" />
          </div>

          {/* Dynamic Lighting/Glow */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(circle at ${50 + (x as number) * 100}% ${50 + (y as number) * 100}%, rgba(255,255,255,0.15) 0%, transparent 80%)`
              )
            }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export const MinistryCarousel: React.FC<MinistryCarouselProps> = ({ ministries }) => {
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(300);
  const count = ministries.length;
  const angleStep = 360 / count;

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 200 : 350);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % count);
  const prev = () => setIndex((prev) => (prev - 1 + count) % count);

  // Swipe detection
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      next();
    } else if (info.offset.x > threshold) {
      prev();
    }
  };

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-visible perspective-[1200px] select-none">
      {/* Navigation Buttons - Hidden on touch for cleaner look */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-10 z-50 pointer-events-none hidden md:flex">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-blue transition-all pointer-events-auto active:scale-90 shadow-xl"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-blue transition-all pointer-events-auto active:scale-90 shadow-xl"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Area with Drag Support */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing" 
        style={{ perspective: '1200px' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        <motion.div 
          className="relative w-64 h-96 preserve-3d pointer-events-auto"
          animate={{ rotateY: -index * angleStep, rotateX: -10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        >
          {ministries.map((m, i) => (
            <MinistryCard 
              key={m.id}
              ministry={m}
              isActive={i === index}
              isCenter={i === index}
              rotation={i * angleStep}
              radius={radius}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Progress Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {ministries.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-brand-blue' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

