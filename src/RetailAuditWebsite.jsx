import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, Globe, CheckCircle, BarChart3, Shield, Users, TrendingUp, Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const RetailAuditWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Animated background particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Store Audits",
      description: "Comprehensive checks on stock accuracy, merchandising compliance, planogram adherence, and operational standards to ensure your stores meet brand expectations",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Warehouse Inventory Audits",
      description: "Detailed physical verification, stock reconciliation, cycle counting, and shrinkage analysis to maintain precise inventory records",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Process & Compliance Audits",
      description: "Evaluate adherence to company policies, safety protocols, and regulatory standards while identifying areas for operational improvement",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: "98%", label: "Inventory Accuracy" },
    { value: "35%", label: "Discrepancy Reduction" },
    { value: "$500K", label: "Annual Recovery" },
    { value: "0", label: "Regulatory Penalties" }
  ];

  const zones = [
    { name: "East Zone", team: 14 },
    { name: "West Zone", team: 12 },
    { name: "North Zone", team: 11 },
    { name: "South Zone", team: 15 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.8s ease-out; }
      `}</style>

      {/* Top Header Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+919810049179" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone className="w-4 h-4" />
            Contact No : +91 9810049179
          </a>
          <a href="mailto:contact@retailsaudit.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail className="w-4 h-4" />
            contact@retailsaudit.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                {/* TRAAS Logo */}
                <img 
                  src="/logo.png"
                  alt="TRAAS Logo" 
                  className="w-20 h-12 object-contain"
                />
                <div>
                  <div className="text-slate-800 font-bold text-lg whitespace-nowrap leading-tight">
                    The Retail Audit & Allied Services
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu - Buttons */}
            <div className="hidden md:flex space-x-2">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'home'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'about'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'services'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'team'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                }`}
              >
                Our Team
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'contact'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-800 p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            {['home', 'about', 'services', 'team', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => { setActiveSection(section); setMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 transition-colors capitalize"
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section === 'services' ? 'Services' : section === 'team' ? 'Our Team' : 'Contact Us'}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div>
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="fade-in">
            {/* Hero Section with Background Image */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-slate-900">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80')`,
                    backgroundPosition: 'center center'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 text-center px-4 max-w-5xl">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <img 
                    src="/logo.png"
                    alt="TRAAS Logo" 
                    className="w-57 h-40 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Company Name */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  The Retail Audit & Allied Services
                </h1>
                
                {/* Motto/Tagline */}
                <div className="h-1 w-32 bg-orange-400 mx-auto mb-6"></div>
                <p className="text-3xl md:text-3xl text-orange-300 mb-8 font-light">
                  Ensuring Accuracy, Enhancing Efficiency
                </p>
                <p className="text-xl md:text-1xl text-blue-200 mb-12 font-light max-w-3xl mx-auto">
                  Your Trusted Partner in Retail & Warehouse Inventory Audits
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setActiveSection('services')}
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
                  >
                    Explore Our Services <ChevronRight />
                  </button>
                  <button
                    onClick={() => setActiveSection('contact')}
                    className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => setActiveSection('about')}
                    className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="py-20 px-4 fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">About Us</h2>
              
              {/* Stats Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Our Track Record</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-orange-50 rounded-lg p-8 text-center border-2 border-orange-200 hover:shadow-xl transition-shadow">
                      <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.value}</div>
                      <div className="text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Why Choose Us */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Why Choose Us?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Proven Track Record</h4>
                    <p className="text-slate-600">Consistently improving inventory accuracy to up to 98% for our clients</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <Users className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Customized Solutions</h4>
                    <p className="text-slate-600">Tailored audit checklists aligned with your specific KPIs and business goals</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <BarChart3 className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Advanced Technology</h4>
                    <p className="text-slate-600">Mobile and tablet technology for real-time data capture and instant reporting</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <Shield className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Ethical Standards</h4>
                    <p className="text-slate-600">Unwavering commitment to confidentiality, integrity, and professional ethics</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-600">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Deliver precise, reliable retail and warehouse audits that empower businesses to optimize inventory and operations. We combine cutting-edge technology with deep industry expertise to provide actionable insights that drive measurable results.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-600">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h3>
                  <p className="text-slate-700 leading-relaxed">
                    To be the leading audit firm transforming retail inventory management through innovation and integrity. We aspire to set the gold standard in audit excellence, helping retailers worldwide achieve operational perfection.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-600 mb-4">
  <h3 className="text-2xl font-bold text-orange-600 mb-4">
    Our Geographic Reach
  </h3>
  <p className="text-slate-700 leading-relaxed">
    We operate on a <strong>PAN India basis</strong>, delivering retail and warehouse
    audit services across all major regions of the country. Our operational presence
    extends across <strong>India and the GCC region</strong>, enabling us to support
    both domestic and international audit requirements seamlessly.
  </p>
</div>


              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Specialized Focus</h4>
                  <p className="text-slate-600">Dedicated exclusively to retail stores and warehouse inventory audits</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Expert Team</h4>
                  <p className="text-slate-600">Experienced professionals with deep industry knowledge and proven methodologies</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Diverse Reach</h4>
                  <p className="text-slate-600">Serving multiple retail sectors with customized audit solutions</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {["Retail Chains", "FMCG", "Consumer Electronics", "Fashion & Apparel", "Warehousing & Logistics"].map((industry, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-slate-700 font-semibold">{industry}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <div className="py-20 px-4 fade-in bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">Our Core Services</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-blue-600">
                    <div className="text-blue-600 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600 mb-12">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
   Our Clients & Compliance Standards
  </h3>
  <p className="text-slate-700 leading-relaxed">
    We work with a diverse portfolio of clients across India as well as international
    markets, supporting multi-location retailers, warehouses, and supply chains with
    consistent audit standards.
  </p>
  <p className="text-slate-700 leading-relaxed">
    We strictly adhere to data privacy and confidentiality norms. All client information,
    audit data, and reports are handled with the highest level of integrity, security,
    and ethical responsibility in line with industry best practices.
  </p>
</div>


              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Audit Methodology</h3>
                <div className="space-y-6">
                  {[
                    { title: "Schedule & Prepare", desc: "Tailored audit plans based on client needs, store/warehouse specifics, and business objectives" },
                    { title: "On-site Inspection", desc: "Systematic walkthroughs covering stock levels, displays, safety compliance with minimal disruption" },
                    { title: "Data Collection & Verification", desc: "Utilizing digital tools and photographic evidence to ensure precision and transparency" },
                    { title: "Reporting & Action Plan", desc: "Clear, actionable insights with prioritized recommendations for continuous improvements" }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">{index + 1}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h4>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="py-20 px-4 fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">Our Team</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Seasoned Auditors</h4>
                  <p className="text-slate-600">Retail and supply chain veterans with decades of combined experience</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Dedicated Client Managers</h4>
                  <p className="text-slate-600">Personalized service ensuring consistent communication and comprehensive follow-up</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Continuous Learning</h4>
                  <p className="text-slate-600">Regular training on industry best practices and emerging trends</p>
                </div>
              </div>

              {/* Zone-wise Teams – names removed, zones + team size kept */}
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Zone-wise Teams</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {zones.map((zone, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-blue-600 mb-3">{zone.name}</h4>
                    <p className="text-slate-700">
                      <span className="font-semibold">Team Size:</span> {zone.team} members
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="py-20 px-4 fade-in bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">Let's Partner for Your Retail Success</h2>
              <p className="text-xl text-slate-600 mb-12 text-center">
                Ready to transform your inventory management? Contact us today to schedule your comprehensive audit or consultation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a href="mailto:contact@retailsaudit.com" className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600 break-all">contact@retailsaudit.com</p>
                </a>
                
                <a href="tel:+919810049179" className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">(+91) 9810049179</p>
                </a>
                
                <a href="http://www.retailsaudit.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Website</h3>
                  <p className="text-slate-600">www.retailsaudit.com</p>
                </a>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <p className="text-slate-600 text-lg mb-2">Offices</p>
                <p className="text-slate-800 font-semibold text-xl">India & UAE</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Head Office</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                The Retail Audit & Allied Services<br />
                India & UAE
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Write To Us</h3>
              <div className="space-y-2 text-sm">
                <p className="text-blue-200">Email: <a href="mailto:contact@retailsaudit.com" className="hover:text-white">contact@retailsaudit.com</a></p>
                <p className="text-blue-200">Phone: <a href="tel:+919810049179" className="hover:text-white">+91 9810049179</a></p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our Solutions</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Store Audits</li>
                <li>Warehouse Inventory Audits</li>
                <li>Process & Compliance Audits</li>
                <li>Mystery Shopping</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1H3oZLyv3H/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/the-retail-audit-and-allied-services-a156461b9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                <a
                  href="https://www.instagram.com/traasaudit/?utm_source=qr&igsh=Z3UxMzM0Mmw1N3dw#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-6 text-center">
            <p className="text-blue-200 text-sm">
              © 2024 The Retail Audit & Allied Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RetailAuditWebsite;
