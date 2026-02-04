import { Team } from '../types';
import { MOCK_TEAMS } from '../constants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ApiService = {
  startScan: async (): Promise<string> => {
    await delay(800);
    return 'job-' + Math.random().toString(36).substr(2, 9);
  },
  getResults: async (jobId: string): Promise<Team[]> => {
    await delay(500);
    return [...MOCK_TEAMS].sort(() => Math.random() - 0.5);
  },
  submitManualReview: async (teamId: string, feedback: string) => {
    await delay(500);
    return true;
  }
};
