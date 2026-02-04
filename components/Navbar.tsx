import React from 'react';
import { Ghost, LayoutDashboard } from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="border-b border-deep-700 bg-deep-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView('LANDING')}>
            <Ghost className="h-8 w-8 text-accent-500" />
            <span className="ml-2 text-xl font-bold tracking-tight text-white">Showdown<span className="text-accent-500">Deep</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => setView('LANDING')} className={`px-3 py-2 rounded-md text-sm font-medium ${currentView === 'LANDING' ? 'bg-deep-800 text-white' : 'text-gray-300 hover:bg-deep-700 hover:text-white'}`}>Scan</button>
              <button onClick={() => setView('ADMIN')} className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${currentView === 'ADMIN' ? 'bg-deep-800 text-white' : 'text-gray-300 hover:bg-deep-700 hover:text-white'}`}><LayoutDashboard size={16} /> Admin</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
