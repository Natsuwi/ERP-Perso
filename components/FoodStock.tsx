import React, { useState } from 'react';
import { FoodItem } from '../types';
import { Plus, Search, Filter, AlertCircle } from 'lucide-react';

const mockFood: FoodItem[] = [
  { id: '1', name: 'Lait entier', category: 'Fridge', quantity: 2, unit: 'L', expiryDate: '2023-10-25' },
  { id: '2', name: 'Oeufs', category: 'Fridge', quantity: 4, unit: 'pcs', expiryDate: '2023-10-22' },
  { id: '3', name: 'Pâtes Penne', category: 'Pantry', quantity: 3, unit: 'kg', expiryDate: '2024-05-10' },
  { id: '4', name: 'Steaks hachés', category: 'Freezer', quantity: 6, unit: 'pcs', expiryDate: '2024-01-15' },
  { id: '5', name: 'Yaourts', category: 'Fridge', quantity: 1, unit: 'pot', expiryDate: '2023-10-21' },
];

const FoodStock: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Fridge' | 'Pantry' | 'Freezer'>('All');

  const filteredData = filter === 'All' ? mockFood : mockFood.filter(item => item.category === filter);

  const getExpiryStatus = (dateStr: string) => {
    const today = new Date();
    const expiry = new Date(dateStr);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays < 0) return { color: 'text-red-600 bg-red-50', text: 'Périmé' };
    if (diffDays <= 3) return { color: 'text-amber-600 bg-amber-50', text: `${diffDays} jours` };
    return { color: 'text-emerald-600 bg-emerald-50', text: 'OK' };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-semibold text-slate-900">Stocks Alimentaires</h2>
           <p className="text-slate-500 text-sm">Inventaire de la maison pour éviter le gaspillage.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filtres
          </button>
          <button className="flex items-center gap-2 bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-700 transition-colors shadow-sm shadow-accent-200">
            <Plus size={16} /> Ajouter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-slate-200">
        {['All', 'Fridge', 'Pantry', 'Freezer'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab as any)}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              filter === tab ? 'text-accent-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'All' ? 'Tout' : tab === 'Fridge' ? 'Frigo' : tab === 'Pantry' ? 'Placard' : 'Congélateur'}
            {filter === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 rounded-t-full"></div>}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Rechercher un produit..." 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
        />
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-3 font-medium text-slate-500">Nom</th>
              <th className="px-6 py-3 font-medium text-slate-500">Catégorie</th>
              <th className="px-6 py-3 font-medium text-slate-500">Quantité</th>
              <th className="px-6 py-3 font-medium text-slate-500">Péremption</th>
              <th className="px-6 py-3 font-medium text-slate-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.map((item) => {
              const status = getExpiryStatus(item.expiryDate);
              return (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-slate-500">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      item.category === 'Fridge' ? 'bg-blue-50 text-blue-700' :
                      item.category === 'Freezer' ? 'bg-cyan-50 text-cyan-700' : 'bg-orange-50 text-orange-700'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{item.quantity} <span className="text-slate-400 text-xs">{item.unit}</span></td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${status.color}`}>
                       {status.text !== 'OK' && <AlertCircle size={12} />}
                       {item.expiryDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                      Consommer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className="p-8 text-center text-slate-500">Aucun produit trouvé.</div>
        )}
      </div>
    </div>
  );
};

export default FoodStock;
