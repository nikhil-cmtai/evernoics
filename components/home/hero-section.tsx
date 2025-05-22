'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCarCrash, FaBell, FaExclamationTriangle, FaClock, FaGasPump, FaSchool, FaUserCheck, FaMapMarkerAlt, FaVideo, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: [
      { label: "Driving Behavior Monitoring", icon: <FaCarCrash size={18} />, style: "top-4 left-32" },
      { label: "Overspeed Alarm", icon: <FaBell size={18} />, style: "top-24 left-4" },
      { label: "Panic Button", icon: <FaExclamationTriangle size={18} />, style: "top-44 left-20" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    tags: [
      { label: "Real Time Tracking", icon: <FaClock size={18} />, style: "bottom-24 left-8" },
      { label: "Fuel Monitoring", icon: <FaGasPump size={18} />, style: "bottom-6 left-44" },
      { label: "School Management Software", icon: <FaSchool size={18} />, style: "top-8 right-8" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tags: [
      { label: "Student Attendance System", icon: <FaUserCheck size={18} />, style: "top-32 right-0" },
      { label: "Geofencing for School Zones", icon: <FaMapMarkerAlt size={18} />, style: "bottom-16 right-0" },
      { label: "Video Surveillance", icon: <FaVideo size={18} />, style: "bottom-2 right-32" },
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 overflow-hidden" style={{background: "linear-gradient(120deg, #f8fafc 0%, #fef6e4 100%)"}}>
      {/* Decorative Gradient Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl z-0" />
      {/* Left Side */}
      <div className="flex-1 max-w-xl flex flex-col justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Secure Track Control
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800"
        >
          Anytime, Anywhere With LocationTrack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 text-lg md:text-xl font-medium text-gray-700 drop-shadow-sm"
        >
          Stay in control of your vehicles — whether it's a single car or an entire fleet. Location Track offers real-time GPS tracking, anti-theft alerts, immobilization, and smart insights to keep your vehicles and your business safe.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          className="px-12 py-4 border-2 border-yellow-400 text-yellow-600 font-bold text-xl bg-white/80 backdrop-blur-md hover:bg-yellow-50 transition-colors shadow-lg rounded-lg"
        >
          Book Demo
        </motion.button>
      </div>
      {/* Right Side: Slider */}
      <div className="flex-1 relative flex items-center justify-center mt-12 md:mt-0 min-w-[340px] min-h-[320px] z-10">
        {/* Slider Arrows */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-100 border border-yellow-300 rounded-full p-2 shadow-lg z-20 transition-colors"><FaArrowLeft size={22} className="text-yellow-600" /></button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-100 border border-yellow-300 rounded-full p-2 shadow-lg z-20 transition-colors"><FaArrowRight size={22} className="text-yellow-600" /></button>
        {/* Image & Feature Tags */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt="Vehicle"
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -40 }}
            transition={{ duration: 0.6 }}
            className="object-contain w-[420px] h-[220px] rounded-2xl shadow-2xl border-4 border-white"
            style={{ zIndex: 1 }}
          />
        </AnimatePresence>
        {/* Feature Tags for current slide */}
        {slides[current].tags.map((feature, idx) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.09, duration: 0.5 }}
            className={`absolute ${feature.style} bg-white/60 backdrop-blur-md rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-base font-semibold border border-white/70 hover:scale-105 transition-transform cursor-pointer`}
            style={{ zIndex: 2 }}
          >
            <span className="text-yellow-600">{feature.icon}</span>
            <span className="text-gray-900 whitespace-nowrap drop-shadow-sm">{feature.label}</span>
          </motion.div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-yellow-500 border-yellow-600' : 'bg-white border-yellow-300'} transition-all`}
              aria-label={`Go to slide ${idx+1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 