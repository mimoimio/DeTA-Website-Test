import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function About() {
  const stats = [
    { value: "10+", label: "Completed Projects" },
    { value: "60+", label: "Community Members" },
    { value: "10+", label: "Organized Events" },
  ];

  const missions = [
    {
      title: "Empowering Developers",
      description: "We believe in empowering every developer to reach their full potential through mentorship, resources, and hands-on experience.",
      image: "/images/about/first.png",
      highlights: [
        "Weekly coding workshops and tutorials",
        "One-on-one mentorship programs",
        "Access to learning resources and materials",
        "Peer code reviews and feedback sessions"
      ]
    },
    {
      title: "Building Community",
      description: "Creating a supportive environment where developers can connect, collaborate, and grow together.",
      image: "/images/about/second.png",
      highlights: [
        "Regular meetups and networking events",
        "Collaborative projects and hackathons",
        "Online community platforms",
        "Alumni connections and opportunities"
      ]
    },
    {
      title: "Innovation & Excellence",
      description: "Pushing boundaries and fostering innovation through real-world projects and cutting-edge technologies.",
      image: "/images/about/third.png",
      highlights: [
        "Open source contributions",
        "Industry partnerships and collaborations",
        "Research and development initiatives",
        "Startup incubation support"
      ]
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl floating"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 stagger-children">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 reveal">
                  <span className="mono-badge text-[#FF6B00]">&lt;about /&gt;</span>
                  <span className="text-sm text-white/70">Who We Are</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Developing <span className="text-gradient">Excellence</span> Together
                </h1>
              </div>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed reveal">
                We are a community of passionate developers committed to revolutionizing the digital world with innovative, sustainable, and cost-effective solutions. With a proven track record of delivering exceptional projects, we combine state-of-the-art technology, skill expertise, and customer-centric approaches to bring visions to life.
              </p>

              <Link
                href="contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B00] rounded-2xl font-bold text-white hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105 transition-all duration-300 reveal"
              >
                <span>Get In Touch</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative reveal">
              <div className="relative rounded-3xl overflow-hidden border border-white/5">
                <Image
                  src="/images/about/catcode.png"
                  alt="DeTA Community"
                  width={700}
                  height={700}
                  className="w-full h-auto transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-[#FF6B00]/20">
                <div className="mono-badge text-[#FF6B00] text-sm">Since 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="glass rounded-3xl p-12 md:p-16 border border-white/5">
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-gradient mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Sections */}
      {missions.map((mission, index) => (
        <section
          key={index}
          className={`relative py-24 px-6 ${
            index % 2 === 1 ? 'bg-[#0a0a0a]' : ''
          }`}
        >
          <div className="container mx-auto max-w-7xl">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-white/5 group">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    width={700}
                    height={700}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
                </div>
                {/* Number badge */}
                <div className={`absolute -top-6 ${
                  index % 2 === 0 ? '-right-6' : '-left-6'
                } glass rounded-2xl p-4 border border-[#FF6B00]/20`}>
                  <div className="text-3xl font-black text-[#FF6B00]">0{index + 1}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                    <span className="mono-badge text-[#FF6B00]">0{index + 1}</span>
                    <span className="text-sm text-white/70">Our Mission</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {mission.title}
                  </h2>
                </div>

                <p className="text-lg text-white/70 leading-relaxed">
                  {mission.description}
                </p>

                <div className="space-y-3">
                  {mission.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/80">
                      <FiCheckCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How We Work Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden">
        {/* Background effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#FF6B00]/5 rounded-t-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 reveal">
              <span className="mono-badge text-[#FF6B00]">&lt;process /&gt;</span>
              <span className="text-sm text-white/70">How We Work</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 reveal" style={{ fontFamily: 'var(--font-display)' }}>
              How <span className="text-gradient">We Work</span>
            </h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto reveal">
              Our approach is simple: collaborate, innovate, and deliver. We believe in transparent processes, open communication, and continuous improvement.
            </p>

            <div className="relative reveal">
              <div className="glass rounded-3xl p-8 md:p-12 inline-block border border-white/5">
                <Image
                  src="/images/about/last.png"
                  alt="How We Work"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto h-auto"
                />
              </div>
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
              href="contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#FF6B00] rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105"
            >
              <span>Join DeTA</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-10 py-5 glass rounded-2xl font-semibold hover:bg-white/10 transition-all"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
