import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  Send,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  Zap,
  Shield,
  Layout,
  Clock,
  Rocket,
  DollarSign,
  Heart,
  Activity,
  Globe,
  Users,
  Cpu,
  Trophy
} from 'lucide-react';
import { PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<{ type: 'home' | 'details', productId?: string }>({ type: 'home' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToDetails = (id: string) => {
    setCurrentView({ type: 'details', productId: id });
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentView({ type: 'home' });
    window.scrollTo(0, 0);
  };

  const activeProduct = PRODUCTS.find(p => p.id === currentView.productId);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050506] text-white font-['Inter']">
      {/* Dynamic Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[#00579C]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-2xl' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={navigateHome}>
            <div className="w-9 h-9 bg-[#00579C] rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(0,87,156,0.3)] group-hover:scale-105 transition-transform">S</div>
            <span className="text-lg font-bold tracking-tight uppercase">Sass <span className="text-[#00579C]">Suite</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <button onClick={navigateHome} className={`transition-colors ${currentView.type === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>The Ecosystem</button>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <button className="bg-[#00579C] text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:bg-[#004a85] active:scale-95">
              Launch Suite
            </button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {currentView.type === 'home' ? (
        <HomeView onProductClick={navigateToDetails} />
      ) : (
        <ProductDetailView product={activeProduct!} onBack={navigateHome} />
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase leading-none">Connect <br /><span className="text-[#00579C]">With Our Team</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md font-medium">
                Our engineering experts are ready to help you integrate the Sass Suite into your existing infrastructure.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-xl flex items-center justify-center text-[#00579C] group-hover:bg-[#00579C] group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">Inquiries</p>
                    <p className="font-bold text-lg">solutions@sass-suite.io</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass p-8 md:p-12 rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden">
              <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent Successfully'); }}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" required placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00579C] transition-all text-sm font-medium" />
                  <input type="email" required placeholder="Work Email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00579C] transition-all text-sm font-medium" />
                </div>
                <textarea rows={4} required placeholder="Message" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00579C] transition-all text-sm resize-none font-medium"></textarea>
                <button type="submit" className="w-full py-4 rounded-xl bg-[#00579C] hover:bg-[#004a85] text-white font-bold text-lg transition-all flex items-center justify-center gap-3 primary-glow">
                  Send Inquiry <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#00579C] rounded flex items-center justify-center font-bold text-xs shadow-lg">S</div>
            <span className="font-bold uppercase text-sm tracking-tight">Sass <span className="text-[#00579C]">Suite</span></span>
          </div>
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">© 2024 Sass Suite Ecosystem. All Rights Reserved.</div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] glass flex flex-col items-center justify-center md:hidden animate-in fade-in duration-300">
          <button className="absolute top-6 right-6 p-2 text-white" onClick={() => setIsMenuOpen(false)}>
            <X className="w-10 h-10" />
          </button>
          <div className="flex flex-col gap-10 text-3xl font-bold text-center uppercase tracking-tight">
            <button onClick={() => { navigateHome(); setIsMenuOpen(false); }}>Ecosystem</button>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="bg-[#00579C] text-white px-12 py-4 rounded-full shadow-2xl">Launch</button>
          </div>
        </div>
      )}
    </div>
  );
};

const HomeView: React.FC<{ onProductClick: (id: string) => void }> = ({ onProductClick }) => {
  return (
    <main className="relative z-10">
      {/* 1. HERO SECTION IMPROVED (No Italics, Standard Title Sizes) */}
      <section className="pt-48 pb-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00579C]/10 border border-[#00579C]/20 text-[#00579C] text-[10px] font-bold mb-10 uppercase tracking-[0.4em]">
            <Sparkles className="w-3.5 h-3.5" /> High-Fidelity Engineering
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight uppercase">
            Unified <br />
            <span className="gradient-text">Operations.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            A modular ecosystem of specialized tools designed to bridge the gap between technical complexity and business performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <a href="#suite-start" className="bg-[#00579C] hover:bg-[#004a85] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all primary-glow group">
              Explore the Suite <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="glass border border-white/10 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Product Overview
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500 mb-10">Trusted by modern engineering teams</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="text-xl font-bold tracking-tight uppercase">CloudForce</div>
            <div className="text-xl font-bold tracking-tight uppercase">DevNodes</div>
            <div className="text-xl font-bold tracking-tight uppercase">QuantCode</div>
            <div className="text-xl font-bold tracking-tight uppercase">ScaleOps</div>
            <div className="text-xl font-bold tracking-tight uppercase">VeriSync</div>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            <div className="text-center group">
              <div className="mb-6 mx-auto w-14 h-14 glass rounded-xl flex items-center justify-center text-[#00579C] group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Activity className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-black tracking-tight mb-2">99.9<span className="text-blue-500">%</span></p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Service Reliability</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 mx-auto w-14 h-14 glass rounded-xl flex items-center justify-center text-[#00579C] group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Globe className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-black tracking-tight mb-2">2M<span className="text-blue-500">+</span></p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Data Points Synced</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 mx-auto w-14 h-14 glass rounded-xl flex items-center justify-center text-[#00579C] group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Users className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-black tracking-tight mb-2">25K<span className="text-blue-500">+</span></p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Active End-Users</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 mx-auto w-14 h-14 glass rounded-xl flex items-center justify-center text-[#00579C] group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Cpu className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-black tracking-tight mb-2">45<span className="text-blue-500">%</span></p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Productivity Gain</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TITLE BEFORE SHOWING SAAS */}
      <section id="suite-start" className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-16">
            <div className="max-w-xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#00579C] mb-4">The Solution Ecosystem</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
                Specialized <br /><span className="text-white opacity-40">Toolstack</span>
              </h2>
            </div>
            <p className="text-gray-400 text-base max-w-xs leading-relaxed font-medium">
              A curated collection of tools designed to optimize every layer of your remote development cycle.
            </p>
          </div>

          {/* SaaS Products Grid */}
          <div className="space-y-10">
            {PRODUCTS.map(product => (
              <div
                key={product.id}
                className="glass p-1 rounded-[2rem] border-white/5 hover:border-[#00579C]/30 transition-all duration-500 overflow-hidden group shadow-xl"
              >
                <div className="bg-[#0a0a0b]/80 rounded-[1.9rem] overflow-hidden">
                  <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-14 items-start lg:items-center">

                    {/* Left Column: Icon/Visual */}
                    <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
                      <div
                        className="w-28 h-28 md:w-40 md:h-40 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-white/5 relative overflow-hidden"
                        style={{ backgroundColor: `${product.accentColor}15` }}
                      >
                        {React.cloneElement(product.icon as React.ReactElement<any>, {
                          className: 'w-12 h-12 md:w-20 md:h-20 relative z-10',
                          style: { color: product.accentColor }
                        })}
                      </div>
                    </div>

                    {/* Middle Column: Info & Actions */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-3 leading-none">{product.name}</h3>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                          {product.shortDescription}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-1">
                        <button
                          onClick={() => onProductClick(product.id)}
                          className="py-3.5 px-10 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-gray-200 active:scale-95 shadow-lg"
                        >
                          View Details <ArrowRight className="w-4 h-4" />
                        </button>
                        <a
                          href={product.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-bold text-sm hover:text-[#00579C] transition-colors flex items-center gap-2 border-b border-white/10 hover:border-[#00579C] pb-1"
                        >
                          Demo MVP <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Core Features List */}
                    <div className="lg:w-[30%] w-full lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 text-center lg:text-left">Core Features</h4>
                      <ul className="space-y-4 max-w-[260px] mx-auto lg:mx-0">
                        {product.features.slice(0, 4).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-4 group/item">
                            <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/10 transition-all">
                              {React.cloneElement(feature.icon as React.ReactElement<any>, {
                                className: 'w-4 h-4',
                                style: { color: product.accentColor }
                              })}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-tight text-gray-300 group-hover/item:text-white transition-colors">
                              {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Vision Footer */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Trophy className="w-12 h-12 text-[#00579C] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight uppercase leading-none">
            Engineered For <span className="text-[#00579C]">Success.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium mb-12">
            The Sass Suite represents a commitment to high-fidelity engineering and operational transparency in the era of remote work.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-gray-600">
            <span>Clean Architecture</span>
            <span>Security First</span>
            <span>High Concurrency</span>
            <span>API Powered</span>
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductDetailView: React.FC<{ product: Product, onBack: () => void }> = ({ product, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest">
            <ChevronLeft className="w-4 h-4" /> Return to Ecosystem
          </button>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[9px] font-bold mb-8 uppercase tracking-[0.4em] shadow-xl border" style={{ backgroundColor: `${product.accentColor}15`, borderColor: `${product.accentColor}30`, color: product.accentColor }}>
            High-Fidelity Deployment
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight uppercase">
            {product.name} <br />
            <span className="gradient-text">{product.tagline}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            {product.description}
          </p>
          <a href={product.liveDemoUrl} target="_blank" className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl active:scale-95 group">
            Launch Live Demo <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. WHAT'S DIFFERENT */}
      <section className="py-24 border-t border-white/5 relative bg-[#00579C]/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight uppercase">What's <span className="text-[#00579C]">Different?</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">Breaking the mold of conventional enterprise tools through precision architecture.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-[2rem] border-white/5 hover:border-[#00579C]/30 transition-all group">
              <div className="w-14 h-14 bg-[#00579C]/10 rounded-xl flex items-center justify-center text-[#00579C] mb-8 group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Modular Engine</h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">Built with a plugin-first philosophy. {product.name} integrates seamlessly without requiring heavy-duty infrastructure changes.</p>
            </div>
            <div className="glass p-10 rounded-[2rem] border-white/5 hover:border-[#00579C]/30 transition-all group">
              <div className="w-14 h-14 bg-[#00579C]/10 rounded-xl flex items-center justify-center text-[#00579C] mb-8 group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Outcome Metrics</h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">We prioritize results over activity. Our system analyzes deliverables to provide high-fidelity performance clarity.</p>
            </div>
            <div className="glass p-10 rounded-[2rem] border-white/5 hover:border-[#00579C]/30 transition-all group">
              <div className="w-14 h-14 bg-[#00579C]/10 rounded-xl flex items-center justify-center text-[#00579C] mb-8 group-hover:bg-[#00579C] group-hover:text-white transition-all">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Zero-Trust Logs</h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">Transparency is the baseline. Every action is recorded in a verifiable, permanent audit log for total accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS IN EXISTING SYSTEM */}
      <section className="py-24 border-t border-white/5 relative bg-red-500/[0.01]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight uppercase">Legacy <span className="text-red-500">Friction</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">Manual workflows and fragmented data are the silent killers of remote team momentum.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {product.problems.map((prob, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-red-500/10 hover:border-red-500/20 transition-all flex flex-col sm:flex-row gap-8 items-start group shadow-lg">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <XCircle className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{prob.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{prob.description || "Disconnected tools and manual reporting lead to inconsistent data and decreased visibility."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTIONS */}
      <section className="py-24 border-t border-white/5 relative bg-green-500/[0.01]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight uppercase">The <span className="text-green-500">Solution</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">Automating the accountability chain to liberate developers and inform leadership.</p>
          </div>
          <div className="space-y-24">
            {product.features.slice(0, 2).map((feat, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl" style={{ backgroundColor: `${product.accentColor}20`, color: product.accentColor }}>
                    {feat.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase leading-none">{feat.title} Architecture</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                    The {product.name} implementation of {feat.title} is designed to eliminate reporting lag. By hooking into existing lifecycle events, we capture high-fidelity status updates automatically.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-base text-gray-200 font-bold uppercase tracking-tight"><CheckCircle2 className="w-6 h-6 text-green-500" /> Automated Lifecycle Hooks</li>
                    <li className="flex items-center gap-4 text-base text-gray-200 font-bold uppercase tracking-tight"><CheckCircle2 className="w-6 h-6 text-green-500" /> Unified Anomaly Detection</li>
                    <li className="flex items-center gap-4 text-base text-gray-200 font-bold uppercase tracking-tight"><CheckCircle2 className="w-6 h-6 text-green-500" /> Secure Persistence Layer</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full glass rounded-[3rem] p-1 border-white/10 shadow-2xl bg-black/40 overflow-hidden group/viz">
                  <div className="bg-[#0a0a0b] rounded-[2.9rem] p-10 border border-white/5 aspect-video flex flex-col justify-center relative">
                    <div className="flex justify-between items-center mb-10 relative z-10">
                      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#00579C]" /> CLUSTER_CONNECTED
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                    </div>
                    <div className="space-y-8 relative z-10">
                      <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00579C] w-[88%] shadow-[0_0_15px_rgba(0,87,156,0.5)]"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                          <div className="text-[10px] font-bold uppercase text-gray-600 tracking-[0.2em] mb-2">Consistency_Score</div>
                          <div className="text-3xl font-black tracking-tight">99.1<span className="text-[#00579C]">%</span></div>
                        </div>
                        <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                          <div className="text-[10px] font-bold uppercase text-gray-600 tracking-[0.2em] mb-2">Sync_State</div>
                          <div className="text-3xl font-black tracking-tight">ACTIVE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight uppercase">Core <span className="text-[#00579C]">Modules</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">The foundational components that drive {product.name} performance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feat, i) => (
              <div key={i} className="glass p-10 rounded-3xl border border-white/5 text-left group hover:bg-[#00579C]/5 hover:border-[#00579C]/20 transition-all">
                <div className="mb-6 w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#00579C] group-hover:text-white transition-all" style={{ color: product.accentColor }}>
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">Standard {feat.title} module providing real-time data ingestion and high-fidelity output for enterprise-scale projects.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="py-32 border-t border-white/5 relative bg-[#00579C]/[0.01]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-none">Scalable <br /><span className="text-[#00579C]">Commitment</span></h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl mx-auto">Deploy specialized tools with a pricing model that reflects real-world impact.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* Free Tier */}
            <div className="glass p-12 rounded-[2.5rem] border-white/5 flex flex-col group hover:border-[#00579C]/20 transition-all">
              <div className="mb-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4">Solo Professional</div>
                <h3 className="text-5xl font-black tracking-tight mb-4 uppercase">Free <span className="text-lg text-gray-500 font-bold lowercase tracking-normal">forever</span></h3>
                <p className="text-gray-400 text-base leading-relaxed font-medium">Master your own accountability with essential performance and sync modules.</p>
              </div>
              <ul className="space-y-5 mb-12 flex-1">
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Standard Sync Hub</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Individual Scorecards</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Security Scan v1</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Community Docs</li>
              </ul>
              <button className="w-full py-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-[#00579C] hover:border-transparent transition-all active:scale-95 shadow-lg">Start Free Tier</button>
            </div>

            {/* Pay As You Want Tier */}
            <div className="p-1 rounded-[2.7rem] bg-gradient-to-br from-[#00579C] to-blue-500 shadow-2xl">
              <div className="bg-[#0a0a0b] p-12 rounded-[2.6rem] h-full flex flex-col relative overflow-hidden">
                <div className="mb-10 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00579C]/20 border border-[#00579C]/30 text-white text-[9px] font-black uppercase mb-6 tracking-[0.3em]">Premium Choice</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4">High Performance Teams</div>
                  <h3 className="text-5xl font-black tracking-tight mb-4 uppercase">Pay As <span className="text-[#00579C]">You Want</span></h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">We trust high-performance teams. Contribute what reflects the value we bring to your process.</p>
                </div>
                <ul className="space-y-5 mb-12 flex-1 relative z-10">
                  <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Unlimited Team Seats</li>
                  <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Advanced Data Hub</li>
                  <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Full Audit Controls</li>
                  <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> Enterprise Security</li>
                  <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#00579C]" /> SSO Integration</li>
                </ul>
                <button className="w-full py-5 rounded-xl bg-[#00579C] text-white font-bold text-lg hover:bg-[#004a85] transition-all shadow-xl active:scale-95 relative z-10">Secure Your Access</button>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em]">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Fair pricing for exceptional engineering.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[3.5rem] border-white/5 text-center relative z-10 shadow-3xl">
          <Sparkles className="w-12 h-12 text-[#00579C] mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight uppercase leading-none">Step Into <br /><span className="text-[#00579C]">The Sass Suite</span></h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            Join the elite engineering organizations using precision-driven tools to automate operational clarity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={product.liveDemoUrl} target="_blank" className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-4 active:scale-95 group">
              Deploy Now <Zap className="w-6 h-6 fill-black group-hover:scale-110 transition-transform" />
            </a>
            <button onClick={onBack} className="bg-white/5 text-white border border-white/10 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4 active:scale-95">
              Contact Support <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;