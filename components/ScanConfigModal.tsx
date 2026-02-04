import React, { useState } from 'react';
import { ScanConfig, Metagame } from '../types';
import { X, Globe, Youtube, FileText, Twitter, PlayCircle } from 'lucide-react';

interface ScanConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (config: ScanConfig) => void;
}

const METAGAMES: Metagame[] = ['OU', 'Ubers', 'NatDex Ubers', 'Monotype', 'LC', 'UU', 'VGC'];

const ScanConfigModal: React.FC<ScanConfigModalProps> = ({ isOpen, onClose, onStart }) => {
  const [config, setConfig] = useState<ScanConfig>({
    metagame: 'OU',
    dateRange: '30d',
    sources: { youtube: true, reddit: true, smogon: true, replays: true, twitter: false },
    aggressiveness: 50
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-xl bg-deep-800 border border-deep-700 shadow-2xl">
        <div className="flex items-center justify-between border-b border-deep-700 p-6">
          <h3 className="text-xl font-semibold text-white">Configure Deep Scan</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Target Metagame</label>
            <select value={config.metagame} onChange={(e) => setConfig({...config, metagame: e.target.value as Metagame})} className="w-full bg-deep-900 border border-deep-700 rounded-lg py-2.5 px-3 text-white">
              {METAGAMES.map(meta => <option key={meta} value={meta}>{meta}</option>)}
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <button onClick={() => onStart(config)} className="px-5 py-2.5 text-sm font-medium text-white bg-accent-600 rounded-lg hover:bg-accent-500">Start Extraction</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScanConfigModal;
