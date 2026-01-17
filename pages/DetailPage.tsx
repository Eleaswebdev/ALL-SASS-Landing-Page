
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Bot, Sparkles, Terminal, HelpCircle, Layers, PlayCircle, Plus, Minus } from 'lucide-react';
import { SaaSProduct } from '../types';
import { getIcon } from '../constants';
import { analyzeProduct } from '../services/geminiService';

interface DetailPageProps {
  product: SaaSProduct;
  onBack: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ product, onBack }) => {
  const [aiAnalysis, setAiAnalysis] = useState<string>('Simulating neural analysis...');
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAnalysis = async () => {
      const result = await analyzeProduct(product.name, product.description);
      setAiAnalysis(result || "Unable to generate insights at this time.");
      setIsAnalyzing(false);
    };
    fetchAnalysis();
  }, [product]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">
      {/* Glow Effects */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-[-1]"></div>

      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-16 transition-colors group font-bold tracking-tight"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Ecosystem
      </button>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 p-3 glass rounded-2xl text-indigo-400 mb-8 border border-white/5">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              {getIcon(product.icon, 24)}
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em]">{product.category}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            {product.name}
          </h1>
          <p className="text-2xl text-indigo-400 font-bold mb-10 leading-tight">
            {product.tagline}
          </p>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            {product.longDescription}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href={product.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black rounded-[24px] font-black text-xl flex items-center gap-3 hover:bg-gray-200 transition-all shadow-xl shadow-white/10"
            >
              Launch Live Demo <PlayCircle size={24} />
            </a>
            <button className="px-10 py-5 glass text-white rounded-[24px] font-black text-xl hover:bg-white/10 transition-all border border-white/10">
              Technical Docs
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {product.stats.map((stat, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border border-white/5 flex flex-col justify-center">
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-black">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* AI Box */}
          <div className="mt-8 glass rounded-[32px] p-8 border border-indigo-500/20 bg-indigo-500/5 overflow-hidden relative group">
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse shadow-lg shadow-indigo-600/50">
                <Sparkles className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-black">AI Insight</h3>
            </div>
            <div className="bg-gray-950/80 rounded-2xl p-6 border border-white/5 font-mono text-sm text-indigo-300 relative z-10 leading-relaxed">
              {isAnalyzing ? (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-indigo-500 animate-bounce"></div>
                    <div className="w-1 h-4 bg-indigo-500 animate-bounce delay-75"></div>
                    <div className="w-1 h-4 bg-indigo-500 animate-bounce delay-150"></div>
                  </div>
                  <span>Neural Processing...</span>
                </div>
              ) : (
                <p>{aiAnalysis}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="mb-32 relative">
        <div className="absolute inset-0 bg-indigo-600/20 blur-[120px] rounded-full scale-75 opacity-20"></div>
        <div className="relative glass rounded-[60px] p-4 border border-white/10 overflow-hidden shadow-2xl">
          <img 
            src={product.previewImage} 
            className="w-full rounded-[48px] h-[500px] object-cover" 
            alt="Interface Preview" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black mb-4">Unified Interface</h3>
              <p className="text-gray-300 font-medium">A masterfully crafted experience designed to minimize cognitive load and maximize team throughput.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black mb-6">How it <span className="text-indigo-500">Works</span></h2>
            <p className="text-gray-400 text-lg">A simple three-step process to get your team from integration to production-ready output.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {product.workflow.map((step, idx) => (
              <div key={idx} className="glass p-8 rounded-[32px] border border-white/5 relative">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{idx + 1}</div>
                <h4 className="text-xl font-black mb-4 relative z-10">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Core <span className="text-indigo-500">Architecture</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Built on a foundation of reliability and cutting-edge performance engineering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border border-white/5 hover:bg-white/[0.05] transition-all group">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:scale-110 transition-transform">
                <Layers size={28} />
              </div>
              <h4 className="text-2xl font-black mb-4">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & FAQ Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* FAQ */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={32} className="text-indigo-500" />
            <h2 className="text-3xl font-black">Common Questions</h2>
          </div>
          {product.faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass rounded-3xl border border-white/5 overflow-hidden transition-all ${activeFaq === i ? 'ring-1 ring-indigo-500/50' : ''}`}
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {activeFaq === i ? <Minus size={20} className="text-indigo-500" /> : <Plus size={20} className="text-gray-500" />}
              </button>
              {activeFaq === i && (
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="glass p-12 rounded-[40px] border border-white/5 bg-gray-950/20">
          <div className="flex items-center gap-3 mb-10">
            <Terminal size={32} className="text-indigo-500" />
            <h2 className="text-3xl font-black">Under the Hood</h2>
          </div>
          <p className="text-gray-500 mb-10 font-medium italic">Our commitment to using the most performant and secure frameworks in the industry.</p>
          <div className="grid grid-cols-2 gap-4">
            {product.techStack.map(tech => (
              <div key={tech} className="bg-gray-900 border border-white/5 p-4 rounded-2xl text-center">
                <span className="text-white font-black uppercase tracking-widest text-xs">{tech}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 glass rounded-2xl border-l-4 border-indigo-500">
            <p className="text-sm text-gray-400 font-medium">OrbitSaaS ensures all products in our ecosystem maintain sub-millisecond inter-process communication for seamless workflow orchestration.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-32 text-center glass p-16 rounded-[60px] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full"></div>
        <h2 className="text-5xl font-black mb-8">Ready to transform your work?</h2>
        <button className="px-12 py-5 bg-indigo-600 text-white rounded-[24px] font-black text-xl hover:bg-indigo-700 transition-all flex items-center gap-3 mx-auto">
          Get Started with {product.name} <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
