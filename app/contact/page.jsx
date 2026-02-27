"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

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

const socialLinks = [
  { icon: FaDiscord, href: "#", label: "Discord", color: "hover:bg-indigo-500" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
  { icon: FaGithub, href: "#", label: "GitHub", color: "hover:bg-gray-800" },
];

const faqs = [
  {
    question: "How can I join DeTA?",
    answer: "You can join DeTA by attending our meetups or following our social media channels for registration announcements."
  },
  {
    question: "What events do you organize?",
    answer: "We organize meetups, hackathons, workshops, study groups, and alumni talks throughout the year."
  },
  {
    question: "Is DeTA only for IIUM students?",
    answer: "While we're based in IIUM, our community is open to all developers and tech enthusiasts."
  }
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="text-orange-400 font-semibold text-lg">
            Get In Touch
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mt-2">
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Have questions or want to collaborate? We&apos;d love to hear from you!
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 -mt-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="glass-card-dark p-8 lg:p-10"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </motion.h2>
              
              <form className="space-y-6">
                <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What's this about?"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Your message..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </motion.div>
                
                <motion.button 
                  variants={fadeInUp}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Direct Contact */}
              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:DeTA@gmail.com" 
                    className="flex items-center gap-4 text-gray-600 hover:text-orange-500 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email us</p>
                      <p className="font-semibold">DeTA@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">KICT, IIUM, Malaysia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Office Hours</p>
                      <p className="font-semibold">Mon-Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <p className="text-gray-600 mb-6">Connect with our community on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} text-white transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none text-gray-700 font-medium">
                        {faq.question}
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
