import React from 'react';
import { ViewState } from '../types';
import { AlertTriangle, TrendingUp, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onViewChange: (view: ViewState) => void;
}

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 280 },
  { name: 'Fri', value: 590 },
  { name: 'Sat', value: 430 },
  { name: 'Sun', value: 650 },
];

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Bonjour, John</h1>
        <p className="text-slate-500 text-sm mt-1">Voici le résumé de votre activité aujourd'hui.</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <AlertTriangle size={20} />
            </div>
            <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Action requise</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">2</div>
          <div className="text-xs text-slate-500 mt-1">Alertes véhicules</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-accent-50 rounded-lg text-accent-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-medium text-slate-400">+12%</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">324 €</div>
          <div className="text-xs text-slate-500 mt-1">Dépenses ce mois</div>
        </div>

         <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-500">
              <Clock size={20} />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">5</div>
          <div className="text-xs text-slate-500 mt-1">Produits à péremption</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">98%</div>
          <div className="text-xs text-slate-500 mt-1">Documents classés</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-base font-semibold text-slate-900">Dépenses Carburant</h3>
             <button onClick={() => onViewChange('stats')} className="text-xs font-medium text-accent-600 hover:text-accent-700">Voir tout</button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0f172a', fontSize: '12px', fontWeight: 600 }}
                  cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions / Recent */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Rappel Maintenance</h3>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer" onClick={() => onViewChange('vehicles')}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">🚗</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Audi A3</p>
                <p className="text-xs text-slate-500">Contrôle technique dans 15 jours</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer" onClick={() => onViewChange('vehicles')}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">🛵</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Vespa GTS</p>
                <p className="text-xs text-slate-500">Vidange dépassée</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            </div>
          </div>
          <button onClick={() => onViewChange('vehicles')} className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors">
            Gérer les véhicules <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
