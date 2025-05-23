"use client"

import { useState, useRef, useEffect, useCallback } from "react" // Added useCallback import
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  MapPin,
  Clock,
  Bell,
  Lock,
  BarChart2,
  Smartphone,
  User,
  Map,
  Droplet,
  PenToolIcon as Tool,
  Users,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  AlertTriangle,
  Shield,
  Gauge,
  Route,
  Calendar,
  Zap,
  Truck,
  Car,
} from "lucide-react"

export default function LocationTrackFeatures() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeFeature, setActiveFeature] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const features = [
    {
      icon: <MapPin className="w-full h-full" />,
      title: "Live GPS Tracking",
      description: "Get the exact real-time location of your vehicle with high accuracy, updated every few seconds.",
      points: ["Google Maps integration", "Street view and satellite view", "Direction, speed, and movement trail"],
      color: "from-orange-400 to-orange-600",
      darkColor: "from-orange-500 to-orange-700",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Clock className="w-full h-full" />,
      title: "Trip History & Playback",
      description: "Watch every past trip on a map with full playback controls.",
      points: ["Route replays", "Start/end time", "Distance covered", "Driving patterns"],
      color: "from-orange-300 to-orange-500",
      darkColor: "from-orange-400 to-orange-600",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Bell className="w-full h-full" />,
      title: "Instant Alerts & Notifications",
      description: "Be notified the moment something unusual happens.",
      points: [
        "Ignition ON/OFF alerts",
        "Geofence entry/exit",
        "Overspeeding",
        "Harsh braking/acceleration",
        "Towing & unauthorized movement",
      ],
      color: "from-orange-500 to-orange-700",
      darkColor: "from-orange-600 to-orange-800",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Lock className="w-full h-full" />,
      title: "Immobilization Control",
      description: "Lock/unlock your vehicle engine remotely in case of theft or unauthorized usage.",
      points: ["One-click engine shut", "SOS recovery", "Owner-only access"],
      color: "from-orange-400 to-orange-600",
      darkColor: "from-orange-500 to-orange-700",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <BarChart2 className="w-full h-full" />,
      title: "Advanced Analytics & Reports",
      description: "Make data-backed decisions with detailed reports.",
      points: [
        "Driver behavior",
        "Fuel consumption",
        "Engine idle time",
        "Fleet performance",
        "Cost per km",
        "Vehicle utilization",
      ],
      color: "from-orange-300 to-orange-500",
      darkColor: "from-orange-400 to-orange-600",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Smartphone className="w-full h-full" />,
      title: "Mobile & Web App",
      description: "Full control on the go — anytime, anywhere.",
      points: [
        "Android & iOS apps",
        "Web dashboard",
        "Easy login with multi-user access",
        "Role-based controls for teams",
      ],
      color: "from-orange-500 to-orange-700",
      darkColor: "from-orange-600 to-orange-800",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <User className="w-full h-full" />,
      title: "Driver Behavior Monitoring",
      description: "Get real-time feedback on driver habits.",
      points: ["Speeding", "Sharp turns", "Harsh braking", "Long idling", "Night driving alerts"],
      color: "from-orange-400 to-orange-600",
      darkColor: "from-orange-500 to-orange-700",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Map className="w-full h-full" />,
      title: "Geofencing",
      description: "Define zones on the map & get alerts when a vehicle enters/exits.",
      points: ["Create circular or polygonal zones", "Useful for offices, schools, warehouses, city limits, etc."],
      color: "from-orange-300 to-orange-500",
      darkColor: "from-orange-400 to-orange-600",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Droplet className="w-full h-full" />,
      title: "Fuel Monitoring",
      description: "Monitor live fuel levels & detect fuel theft.",
      points: ["Fuel fill/drain alerts", "Mileage reports", "Fuel efficiency optimization"],
      color: "from-orange-500 to-orange-700",
      darkColor: "from-orange-600 to-orange-800",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Tool className="w-full h-full" />,
      title: "Maintenance Reminders",
      description: "Never miss a service again!",
      points: [
        "Set service schedules",
        "Automatic reminders for oil change, battery, brakes, etc.",
        "Reduce breakdowns",
      ],
      color: "from-orange-400 to-orange-600",
      darkColor: "from-orange-500 to-orange-700",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Multi-Admin Access",
      description: "Manage your business with role-based access.",
      points: [
        "Admin, Supervisor, Driver roles",
        "Limit access as per department",
        "Assign vehicles to specific users",
      ],
      color: "from-orange-300 to-orange-500",
      darkColor: "from-orange-400 to-orange-600",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <LayoutGrid className="w-full h-full" />,
      title: "Multi-Vehicle Dashboard",
      description: "Whether you have 2 or 200 vehicles, manage them all from a single screen.",
      points: ["Grid/List/Map view", "Search & filter by vehicle", "Custom labels for easier tracking"],
      color: "from-orange-500 to-orange-700",
      darkColor: "from-orange-600 to-orange-800",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Changed literal type assertions to `as const` for better type inference and to resolve ESLint errors
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(249, 115, 22, 0)",
        "0 0 0 10px rgba(249, 115, 22, 0.2)",
        "0 0 0 0 rgba(249, 115, 22, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  } as const; // Added as const

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px 0px rgba(249, 115, 22, 0.3)",
        "0 0 30px 5px rgba(249, 115, 22, 0.6)",
        "0 0 20px 0px rgba(249, 115, 22, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
      },
    },
  } as const; // Added as const

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  } as const; // Added as const

  // Autoplay logic
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Wrapped startAutoplay in useCallback to fix exhaustive-deps warning
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return
    autoplayRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))
    }, 5000)
  }, [features.length]); // Added features.length as dependency

  // Wrapped stopAutoplay in useCallback
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, []);

  const toggleAutoplay = () => {
    if (autoplay) {
      stopAutoplay()
    } else {
      startAutoplay()
    }
    setAutoplay(!autoplay)
  }

  // Start autoplay when component mounts
  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [startAutoplay, stopAutoplay]); // Added startAutoplay and stopAutoplay as dependencies

  // Helper to restart autoplay
  const restartAutoplay = useCallback(() => { // Wrapped in useCallback
    stopAutoplay();
    startAutoplay();
    setAutoplay(true);
  }, [startAutoplay, stopAutoplay]);

  // Handle feature navigation
  const nextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    restartAutoplay();
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    restartAutoplay();
  };

  const selectFeature = (index: number) => {
    setActiveFeature(index);
    restartAutoplay();
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Powerful Features
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">to Track Smarter, Safer, and Faster</h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 mt-4 mx-auto bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full origin-center"
            style={{ width: "200px" }}
          />
        </motion.div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Feature Navigation - Left Side */}
          <motion.div
            className="lg:col-span-4 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl p-6 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">All Features</h3>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => selectFeature(index)}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeFeature === index ? "bg-white/20" : `bg-gradient-to-br ${feature.color} text-white`
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Details - Right Side */}
          <motion.div
            className="lg:col-span-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Feature Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-orange-100 overflow-hidden relative h-full"
                variants={featureCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-30 z-0"
                  variants={glowVariants as any}
                  animate="glow"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {/* Feature Content */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${features[activeFeature].color} p-3 text-white shadow-lg`}
                        variants={pulseVariants as any}
                        animate="pulse"
                      >
                        {features[activeFeature].icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                    </div>

                    <p className="text-gray-700 mb-6">{features[activeFeature].description}</p>

                    <div className="space-y-3 mt-auto">
                      {features[activeFeature].points.map((point, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="mt-1 flex-shrink-0">
                            <motion.div
                              className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                            >
                              ✓
                            </motion.div>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Image */}
                  <div className="flex items-center justify-center relative">
                    <motion.div
                      className="w-full h-full max-h-[300px] rounded-2xl overflow-hidden shadow-lg relative"
                      variants={floatVariants as any}
                      animate="float"
                    >
                      {/* Animated Vehicle Icons */}
                      <div className="absolute inset-0 z-10 overflow-hidden">
                        <motion.div
                          className="absolute"
                          animate={{
                            x: ["-10%", "110%"],
                            y: ["40%", "40%"],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        >
                          <div className="bg-orange-500 rounded-full p-1 shadow-lg">
                            <Car size={16} className="text-white" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="absolute"
                          animate={{
                            x: ["110%", "-10%"],
                            y: ["60%", "60%"],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        >
                          <div className="bg-orange-600 rounded-full p-1 shadow-lg">
                            <Truck size={16} className="text-white" />
                          </div>
                        </motion.div>
                      </div>

                      <img
                        src={features[activeFeature].image}
                        alt={features[activeFeature].title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay with feature-specific icons */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
                        <div className="flex gap-3">
                          {activeFeature === 0 && (
                            <>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <MapPin size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <Route size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <Gauge size={16} />
                              </motion.div>
                            </>
                          )}
                          {activeFeature === 1 && (
                            <>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <Route size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <Clock size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <Calendar size={16} />
                              </motion.div>
                            </>
                          )}
                          {activeFeature === 2 && (
                            <>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <Bell size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <AlertTriangle size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <Zap size={16} />
                              </motion.div>
                            </>
                          )}
                          {activeFeature === 3 && (
                            <>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <Lock size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <Shield size={16} />
                              </motion.div>
                              <motion.div
                                className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-orange-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <Zap size={16} />
                              </motion.div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-2">
                    <button
                      onClick={prevFeature}
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextFeature}
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-500">
                      {activeFeature + 1} / {features.length}
                    </div>
                    <button
                      onClick={toggleAutoplay}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        autoplay
                          ? "bg-orange-500 text-white hover:bg-orange-600"
                          : "bg-white text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {autoplay ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-6 gap-1.5">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${activeFeature === index ? "bg-orange-500" : "bg-orange-200"}`}
                  onClick={() => selectFeature(index)}
                  whileHover={{ scale: 1.5 }}
                  animate={
                    activeFeature === index
                      ? {
                          scale: [1, 1.3, 1],
                          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Summary Box */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Summary:</h3>
            <p className="text-lg">
              With over 25+ smart features, LocationTrack gives you total control of your vehicles and operations — all
              in one place.
            </p>

            <motion.div className="mt-6 flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#explore-features"
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore All Features
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}