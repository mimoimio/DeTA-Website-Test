"use client";

import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Mission from "@/components/new/Mission";
import Vision from "@/components/new/Vision";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaProjectDiagram, FaUsers, FaCalendarAlt, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Counter = ({ value, suffix = "", icon: Icon, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (val) => Math.floor(val));
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.div 
      ref={ref}
      variants={fadeInUp}
      className="text-center p-6"
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Icon className="text-3xl text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-800">
        <motion.span>{display}</motion.span>{suffix}
      </div>
      <p className="text-gray-600 mt-2 font-medium">{label}</p>
    </motion.div>
  );
};

const steps = [
  { icon: FaLightbulb, title: "Ideate", description: "We brainstorm and conceptualize innovative solutions" },
  { icon: FaProjectDiagram, title: "Plan", description: "We create detailed roadmaps and technical specifications" },
  { icon: FaRocket, title: "Build", description: "We transform ideas into functional products" },
  { icon: FaHandshake, title: "Launch", description: "We deploy and support your solution in production" }
];

export default function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-section" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30 mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Developing <span className="gradient-text">Excellence</span> Together
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                We strive to encourage and empower developers to achieve their highest potential. 
                We believe in the power of collaboration, innovation, and continuous learning 
                to drive growth and success in the tech industry.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Involved
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-30" />
                <Image
                  src="/images/about/techtamu-deta.jpg"
                  alt="DeTA Community"
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50/30">
        <motion.div 
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-lg">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">
              Numbers That <span className="gradient-text">Speak</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At DeTA we are committed to revolutionizing the digital world with innovative, 
              sustainable, and cost-effective solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter value={10} suffix="+" icon={FaProjectDiagram} label="Completed Projects" />
            <Counter value={60} suffix="+" icon={FaUsers} label="Community Members" />
            <Counter value={10} suffix="+" icon={FaCalendarAlt} label="Organized Events" />
            <Counter value={5} suffix="+" icon={FaRocket} label="Years Active" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <Mission
        image="/images/about/focus-mode-deta.jpg"
        title="Our Mission"
        description="DeTA is dedicated to fostering innovation and collaboration in the tech community."
        point1="We target to be the best in the world."
        point2="We aim to foster a collaborative community."
        point3="We strive for continuous learning and improvement."
      />

      {/* Vision Section */}
      <Vision
        image="/images/about/smile-deta.jpg"
        title="Our Vision"
        description="DeTA envisions a future where technology drives positive change and empowers communities worldwide."
        point1="To be a global leader in tech innovation."
        point2="To create impactful solutions for real-world problems."
        point3="To empower developers worldwide."
      />

      {/* How We Work Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <motion.div 
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-lg">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              How <span className="text-orange-500">We</span> Work
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We think, ask, brainstorm, and execute ideas to make the impossible come true!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full group-hover:border-orange-500/50 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="text-2xl text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery */}
          <motion.div variants={fadeInUp} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['/images/about/meetup4.jpg', '/images/about/meetup5.jpg', '/images/about/meetup1.jpg'].map((src, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">View Photo</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
