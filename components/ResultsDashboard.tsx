import React from 'react';
import { Team, ScanConfig } from '../types';
import TeamCard from './TeamCard';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface ResultsDashboardProps { teams: Team[]; config: ScanConfig; onRestart: () => void; }

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ teams, config, onRestart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-8">
        <div>
          <button onClick={onRestart} className="text-gray-400 flex items-center gap-1 mb-2"><ArrowLeft size={16} /> New Scan</button>
          <h1 className="text-3xl font-bold text-white">Results: <span className="text-accent-500">{config.metagame}</span></h1>
        </div>
        <button onClick={onRestart} className="bg-accent-600 px-4 py-2 rounded-lg text-white flex items-center gap-2"><RefreshCw size={16} /> Re-Scan</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => <TeamCard key={team.id} team={team} />)}
      </div>
    </div>
  );
};
export default ResultsDashboard;
