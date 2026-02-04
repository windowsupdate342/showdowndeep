import React, { useEffect, useState } from 'react';
import { ScanStep } from '../types';
import { CheckCircle2, Loader2, AlertCircle, Terminal } from 'lucide-react';

const STEPS: ScanStep[] = [
  { id: 1, label: 'Initializing crawlers & rotating proxies', status: 'pending' },
  { id: 2, label: 'Querying YouTube Data API v3', status: 'pending' },
  { id: 3, label: 'Running ASR (Whisper)', status: 'pending' },
  { id: 4, label: 'Extracting candidate sets', status: 'pending' },
  { id: 5, label: 'Running Brokenness Heuristics Model', status: 'pending' },
  { id: 6, label: 'Synthesizing final team reports', status: 'pending' },
];

const ScanProgress: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [steps, setSteps] = useState<ScanStep[]>(STEPS);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      const stepIndex = currentStep;
      setSteps(prev => {
        const newSteps = prev.map(s => ({...s}));
        if (stepIndex > 0 && newSteps[stepIndex - 1]) newSteps[stepIndex - 1].status = 'completed';
        if (stepIndex < newSteps.length && newSteps[stepIndex]) newSteps[stepIndex].status = 'active';
        return newSteps;
      });
      if (stepIndex < STEPS.length) setLogs(prev => [...prev.slice(-6), `[LOG] ${STEPS[stepIndex].label}...`]);
      currentStep++;
      if (currentStep > STEPS.length) {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-deep-800 rounded-xl border border-deep-700 overflow-hidden shadow-2xl p-8 space-y-6">
        {steps.map(step => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="w-8 flex justify-center">
              {step.status === 'completed' ? <CheckCircle2 className="text-green-500 h-6 w-6" /> : step.status === 'active' ? <Loader2 className="text-accent-500 h-6 w-6 animate-spin" /> : <div className="w-2 h-2 rounded-full bg-deep-600" />}
            </div>
            <div className="text-gray-300">{step.label}</div>
          </div>
        ))}
        <div className="bg-black/50 p-4 border-t border-deep-700 font-mono text-xs text-gray-400 h-32">
          {logs.map((log, i) => <div key={i}>{log}</div>)}
        </div>
      </div>
    </div>
  );
};
export default ScanProgress;
