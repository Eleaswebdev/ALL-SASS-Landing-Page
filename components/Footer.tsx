
import React from 'react';
import { Rocket, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="text-indigo-600" size={24} />
              <span className="text-2xl font-bold">OrbitSaaS</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-xs">
              Unified ecosystem of high-performance SaaS tools designed for the future of work.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-indigo-400 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Get the latest updates from our labs.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-gray-600 text-sm">
          <p>© 2024 OrbitSaaS Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
