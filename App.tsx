
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { SaaSProduct, ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<SaaSProduct | null>(null);

  // Simple Hash Routing logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '' || hash === '/') {
        setView('home');
        setSelectedProduct(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (product: SaaSProduct) => {
    setSelectedProduct(product);
    setView('detail');
    window.location.hash = product.id;
  };

  const handleGoHome = () => {
    setView('home');
    setSelectedProduct(null);
    window.location.hash = '/';
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar onHome={handleGoHome} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <HomePage onSelectProduct={handleSelectProduct} />
        ) : (
          selectedProduct && (
            <DetailPage 
              product={selectedProduct} 
              onBack={handleGoHome} 
            />
          )
        )}
      </main>

      <Footer />

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-10]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#030712]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
    </div>
  );
};

export default App;
