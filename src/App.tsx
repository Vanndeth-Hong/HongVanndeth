import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { TestimonialCard } from './components/TestimonialCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Facebook, Linkedin, Award, ArrowRight, MapPin, Mail, Send, Instagram } from 'lucide-react';
import heroImage from 'figma:asset/24a2f7a2a4c3bcc822465d12c164ff955496a3ef.png';
import projectImg from './assets/project.png';

export default function App() {
  const homeRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      home: homeRef,
      work: workRef,
      about: aboutRef,
      contact: contactRef
    };
    
    const targetRef = refs[section as keyof typeof refs];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavClick={scrollToSection} />

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#007BFF]/10 rounded-full blur-3xl" />
              <div className="absolute top-20 right-10 w-2 h-20 bg-[#00A3FF] rounded-full rotate-12" />
              
              <div className="relative">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-[#007BFF]">Full-Stack</span>
                  <br />
                  <span className="text-gray-900">Coder & more</span>
                </h1>
                
                {/* Decorative scribble */}
                <svg className="absolute -bottom-4 left-0 w-40 h-8 text-[#00A3FF]" viewBox="0 0 160 32" fill="none">
                  <path d="M2 15 Q 40 5, 80 15 T 158 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Crafting exceptional digital experiences with clean code and creative thinking. Let's build something amazing together.
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="bg-[#007BFF] text-white px-8 py-4 rounded-full hover:bg-[#0066DD] transition-all hover:scale-105 hover:shadow-xl font-medium text-lg flex items-center gap-2"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Sparkle decorations */}
                <div className="flex gap-2">
                  <span className="text-[#00A3FF] text-2xl animate-pulse">✨</span>
                  <span className="text-[#007BFF] text-xl animate-pulse delay-100">✦</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#00A3FF]/20 rounded-full blur-3xl" />
              <ImageWithFallback 
                src={heroImage}
                alt="Qlark Gil"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00A3FF] rounded-full opacity-20 blur-2xl" />
              <svg className="absolute top-10 -right-6 w-16 h-16 text-[#007BFF]" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: '8s' }} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={aboutRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            HI, I'M 👋 <span className="text-[#007BFF]">Hong Vanndeth</span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I'm an award winner creative developer with over <span className="font-bold text-[#007BFF]">3 years experience</span>, 
            based in Phnom Penh, the Capital of the Cambodia.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://t.me/hongvanndeth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition-all shadow-lg hover:scale-110 group"
            >
              <Send className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/planntingideas?igsh=Z2Q1M3lrb3k1ZGkz&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition-all shadow-lg hover:scale-110 group"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/hong.vanndeth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition-all shadow-lg hover:scale-110 group"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-[#007BFF] to-[#00A3FF] text-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-bold mb-2">3+ Year</div>
              <div className="text-xl opacity-90">Coding Experience</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-[#00A3FF] to-[#40B4FF] text-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-xl opacity-90">Website Build</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-[#0066DD] to-[#007BFF] text-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-xl opacity-90">Lead Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              All kind of <span className="text-[#007BFF]">coding solution.</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive development services tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="code"
              title="Application & Software Development"
              description="High-performance desktop and mobile solutions with robust back-end logic"
              features={[
                'Custom API Design & Integration',
                'Full-Stack Web Applications',
                'Database Architecture & Optimization',
                'Cross-Platform Mobile Development'
              ]}
              variant="primary"
            />

            <ServiceCard 
              icon="smartphone"
              title="E-commerce Platform Development"
              description="Scalable, secure, and conversion-focused digital storefronts with seamless user journeys. 
"
              features={[
                'Custom Storefront & UX Design',
                'Payment Gateway & Security Integration',
                'Inventory & Order Management',
                'Omnichannel & API Connectivity'
              ]}
              variant="secondary"
            />

            <ServiceCard 
              icon="palette"
              title="Interface Design & Development"
              description="Beautiful, user-friendly interfaces that convert"
              features={[
                'UI/UX Design',
                'Figma to Code Conversion',
                'Responsive Design',
                'Design Systems'
              ]}
              variant="tertiary"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={workRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-bold">
              Explore My <span className="text-[#007BFF]">Top Creations</span>
            </h2>
            <button className="flex items-center gap-2 text-[#007BFF] font-medium hover:gap-4 transition-all">
              Explore All
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ProjectCard 
              category="Database"
              title="Application Programmer"
              image="https://newconfig.com/wp-content/uploads/2019/11/shutterstock_395830438_Downloaded-Image-11.10.2019-by-Dima.jpg"
            />

            <ProjectCard 
              category="Programmer"
              title="E-commerce Platform Development"
              image={projectImg} 
            />

            <ProjectCard 
              category="Web Development"
              title="Figma to HTML5 & CSS3 Convert"
              image="https://www.figma.com/community/thumbnail?resource_id=1421932899298722297&resource_type=plugin"
            />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E9BFF] to-[#2196F3] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Technical Skills
          </h2>

          {/* Skills Grid */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-6">
              <SkillBadge skill="Java" color="orange" />
              <SkillBadge skill="Leadership" color="blue" />
              <SkillBadge skill="Python" color="pink" />
              <SkillBadge skill="ReactJS" color="orange-dark" />
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-6">
              <SkillBadge skill="C++" color="green" />
              <SkillBadge skill="HTML" color="red" />
              <SkillBadge skill="CSS" color="orange-dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00A3FF] flex items-center justify-center text-white text-xl font-bold mb-4">
                P
              </div>
              <p className="text-2xl font-bold mb-4">
                Today, improve your business with quality.
              </p>
              <p className="text-gray-400 mb-6">
                Creating exceptional digital experiences that drive results and exceed expectations.
              </p>
              
              {/* Address */}
              <div className="flex items-start gap-3 text-gray-400 mb-4">
                <MapPin className="w-5 h-5 mt-1 text-[#007BFF]" />
                <div>
                  <p>Phnom Penh, Cambodia</p>
                  <p>St.244 Botumvatey Pagoda</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#007BFF]" />
                <p>vanndethhong@gmail.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#007BFF] transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('work')} className="text-gray-400 hover:text-[#007BFF] transition-colors">Work</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#007BFF] transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#007BFF] transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400">Stay updated with latest projects and insights</p>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 . All rights reserved.
            </p>

            <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/hong.vanndeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#166fe5] transition-all hover:scale-110 shadow-lg"
                    aria-label="Follow on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://t.me/hongvanndeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-[#0088cc] transition-all hover:scale-110 shadow-lg"
                    aria-label="Contact on Telegram"
                  >
                  <Send className="w-5 h-5" /> {/* Use Send icon for Telegram */}
                  </a>
                  <a 
                    href="https://www.instagram.com/planntingideas?igsh=Z2Q1M3lrb3k1ZGkz&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                    aria-label="Follow on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}