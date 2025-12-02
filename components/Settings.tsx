import React from 'react';
import { User, Bell, Shield, Moon } from 'lucide-react';

const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
         <h2 className="text-2xl font-semibold text-slate-900">Paramètres</h2>
         <p className="text-slate-500 text-sm">Gérez vos préférences et votre compte.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-start gap-4">
           <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-xl font-bold text-slate-500">JD</div>
           <div className="flex-1">
             <h3 className="text-lg font-medium text-slate-900">John Doe</h3>
             <p className="text-slate-500 text-sm">john.doe@example.com</p>
             <button className="mt-3 text-sm text-accent-600 font-medium hover:text-accent-700">Changer l'avatar</button>
           </div>
        </div>

        <div className="divide-y divide-slate-100">
          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Profil public</p>
                <p className="text-xs text-slate-500">Nom, bio et liens sociaux</p>
              </div>
            </div>
            <button className="text-sm text-slate-400 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-slate-300">Modifier</button>
          </div>

          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <Bell size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Notifications</p>
                <p className="text-xs text-slate-500">Alertes véhicules et stocks</p>
              </div>
            </div>
             <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-accent-500 right-0"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-accent-500 cursor-pointer"></label>
            </div>
          </div>

           <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Sécurité & Données</p>
                <p className="text-xs text-slate-500">Mot de passe et export</p>
              </div>
            </div>
            <button className="text-sm text-slate-400 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-slate-300">Gérer</button>
          </div>

          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors opacity-50 cursor-not-allowed">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                <Moon size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Mode Sombre</p>
                <p className="text-xs text-slate-500">Bientôt disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
