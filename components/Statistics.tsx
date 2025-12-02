import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

const spendData = [
  { name: 'Jan', fuel: 120, food: 300, misc: 50 },
  { name: 'Feb', fuel: 130, food: 280, misc: 80 },
  { name: 'Mar', fuel: 110, food: 320, misc: 40 },
  { name: 'Apr', fuel: 140, food: 290, misc: 60 },
  { name: 'May', fuel: 150, food: 350, misc: 90 },
  { name: 'Jun', fuel: 130, food: 310, misc: 50 },
];

const categoryData = [
  { name: 'Carburant', value: 35 },
  { name: 'Courses', value: 55 },
  { name: 'Entretien', value: 10 },
];

const COLORS = ['#06b6d4', '#cbd5e1', '#f59e0b'];

const Statistics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
         <h2 className="text-2xl font-semibold text-slate-900">Statistiques</h2>
         <p className="text-slate-500 text-sm">Analysez vos habitudes de consommation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900 mb-6">Dépenses mensuelles (6 derniers mois)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spendData} barSize={20}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="fuel" name="Carburant" stackId="a" fill="#06b6d4" radius={[0, 0, 4, 4]} />
                <Bar dataKey="food" name="Alimentation" stackId="a" fill="#94a3b8" />
                <Bar dataKey="misc" name="Divers" stackId="a" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-base font-semibold text-slate-900 mb-6">Répartition globale</h3>
          <div className="h-72 w-full flex-1 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none pb-8">
              <span className="text-2xl font-bold text-slate-900">1.2k</span>
              <span className="block text-xs text-slate-400">Total €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
