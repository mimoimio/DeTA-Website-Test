import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/new/ProjectCard";
import { FiArrowRight, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";

export default function Home() {
  const features = [
    {
      icon: "💻",
      title: "Coding for Everyone",
      description: "From weekend hobbyist to aspiring pros, we believe coding should be accessible and enjoyable for all.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🤝",
      title: "Supportive Network",
      description: "Join a supportive network of fellow programmers who share your passion for building amazing things.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "🚀",
      title: "Build Real Projects",
      description: "Gain hands-on experience by working on real projects that make a difference in our community.",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const events = [
    {
      id: 1,
      title: "DeTA Meetup 8.0",
      date: "26 April 2025",
      time: "09:00 PM - 11:00 PM",
      location: "Male Student Lounge, KICT, IIUM",
      description: "Gather and network with everybody from different backgrounds in the IT industry",
      image: "images/DeTAMeetup7_2.png",
      badge: "Upcoming"
    },
    {
      id: 2,
      title: "DeTA Hackathon",
      date: "Coming Soon",
      time: "TBA",
      location: "KICT, IIUM",
      description: "48 hours of coding, collaboration, and innovation. Build amazing solutions with your team.",
      image: "images/Hackathon.png",
      badge: "Registration Open"
    }
  ];

  return (
    <main className="min-h-screen bg-[#080808]">
      <Header />

      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center min-h-screen">
        {/* Animated grid background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl stagger-children">
            {/* Mono badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 reveal">
              <span className="mono-badge text-[#FF6B00]">&lt;hello /&gt;</span>
              <span className="text-sm text-white/70">Welcome to DeTA</span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight reveal" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block">Developer</span>
              <span className="block text-gradient">Tanah Air</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed reveal">
              A community of developers, git pushers, and turbo-nerds. Made in IIUM. Building the future, one commit at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 reveal">
              <Link
                href="about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B00] rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105"
              >
                <span>Join Our Community</span>
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>

              <Link
                href="about"
                className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <span>Learn More</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div> 

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
              <span className="mono-badge text-xs">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do We Do Section */}
      <section className="relative py-32 px-6 grid-pattern">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="mono-badge text-[#FF6B00]">01.</span>
              <span className="text-sm text-white/70">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Building <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We&apos;re more than just a community—we&apos;re a movement. Here&apos;s what makes DeTA special.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-500 card-hover overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#FF6B00]/20 to-transparent rounded-tl-full translate-x-1/2 translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden border border-white/5">
                <Image
                  src="/images/mainpage/focuscoding.png"
                  alt="DeTA Community Coding"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 border border-[#FF6B00]/20">
                <div className="text-3xl font-black text-[#FF6B00]">60+</div>
                <div className="text-sm text-white/60">Active Members</div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <span className="mono-badge text-[#FF6B00]">02.</span>
                  <span className="text-sm text-white/70">Our Community</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Where Passion <span className="text-gradient">Meets Purpose</span>
                </h2>
              </div>

              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  Join a supportive network of fellow programmers who share your passion. Whether you&apos;re just starting out or you&apos;ve been coding for years, there&apos;s a place for you here.
                </p>
                <p>
                  We organize meetups, hackathons, study sessions, and workshops to help you grow as a developer and connect with like-minded individuals.
                </p>
              </div>

              <Link
                href="about"
                className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold hover:gap-5 transition-all"
              >
                <span>Discover Our Story</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations / Projects Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="mono-badge text-[#FF6B00]">03.</span>
                <span className="text-sm text-white/70">Our Projects</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Innovations by Our <span className="text-gradient">Community</span>
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-white/10 transition-all"
            >
              <span>View All Projects</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Projects Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            <ProjectCard
              src="/images/ProReg.webp"
              title="ProReg: Manage Your Studies"
              desc="A comprehensive course registration and management system designed to simplify academic planning for IIUM students."
              tags={["Web App", "React"]}
            />
            <ProjectCard
              src="/images/SimplifiedImaluum.png"
              title="Simplified Imaluum"
              desc="A modern, user-friendly interface for the IIUM student portal that makes accessing important information a breeze."
              tags={["Mobile", "Flutter"]}
            />
            <ProjectCard
              title="DeTA Connect"
              desc="An internal communication platform that keeps our community connected and informed about upcoming events and opportunities."
              tags={["Web", "Next.js"]}
            />
            <ProjectCard
              title="CodeShare"
              desc="A collaborative code editing tool that allows multiple developers to work together in real-time."
              tags={["Web", "WebSocket"]}
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="mono-badge text-[#FF6B00]">04.</span>
              <span className="text-sm text-white/70">Events</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Don&apos;t miss out on our exciting events. Join us and be part of something amazing.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-500 card-hover"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/${event.image}`}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF6B00] rounded-full text-xs font-semibold text-white">
                    {event.badge}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF6B00] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-white/60 mb-6">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/70">
                      <FiCalendar className="w-5 h-5 text-[#FF6B00]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <FiClock className="w-5 h-5 text-[#FF6B00]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <FiMapPin className="w-5 h-5 text-[#FF6B00]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B00] rounded-xl font-semibold text-white hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all"
                  >
                    <span>RSVP Now</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="glass rounded-3xl p-12 md:p-16 border border-white/5">
            <div className="text-6xl mb-8">&ldquo;</div>
            <blockquote className="text-2xl md:text-4xl font-bold leading-relaxed mb-8">
              Building the future, <span className="text-gradient">one commit</span> at a time.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-[#FF6B00]"></div>
              <cite className="text-white/60 not-italic">
                <span className="font-semibold text-white">Aiman Rahim</span>, DeTA BDFL
              </cite>
              <div className="w-12 h-0.5 bg-[#FF6B00]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to <span className="text-gradient">Join Us?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Be part of our growing community of developers. Learn, build, and grow together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="about"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#FF6B00] rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105"
            >
              <span>Get Started</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="contact"
              className="inline-flex items-center gap-3 px-10 py-5 glass rounded-2xl font-semibold hover:bg-white/10 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
