// Shiv Brain V2 - FIXED - 12 Modules
import fs from 'fs';

const OUTPUT = './active_modules.json';

async function run() {
  console.log("SHIV Brain V2 starting");
  const out = {
    active: true,
    owner: "punitgarud",
    version: 2,
    lastUpdate: new Date().toISOString(),
    modules: [],
    top4: [],
    dailyTasks: []
  };

  // Core 8 safety modules
  out.modules.push({ id: 1, name: "RUGCHECK", type: "safety", enabled: true, status: "ok" });
  out.modules.push({ id: 2, name: "BUBBLEMAPS", type: "safety", enabled: true, status: "ok" });
  out.modules.push({ id: 3, name: "UNLOCKS", type: "risk", enabled: true, status: "ok" });
  out.modules.push({ id: 4, name: "LIQUIDATION_MAP", type: "signal", enabled: true, status: "ok" });

  // Your routine from screenshot - FIXED no @ symbols
  out.modules.push({
    id: 5,
    name: "JUPITER_DUST_SWEEP",
    type: "swap",
    source: "SOLLARE_JUPITER",
    action: "swap_dust_to_SLP_MET",
    enabled: true,
    from_screenshot: true
  });

  out.modules.push({
    id: 6,
    name: "DEFI_YIELD_OPTIMIZER",
    type: "defi",
    apps: ["Tubera", "Titan", "Sanctum", "Jupiter"],
    bestApr: "12.4pct",
    bestApp: "Titan",
    enabled: true,
    from_screenshot: true
  });

  out.modules.push({
    id: 7,
    name: "SEEKER_ECOSYSTEM_CORE",
    type: "seeker",
    apps: ["Seeker_Verify", "Seeker_Oracle", "Seeker_Grind", "Seeker_Envelope", "GhostO", "NCMAD"],
    task: "daily_validation_pending",
    enabled: true,
    from_screenshot: true
  });

  out.modules.push({ id: 8, name: "GAMING_FLIPPER", type: "gaming", apps: ["mattlef", "bakenland", "Roxantics"], enabled: false });
  out.modules.push({ id: 9, name: "DAILY_CHALLENGE_RUNNER", type: "daily", apps: ["wilderness", "loot60", "seeker_xi"], enabled: true, from_screenshot: true });
  out.modules.push({ id: 10, name: "SOL_LP_COMPOUNDER", type: "lp", pair: "S_LP", enabled: true });
  out.modules.push({ id: 11, name: "SMET_ACCUMULATOR", type: "accumulation", token: "MET", enabled: true });
  out.modules.push({ id: 12, name: "SEEKER_AUDITOR", type: "reputation", enabled: true });

  out.dailyTasks = [
    "Seeker Verify - Daily Validation",
    "Seeker Grind XI - spin wheel",
    "Wilderness - Daily claim",
    "Loot60 - Complete 1"
  ];

  out.top4 = out.modules.filter(m => m.enabled).slice(0, 4).map(m =>