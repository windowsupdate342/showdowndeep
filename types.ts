export type Metagame = 'OU' | 'Ubers' | 'NatDex Ubers' | 'Monotype' | 'LC' | 'UU' | 'VGC';

export interface ScanConfig {
  metagame: Metagame;
  dateRange: '7d' | '30d' | '90d' | 'all';
  sources: {
    youtube: boolean;
    reddit: boolean;
    smogon: boolean;
    replays: boolean;
    twitter: boolean;
  };
  aggressiveness: number;
}

export interface Pokemon {
  name: string;
  item?: string;
  ability: string;
  nature: string;
  evs: Record<string, number>;
  moves: string[];
  teraType?: string;
}

export interface Team {
  id: string;
  name: string;
  roster: Pokemon[];
  importText: string;
  confidence: number;
  brokenScore: number;
  explanation: string;
  counterplay: string[];
  sources: {
    type: 'YouTube' | 'Reddit' | 'Smogon' | 'Replay' | 'Twitter';
    title: string;
    url: string;
    excerpt?: string;
  }[];
  tags: string[];
}

export type AppView = 'LANDING' | 'SCANNING' | 'RESULTS' | 'ADMIN';

export interface ScanStep {
  id: number;
  label: string;
  status: 'pending' | 'active' | 'completed' | 'error';
  details?: string;
}
