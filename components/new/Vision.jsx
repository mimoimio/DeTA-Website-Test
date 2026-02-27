"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Vision = ({ image, title, description, point1, point2, point3 }) => {
  const points = [point1, point2, point3];

  return (
    <motion.section 
      className="py-16 px-4 bg-gradient-to-b from-orange-50/30 to-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <Image
                src={image}
                alt="Vision"
                width={800}
                height={500}
                className="relative rounded-2xl shadow-xl w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <div className="glass-card p-8 lg:p-10">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-gray-800">{title}</h2>
              <p className="text-gray-600 text-lg mb-6">{description}</p>
              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Vision;
