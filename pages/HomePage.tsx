
import React, { useState } from 'react';
import { ArrowRight, Star, ExternalLink, CheckCircle2, ShieldCheck, Zap, Users, Globe, ChevronRight } from 'lucide-react';
import { PRODUCTS, getIcon } from '../constants';
import { SaaSProduct } from '../types';

interface HomePageProps {
  onSelectProduct: (product: SaaSProduct) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectProduct }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'DevOps', 'AI', 'Design', 'Finance', 'Marketing'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const stats = [
    { icon: <Users />, label: "Engineers Syncing", value: "250k+" },
    { icon: <ShieldCheck />, label: "Security Level", value: "Military" },
    { icon: <Zap />, label: "Optimization", value: "99th Pct" },
    { icon: <Globe />, label: "API Global Edge", value: "12ms" },
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Glows */}
      <div className="orbit-glow top-0 left-[-10%] opacity-50"></div>
      <div className="orbit-glow bottom-[20%] right-[-10%] opacity-30"></div>

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-32 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-sm text-indigo-300 font-medium">
          <Star size={14} className="fill-indigo-300" />
          <span>The Developer Experience Suite 2.0</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
          Engineering <span className="gradient-text">Excellence</span> <br /> At Scale
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          An elite collection of high-performance tools designed to automate the mundane and secure the mission-critical. From AI documentation to real-time sync.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-1">
            Explore Toolkit <ArrowRight size={20} />
          </button>
          <button className="px-10 py-5 glass hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all border border-white/10">
            View Benchmarks
          </button>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <p className="text-center text-gray-500 uppercase tracking-widest text-xs font-bold mb-10">Trusted by modern engineering teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
          <div className="text-3xl font-black italic">GITHUB</div>
          <div className="text-3xl font-black italic">VERCEL</div>
          <div className="text-3xl font-black italic">LINEAR</div>
          <div className="text-3xl font-black italic">STRIPE</div>
          <div className="text-3xl font-black italic">RAYCAST</div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center border border-white/5 hover:border-indigo-500/20 transition-all">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500 mx-auto mb-4">
                {s.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog List Cards */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Toolkit <span className="text-indigo-500">Overview</span></h2>
            <p className="text-gray-400 text-lg">Every OrbitSaaS tool is engineered for high-concurrency environments and seamless CI/CD integration.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative glass rounded-[40px] overflow-hidden p-2 hover:bg-white/[0.04] transition-all border border-white/5 hover:border-indigo-500/30"
              onClick={() => onSelectProduct(product)}
            >
              <div className="flex flex-col lg:flex-row gap-8 p-8 md:p-12 items-center lg:items-stretch">
                {/* Visual Side */}
                <div className="w-full lg:w-2/5 shrink-0 rounded-[32px] overflow-hidden relative aspect-video lg:aspect-auto h-auto min-h-[300px]">
                  <img 
                    src={product.previewImage} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-indigo-400 border border-white/10">
                    {product.category}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-600/20">
                      {getIcon(product.icon, 28)}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black">{product.name}</h3>
                      <p className="text-indigo-400 font-bold text-sm">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {product.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block text-sm">{f.title}</span>
                          <span className="text-xs text-gray-500">{f.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <div className="flex gap-8">
                      {product.stats.slice(0, 2).map((s, idx) => (
                        <div key={idx}>
                          <div className="text-xl font-black text-white">{s.value}</div>
                          <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="px-8 py-4 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-2xl font-black text-sm flex items-center gap-3 transition-all group/btn"
                    >
                      Technical Deep Dive <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section Placeholder */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Plan <span className="text-indigo-500">Selection</span></h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">From individual power-users to enterprise-scale clusters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Developer', 'Startup', 'Enterprise'].map((tier, i) => (
            <div key={tier} className={`glass p-10 rounded-[40px] border border-white/5 relative ${i === 1 ? 'border-indigo-500/50 shadow-2xl shadow-indigo-600/10' : ''}`}>
              {i === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Recommended</div>}
              <h3 className="text-2xl font-black mb-2">{tier}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">${i === 0 ? '0' : i === 1 ? '99' : '499'}</span>
                <span className="text-gray-500 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['All core tools included', 'Priority processing', 'Dedicated API nodes', 'Custom SLA agreements'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black transition-all ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Deploy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="glass rounded-[60px] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 leading-tight">Scale Your <br/> Engineering Flow</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">Connect your repositories and let OrbitSaaS handle the technical debt, synchronization, and documentation.</p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-gray-200 transition-all flex items-center gap-3">
              Start Free Trial <Zap size={24} className="fill-black" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
