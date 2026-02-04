import React, { useState } from 'react';
import { Team } from '../types';
import { Copy, Zap, ShieldCheck } from 'lucide-react';

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
  const [copied, setCopied] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(team.importText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-deep-800 rounded-xl border border-deep-700 overflow-hidden shadow-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">{team.name}</h3>
        <div className="flex items-center gap-1 text-yellow-400 font-black font-mono"><Zap size={20} />{team.brokenScore}</div>
      </div>
      <div className="w-full bg-deep-900 rounded-full h-1.5 mb-4"><div className="bg-accent-600 h-1.5 rounded-full" style={{width: `${team.confidence}%`}}></div></div>
      <p className="text-sm text-gray-300 flex-1">{team.explanation}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setShowImport(!showImport)} className="flex-1 px-3 py-2 bg-deep-700 text-white rounded-lg">Import</button>
        <button onClick={handleCopy} className="px-3 py-2 bg-accent-600 text-white rounded-lg">{copied ? 'Copied' : <Copy size={16} />}</button>
      </div>
      {showImport && (
        <div className="absolute inset-0 bg-deep-900 z-10 flex flex-col p-4 animate-in fade-in">
           <div className="flex justify-between mb-2"><span className="text-white font-bold">Showdown Import</span><button onClick={() => setShowImport(false)} className="text-gray-500">Close</button></div>
           <textarea readOnly className="flex-1 bg-deep-800 text-gray-300 font-mono text-xs p-2 rounded" value={team.importText} />
        </div>
      )}
    </div>
  );
};
export default TeamCard;
