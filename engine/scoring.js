export async function finalScore(signal, filters){
  const {rug, bubble, unlock, liq} = filters;
  if(rug.score_normalised < 50) return null;
  if(rug.mintAuthority || rug.freezeAuthority) return null;
  if(bubble.centralization > 70) return null;
  if(unlock.daysUntil < 2 && unlock.pct > 2) return null;
  let score = signal.baseScore*0.4 + (rug.score_normalised||50)*0.2 + (100-bubble.centralization)*0.2 + unlock.safety*0.2;
  if(signal.godId==='momentum' && liq.bias==='short_squeeze') score*=1.15;
  if(liq.risk==='long_squeeze') score*=0.5;
  return {...signal, finalScore:Math.round(score)};
}
