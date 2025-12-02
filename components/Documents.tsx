import React from 'react';
import { DocumentItem } from '../types';
import { UploadCloud, FileText, Image, MoreVertical, Folder, Search } from 'lucide-react';

const mockDocs: DocumentItem[] = [
  { id: '1', name: 'Assurance_Auto_2023.pdf', type: 'pdf', size: '2.4 MB', dateAdded: '10 Oct 2023', tags: ['Auto', 'Admin'] },
  { id: '2', name: 'Facture_Electricite.pdf', type: 'pdf', size: '1.1 MB', dateAdded: '05 Oct 2023', tags: ['Maison'] },
  { id: '3', name: 'Permis_Conduire.jpg', type: 'img', size: '4.5 MB', dateAdded: '01 Sept 2023', tags: ['Perso'] },
  { id: '4', name: 'Contrat_Travail.doc', type: 'doc', size: '0.8 MB', dateAdded: '12 Aug 2023', tags: ['Travail'] },
];

const Documents: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-semibold text-slate-900">Documents</h2>
           <p className="text-slate-500 text-sm">Coffre-fort numérique sécurisé.</p>
        </div>
        <div className="flex gap-2">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent-500 w-full md:w-64"
            />
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
        <div className="p-3 bg-slate-100 rounded-full text-slate-400 group-hover:bg-accent-50 group-hover:text-accent-500 transition-colors mb-3">
          <UploadCloud size={24} />
        </div>
        <h3 className="text-sm font-medium text-slate-900">Cliquez ou déposez un fichier</h3>
        <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG jusqu'à 10MB</p>
        <input type="file" className="hidden" />
      </div>

      {/* Recent Folders */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Dossiers récents</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Administratif', 'Maison', 'Santé', 'Véhicules'].map(folder => (
            <div key={folder} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow hover:border-accent-200 transition-all cursor-pointer flex items-center gap-3">
              <Folder className="text-accent-500" size={20} fill="currentColor" fillOpacity={0.2} />
              <span className="text-sm font-medium text-slate-700">{folder}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Files Grid */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Fichiers récents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockDocs.map((doc) => (
            <div key={doc.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className={`p-3 rounded-lg ${
                doc.type === 'pdf' ? 'bg-red-50 text-red-500' :
                doc.type === 'img' ? 'bg-purple-50 text-purple-500' : 'bg-blue-50 text-blue-500'
              }`}>
                {doc.type === 'pdf' ? <FileText size={20} /> : doc.type === 'img' ? <Image size={20} /> : <FileText size={20} />}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-slate-900 truncate" title={doc.name}>{doc.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{doc.size} • {doc.dateAdded}</p>
                <div className="flex gap-1 mt-2">
                  {doc.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
