import React from 'react';
import { Vehicle } from '../types';
import { Plus, Fuel, Wrench, MoreHorizontal, Calendar } from 'lucide-react';

const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Audi A3 Sportback',
    model: '2.0 TDI',
    year: 2020,
    km: 45230,
    nextServiceDate: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?auto=format&fit=crop&q=80&w=1000',
    status: 'warning'
  },
  {
    id: '2',
    name: 'Vespa GTS 300',
    model: 'Super Tech',
    year: 2022,
    km: 8400,
    nextServiceDate: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1623048924152-3269b6b856c4?auto=format&fit=crop&q=80&w=1000',
    status: 'ok'
  }
];

const Vehicles: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-2xl font-semibold text-slate-900">Véhicules</h2>
           <p className="text-slate-500 text-sm">Gérez l'entretien et le suivi de vos véhicules.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow">
          <Plus size={16} /> Nouveau Véhicule
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="h-48 w-full overflow-hidden relative">
               <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute top-3 right-3">
                 <span className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                   vehicle.status === 'ok' ? 'bg-emerald-500/10 text-emerald-700 bg-white/90' :
                   vehicle.status === 'warning' ? 'bg-amber-500/10 text-amber-700 bg-white/90' : 'bg-red-500/10 text-red-700 bg-white/90'
                 }`}>
                   {vehicle.status === 'ok' ? 'En ordre' : vehicle.status === 'warning' ? 'Entretien bientôt' : 'Critique'}
                 </span>
               </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{vehicle.name}</h3>
                  <p className="text-slate-500 text-sm">{vehicle.model} • {vehicle.year}</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Kilométrage</span>
                    <span className="text-sm font-medium text-slate-900 font-mono">{vehicle.km.toLocaleString()} km</span>
                 </div>
                 <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Prochain service</span>
                    <div className="flex items-center gap-1 justify-end text-sm font-medium text-slate-900">
                      <Calendar size={14} className="text-accent-500" />
                      {vehicle.nextServiceDate}
                    </div>
                 </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                 <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
                    <Fuel size={16} /> Plein
                 </button>
                 <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
                    <Wrench size={16} /> Entretien
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
