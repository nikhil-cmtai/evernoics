'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar, FaTruck, FaBus, FaBiking, FaTractor, FaMotorcycle, FaMapMarkerAlt, FaShieldAlt, FaBolt, FaWifi, FaLock, FaRoad, FaUserCheck, FaGasPump, FaCogs, FaStar, FaChartLine, FaExclamationTriangle, FaBell, FaClock, FaSnowflake } from "react-icons/fa";

const slides = [
  {
    image: "/LocationTrack/car.webp",
    tags: [
      { label: "Luxury Car Tracking", icon: <FaCar size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Geo-Fence Alerts", icon: <FaMapMarkerAlt size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Anti-Theft Mode", icon: <FaLock size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Speed Monitoring", icon: <FaChartLine size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Remote Immobilizer", icon: <FaBolt size={18} />, style: "bottom-24 left-8", onImage: false },
      { label: "24/7 Live Tracking", icon: <FaWifi size={18} />, style: "bottom-24 right-8", onImage: false },
      { label: "Driver Score", icon: <FaStar size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "Trip History", icon: <FaRoad size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "SOS Button", icon: <FaShieldAlt size={18} />, style: "top-1/2 left-2", onImage: true },
      { label: "Family Safety", icon: <FaUserCheck size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Smart Notifications", icon: <FaBell size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Cloud Backup", icon: <FaCloud size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
  {
    image: "/LocationTrack/truck.jpg",
    tags: [
      { label: "Fleet Health Monitor", icon: <FaTruck size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Fuel Efficiency", icon: <FaGasPump size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Route Optimization", icon: <FaRoad size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Cargo Security", icon: <FaLock size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Live Location", icon: <FaWifi size={18} />, style: "bottom-24 left-8", onImage: false },
      { label: "Driver Analytics", icon: <FaUserCheck size={18} />, style: "bottom-24 right-8", onImage: false },
      { label: "Overload Alerts", icon: <FaExclamationTriangle size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "Maintenance Reminders", icon: <FaCogs size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "Panic Button", icon: <FaShieldAlt size={18} />, style: "top-1/2 left-2", onImage: true },
      { label: "Night Mode", icon: <FaStar size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Cold Chain Monitoring", icon: <FaSnowflake size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Instant Reports", icon: <FaChartLine size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
  {
    image: "/LocationTrack/bus.jpg",
    tags: [
      { label: "School Bus Safety", icon: <FaBus size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Student Attendance", icon: <FaUserCheck size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Live CCTV Feed", icon: <FaWifi size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Speed Alerts", icon: <FaChartLine size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Geo-Fencing", icon: <FaMapMarkerAlt size={18} />, style: "bottom-24 left-8", onImage: false },
      // { label: "Parent App", icon: <FaStar size={18} />, style: "bottom-24 right-8", onImage: false },
      { label: "Emergency Alerts", icon: <FaExclamationTriangle size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "Driver Behavior", icon: <FaCogs size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "Pickup/Drop Alerts", icon: <FaBell size={18} />, style: "top-1/2 left-2", onImage: true },
      { label: "Attendance Reports", icon: <FaChartLine size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Smart Notifications", icon: <FaBell size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Cloud Backup", icon: <FaCloud size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
  {
    image: "/LocationTrack/bike.jpg",
    tags: [
      { label: "Bike Anti-Theft", icon: <FaBiking size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Instant Immobilizer", icon: <FaBolt size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Rider Safety Mode", icon: <FaShieldAlt size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Live Tracking", icon: <FaWifi size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Speed Alerts", icon: <FaChartLine size={18} />, style: "bottom-24 left-8", onImage: false },
      { label: "Geo-Fence", icon: <FaMapMarkerAlt size={18} />, style: "bottom-24 right-8", onImage: false },
      // { label: "Trip History", icon: <FaRoad size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "SOS Button", icon: <FaExclamationTriangle size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "Night Parking Alert", icon: <FaStar size={18} />, style: "top-1/2 left-2", onImage: true },
      // { label: "Battery Health", icon: <FaCogs size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Smart Notifications", icon: <FaBell size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Cloud Backup", icon: <FaCloud size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
  {
    image: "/LocationTrack/tractor.jpg",
    tags: [
      { label: "Smart Farm Tracking", icon: <FaTractor size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Engine Analytics", icon: <FaCogs size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Geo-Zone Alerts", icon: <FaMapMarkerAlt size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Fuel Monitoring", icon: <FaGasPump size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Live Location", icon: <FaWifi size={18} />, style: "bottom-24 left-8", onImage: false },
      // { label: "Maintenance Alerts", icon: <FaBell size={18} />, style: "bottom-24 right-8", onImage: false },
      { label: "Engine Hours", icon: <FaClock size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "Operator Safety", icon: <FaShieldAlt size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "Work Reports", icon: <FaChartLine size={18} />, style: "top-1/2 left-2", onImage: true },
      { label: "Weather Alerts", icon: <FaExclamationTriangle size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Smart Notifications", icon: <FaBell size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Cloud Backup", icon: <FaCloud size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
  {
    image: "/LocationTrack/activa.jpg",
    tags: [
      { label: "Scooter Live Tracking", icon: <FaMotorcycle size={18} />, style: "top-4 left-32", onImage: false },
      { label: "Speed Alerts", icon: <FaChartLine size={18} />, style: "top-4 right-8", onImage: false },
      { label: "Family Safety Mode", icon: <FaStar size={18} />, style: "top-24 left-4", onImage: false },
      { label: "Geo-Fence", icon: <FaMapMarkerAlt size={18} />, style: "top-24 right-4", onImage: false },
      { label: "Anti-Theft", icon: <FaLock size={18} />, style: "bottom-24 left-8", onImage: false },
      // { label: "Trip History", icon: <FaRoad size={18} />, style: "bottom-24 right-8", onImage: false },
      { label: "Instant Immobilizer", icon: <FaBolt size={18} />, style: "bottom-8 left-32", onImage: false },
      { label: "Night Parking Alert", icon: <FaStar size={18} />, style: "bottom-8 right-32", onImage: false },
      // { label: "Battery Health", icon: <FaCogs size={18} />, style: "top-1/2 left-2", onImage: true },
      // { label: "SOS Button", icon: <FaExclamationTriangle size={18} />, style: "top-1/2 right-2", onImage: true },
      { label: "Smart Notifications", icon: <FaBell size={18} />, style: "top-2 left-1/2 -translate-x-1/2", onImage: true },
      // { label: "Cloud Backup", icon: <FaCloud size={18} />, style: "bottom-2 left-1/2 -translate-x-1/2", onImage: true },
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Auto-advance slides every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
          className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] mb-4 drop-shadow-sm"
        >
          Empowering Your Business with <span className="text-[var(--color-accent)]">Smart IT Solutions</span>
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
          Stay in control of your vehicles — whether it&apos;s a single car or an entire fleet. Location Track offers real-time GPS tracking, anti-theft alerts, immobilization, and smart insights to keep your vehicles and your business safe.
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
        <AnimatePresence mode="wait" initial={false}>
          {slides[current].tags.map((feature, idx) => (
            <motion.div
              key={feature.label + current}
              initial={{ opacity: 0, y: feature.onImage ? 20 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: feature.onImage ? 20 : 10 }}
              transition={{ delay: 0.2 + idx * 0.07, duration: 0.5 }}
              className={`absolute ${feature.style} ${feature.onImage ? 'z-30' : 'z-20'} bg-white/70 ${feature.onImage ? 'backdrop-blur-lg' : 'backdrop-blur-md'} rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-base font-semibold border border-white/70 hover:scale-110 hover:shadow-yellow-300 hover:z-40 transition-transform cursor-pointer`}
              style={feature.onImage ? { zIndex: 30 } : { zIndex: 20 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <span className="text-yellow-600">{feature.icon}</span>
              <span className="text-gray-900 whitespace-nowrap drop-shadow-sm">{feature.label}</span>
            </motion.div>
          ))}
        </AnimatePresence>
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