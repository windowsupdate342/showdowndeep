import React from 'react';
import { Activity, Server, AlertOctagon } from 'lucide-react';

const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">System Health</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-deep-800 p-6 rounded-xl border border-deep-700"><p className="text-gray-500">CRAWLER STATUS</p><p className="text-xl font-bold text-green-500 flex items-center gap-2"><Activity /> Healthy</p></div>
        <div className="bg-deep-800 p-6 rounded-xl border border-deep-700"><p className="text-gray-500">API QUOTA</p><p className="text-xl font-bold text-accent-500 flex items-center gap-2"><AlertOctagon /> 14% Used</p></div>
      </div>
    </div>
  );
};
export default AdminPanel;
