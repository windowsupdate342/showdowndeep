import { Team } from './types';

export const MOCK_TEAMS: Team[] = [
  {
    id: 't1',
    name: "Standard Gliscor Balance",
    confidence: 94,
    brokenScore: 78,
    explanation: "This team leverages the Gliscor + Kingambit defensive core which has seen a 15% usage spike in top 500 ladder games this week.",
    counterplay: ["Ice Beam coverage on fast special attackers", "Ogerpon-Wellspring"],
    sources: [{ type: 'Smogon', title: 'OU Viability Rankings', url: '#' }],
    tags: ['Balance', 'Meta-Standard'],
    importText: "Gliscor @ Toxic Orb\nAbility: Poison Heal\nEVs: 244 HP / 252 Def / 12 SpD\nImpish Nature\n- Earthquake\n- Spikes\n- Protect\n- Toxic",
    roster: []
  },
  {
    id: 't2',
    name: "Broken Rain Offense (Archaludon)",
    confidence: 88,
    brokenScore: 92,
    explanation: "Identified as 'broken' due to Archaludon's Stamina ability combined with Electro Shot in Rain.",
    counterplay: ["Change the weather", "Special wallbreakers with Ground coverage"],
    sources: [{ type: 'Replay', title: 'SPL Week 3', url: '#' }],
    tags: ['Weather', 'Hyper Offense'],
    importText: "Pelipper @ Damp Rock\nAbility: Drizzle\nEVs: 248 HP / 252 Def / 8 SpD\nBold Nature\n- Surf\n- Hurricane\n- Roost\n- U-turn",
    roster: []
  },
  {
    id: 't3',
    name: "Revival Blessing Loop",
    confidence: 65,
    brokenScore: 85,
    explanation: "Abuses Pawmot's Revival Blessing with Leppa Berry mechanics.",
    counterplay: ["Taunt users", "Knock Off"],
    sources: [{ type: 'YouTube', title: 'Infinite Revives', url: '#' }],
    tags: ['Gimmick', 'Stall'],
    importText: "Pawmot @ Leppa Berry\nAbility: Natural Cure\nEVs: 252 HP / 4 Atk / 252 Spe\nJolly Nature\n- Revival Blessing",
    roster: []
  },
  {
    id: 't4',
    name: "Booster Energy Spam",
    confidence: 91,
    brokenScore: 70,
    explanation: "High-tempo Hyper Offense stacking multiple Paradox Pokemon with Booster Energy.",
    counterplay: ["Priority moves", "Unaware walls"],
    sources: [{ type: 'Twitter', title: 'Top 10 Ladder', url: '#' }],
    tags: ['Hyper Offense'],
    importText: "Iron Valiant @ Booster Energy\nAbility: Quark Drive\nEVs: 4 Atk / 252 SpA / 252 Spe\nNaive Nature\n- Moonblast",
    roster: []
  },
  {
    id: 't5',
    name: "Psy-Spam Terrain",
    confidence: 76,
    brokenScore: 60,
    explanation: "Classic Psychic Terrain abuse utilizing Indeedee-F.",
    counterplay: ["Dark types", "Rillaboom"],
    sources: [{ type: 'Smogon', title: 'RMT', url: '#' }],
    tags: ['Terrain'],
    importText: "Indeedee-F @ Psychic Seed\nAbility: Psychic Surge\nEVs: 252 HP / 252 Def / 4 SpD\nBold Nature\n- Expanding Force",
    roster: []
  }
];
