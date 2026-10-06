import { finalScore } from './scoring.js';
const watchlist = [
  {mint:'So11111111111111111111111111111111111111112', symbol:'SOL', godId:'mickey', baseScore:92},
  {mint:'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', symbol:'BONK', godId:'sniper', baseScore:85},
];
async function rugcheck(m){return fetch(`https://api.rugcheck.xyz/v1/tokens/${m}/report`).then(r=>r.json()).catch(()=>({score_normalised:50}))}
async function bubblemaps(m){return fetch(`https://api-legacy.bubblemaps.io/map-metadata?chain=sol&token=${m}`).then(r=>r.json()).then(j=>({centralization:j.centralization_score||40})).catch(()=>({centralization:40}))}
async function unlocks(m){return fetch(`https://api.llama.fi/emissions/${m}`).then(r=>r.json()).then(j=>({daysUntil:999,pct:0,safety:70})).catch(()=>({daysUntil:999,pct:0,safety:70}))}
async function liq(){return {bias:'neutral', risk:'safe'}}
async function run(){
  const l = await liq();
  const out=[];
  for(const s of watchlist){
    const [rug,bub,unl] = await Promise.all([rugcheck(s.mint), bubblemaps(s.mint), unlocks(s.mint)]);
    const sc = await finalScore(s,{rug,bubble:bub,unlock:unl,liq:l});
    if(sc) out.push(sc);
  }
  console.log(JSON.stringify({timestamp:new Date().toISOString(), top4:out.sort((a,b)=>b.finalScore-a.finalScore).slice(0,4)},null,2));
}
run();
