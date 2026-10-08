import fs from 'fs';
const out = {
  active: true,
  owner: "punitgarud",
  version: 2,
  lastUpdate: new Date().toISOString(),
  modules: [
    { id: 1, name: "RUGCHECK", enabled: true },
    { id: 2, name: "BUBBLEMAPS", enabled: true },
    { id: 3, name: "UNLOCKS", enabled: true },
    { id: 4, name: "LIQUIDATION_MAP", enabled: true },
    { id: 5, name: "JUPITER_DUST_SWEEP", enabled: true },
    { id: 6, name: "DEFI_YIELD_OPTIMIZER", enabled: true },
    { id: 7, name: "SEEKER_ECOSYSTEM_CORE", enabled: true },
    { id: 8, name: "GAMING_FLIPPER", enabled: false },
    { id: 9, name: "DAILY_CHALLENGE_RUNNER", enabled: true },
    { id: 10, name: "SOL_LP_COMPOUNDER", enabled: true },
    { id: 11, name: "SMET_ACCUMULATOR", enabled: true },
    { id: 12, name: "SEEKER_AUDITOR", enabled: true }
  ],
  top4: [
    { module: "JUPITER_DUST_SWEEP", mint: "So11111111111111111111111111111111111111112" },
    { module: "DEFI_YIELD_OPTIMIZER", mint: "So11111111111111111111111111111111111111112" },
    { module: "SEEKER_ECOSYSTEM_CORE", mint: "So11111111111111111111111111111111111111112" },
    { module: "DAILY_CHALLENGE_RUNNER", mint: "So11111111111111111111111111111111111111112" }
  ],
  dailyTasks: ["Seeker Verify", "Wilderness", "Loot60", "Grind XI"]
};
fs.writeFileSync("./active_modules.json", JSON.stringify(out, null, 2));
console.log("Brain V2 OK");