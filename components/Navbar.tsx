
import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onHome}
        >
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Rocket className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">OrbitSaaS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-400">
          <button onClick={onHome} className="hover:text-white transition-colors">Solutions</button>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold hover:text-white transition-colors">Login</button>
          <button className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-200 transition-colors">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          <button onClick={() => { onHome(); setIsOpen(false); }} className="text-left text-lg hover:text-indigo-400">Solutions</button>
          <a href="#" className="text-lg hover:text-indigo-400">Pricing</a>
          <a href="#" className="text-lg hover:text-indigo-400">Docs</a>
          <a href="#" className="text-lg hover:text-indigo-400">Company</a>
          <hr className="border-gray-800" />
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 text-center rounded-xl border border-gray-700">Login</button>
            <button className="w-full py-3 text-center rounded-xl bg-indigo-600 text-white font-bold">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
