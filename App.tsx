import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CarFront, 
  Utensils, 
  FileText, 
  BarChart3, 
  Settings, 
  Menu,
  X
} from 'lucide-react';
import { ViewState } from './types';
import Dashboard from './components/Dashboard';
import Vehicles from './components/Vehicles';
import FoodStock from './components/FoodStock';
import Documents from './components/Documents';
import Statistics from './components/Statistics';
import SettingsView from './components/Settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Véhicules', icon: CarFront },
    { id: 'food', label: 'Stocks', icon: Utensils },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'stats', label: 'Statistiques', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ] as const;

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard onViewChange={setCurrentView} />;
      case 'vehicles': return <Vehicles />;
      case 'food': return <FoodStock />;
      case 'documents': return <Documents />;
      case 'stats': return <Statistics />;
      case 'settings': return <SettingsView />;
      default: return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#FAFAFA] text-slate-800 font-sans overflow-hidden">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-semibold tracking-tight text-slate-900">Nexo</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-slate-100 rounded-md">
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-accent-50 text-accent-600'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon size={18} strokeWidth={1.75} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200/60 bg-white/50 backdrop-blur-sm pt-8 pb-6 px-4">
        <div className="px-3 mb-10 flex items-center gap-2">
           <div className="w-6 h-6 rounded bg-gradient-to-tr from-accent-500 to-cyan-300"></div>
           <span className="text-lg font-semibold tracking-tight text-slate-900">Nexo ERP</span>
        </div>
        
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                currentView === item.id
                  ? 'bg-accent-50 text-accent-600 shadow-sm ring-1 ring-accent-100'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon 
                size={18} 
                strokeWidth={1.75} 
                className={`transition-colors ${currentView === item.id ? 'text-accent-600' : 'text-slate-400 group-hover:text-slate-600'}`} 
              />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-3 pt-6 border-t border-slate-100">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
             <div className="flex flex-col">
               <span className="text-xs font-medium text-slate-900">John Doe</span>
               <span className="text-[10px] text-slate-500">Pro Plan</span>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden h-14 flex items-center justify-between px-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-tr from-accent-500 to-cyan-300"></div>
            <span className="font-semibold text-slate-900">Nexo</span>
          </div>
          <button onClick={() => setMobileMenuOpen(true)} className="text-slate-500">
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <div className="max-w-6xl mx-auto animate-fade-in">
             {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
