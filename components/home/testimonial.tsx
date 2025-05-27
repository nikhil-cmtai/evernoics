'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Company",
    content: "The professionalism and sincerity I've seen here is unmatched. It's rare to witness such clarity in execution.",
    image: "/testimonials/john.jpg"
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    content: "I have seen remarkable growth in my team's performance after implementing these strategies.",
    image: "/testimonials/jane.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Startup Founder",
    content: "This platform has transformed how we approach our business challenges.",
    image: "/testimonials/mike.jpg"
  },
  {
    name: "Priya Verma",
    role: "Product Manager",
    content: "The user experience and support are top-notch. Highly recommended for any business!",
    image: "/testimonials/priya.jpg"
  },
  {
    name: "Ahmed Khan",
    role: "Operations Head",
    content: "Efficient, reliable, and innovative. Our workflow has never been smoother.",
    image: "/testimonials/ahmed.jpg"
  }
];

const marqueeVariants = {
  animate: {
    x: [0, -1000], // Adjust -1000 based on total width of testimonials
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
  }
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // Remove the following unused variable:
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16 relative">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
          >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
          Trusted by Industry Leaders
          </span>
        </motion.h2>
        </div>


        <div className="overflow-hidden group">
          <motion.div
            ref={ref}
            className="flex flex-row gap-8 group-hover:[animation-play-state:paused]"
            variants={marqueeVariants}
            animate="animate"
            style={{ width: "max-content" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] max-w-xs my-4 cursor-pointer"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    {/* Add image here if available */}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;