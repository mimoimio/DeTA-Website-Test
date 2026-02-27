"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/new/ProjectCard";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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

const floatingCode = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const projects = [
  {
    src: "/images/mainpage/proreg.png",
    title: "ProReg: Manage Your Studies",
    desc: "Simplify the scheduling of your timetable for the next semester.",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    src: "/images/mainpage/simplifiedimaluum.png",
    title: "Simplified Imaluum",
    desc: "A simplified version of i-Ma'luum for students.",
    tech: ["React Native", "API", "Firebase"]
  },
  {
    src: "/images/mainpage/bucava.png",
    title: "Bucava: Online Business Card Platform",
    desc: "A business card vault mobile app for networking.",
    tech: ["Flutter", "Firebase", "Cloud"]
  },
  {
    src: "/images/mainpage/forecaster.png",
    title: "Forecaster: Cashflow Management",
    desc: "Accounting and cashflow forecasting tool for small businesses.",
    tech: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    src: "/images/mainpage/mindfulScroll.png",
    title: "Mindful Scroll: A Quran app for Doom Scrollers",
    desc: "A mobile application for managing screen time and promoting mindful digital habits.",
    tech: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    src: "/images/mainpage/pdfCompanion.png",
    title: "PDF Companion",
    desc: "A pdf tool that began as a simple automation tool for pdf forms. now improved through iterations with form filling, annotations, and collaboration features.",
    tech: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    src: "/images/mainpage/proRegAurum.png",
    title: "ProReg Aurum: Enhanced Version of ProReg",
    desc: "With a refined design and smarter features, ProReg Aurum makes it easier than ever to manage your courses, stay organized and connect with everything that matters in university life.",
    tech: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    src: "/images/mainpage/scopeguard.png",
    title: "ScopeGuard",
    desc: "A SaaS product for managing scope of work and payments for freelance clients.",
    tech: ["Next.js", "PostgreSQL", "Stripe"]
  },
];

const events = [
  {
    title: "DeTA Meetup 8.0",
    date: "26 April 2025",
    time: "09:00 AM - 11:00 AM",
    location: "Male Student Lounge, KICT, IIUM",
    image: "/images/DeTAMeetup7_2.png",
    category: "Meetup"
  },
  {
    title: "DeTA Hackathon 2025",
    date: "15 May 2025",
    time: "08:00 AM - 08:00 PM",
    location: "KICT Building, IIUM",
    image: "/images/mainpage/detackathon.jpg",
    category: "Hackathon"
  }
];

const activities = [
  {
    icon: "💻",
    title: "Coding Workshops",
    description: "Get practical experience and work directly on real-world projects!"
  },
  {
    icon: "📚",
    title: "Study Groups",
    description: "Boost your learning and stay motivated with peer support!"
  },
  {
    icon: "🏆",
    title: "Hackathons",
    description: "Unleash your creativity and problem-solving skills!"
  },
  {
    icon: "🎓",
    title: "Alumni Talks",
    description: "Gain real-world insights and career advice!"
  }
];

export default function Home() {
  return (
    <main className="mt-0">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-section" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        
        {/* Floating Code Snippets */}
        <motion.div 
          className="absolute top-20 left-10 text-white/20 text-6xl font-mono hidden lg:block"
          variants={floatingCode}
          animate="animate"
        >
          {'<Code />'}
        </motion.div>
        <motion.div 
          className="absolute bottom-40 right-10 text-white/20 text-5xl font-mono hidden lg:block"
          variants={floatingCode}
          animate="animate"
          style={{ animationDelay: "-2s" }}
        >
          {'{ }'}
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-white/20 text-4xl font-mono hidden lg:block"
          variants={floatingCode}
          animate="animate"
          style={{ animationDelay: "-4s" }}
        >
          {'const dev = true;'}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                Developer Community
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4"
            >
              <span className="gradient-text">DeTA</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Developer Tanah Air
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
            >
              A community of developers, git pushers, and turbo-nerds. Made in IIUM.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link 
                href={"about"}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                Join Us
                <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={"about"}
                className="glass-card text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Why Join Us?
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-orange-50/30">
        <motion.div 
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What We <span className="text-orange-500">Do</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We strive to leave an impact on the world through technology.
            </p>
          </motion.div>

          {/* Activity Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-8 text-center card-hover cursor-pointer"
              >
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 mt-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src="/images/mainpage/focuscoding.png"
                alt="focus coding"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card-dark p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Coding for Everyone</h3>
                <p className="text-white/80">From weekend hobbyists to aspiring pros, we believe coding should be accessible and enjoyable for all.</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src="/images/mainpage/lepakcoding.png"
                alt="lepak coding"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card-dark p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Join Our Network</h3>
                <p className="text-white/80">Join a supportive network of fellow programmers who share your passion.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link
              href="about"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              Read more info
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-lg">Our Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Community <span className="gradient-text">Innovations</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Expand your ideas and innovation throughout the days with us!
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Web App', 'Mobile', 'SaaS'].map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <motion.div 
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-lg">Stay Updated</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Upcoming <span className="text-orange-500">Events</span>
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Don&apos;t miss out on exciting programs to build your development dream!
            </p>
          </motion.div>

          {/* Events Timeline */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-orange-500/50 transition-all card-hover"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 text-center lg:w-40">
                    <div className="bg-orange-500 rounded-xl p-4">
                      <p className="text-2xl font-bold">{event.date.split(' ')[0]}</p>
                      <p className="text-sm">{event.date.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 w-full lg:w-80">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-2">
                        <FaClock /> {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {event.location}
                      </span>
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <div className="flex-shrink-0">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                      RSVP Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-white">&quot;</div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-white">&quot;</div>
        </div>
        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p 
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            &quot;Building the future, one commit at a time.&quot;
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/80 mt-6"
          >
            - Aiman Rahim, DeTA BDFL
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
