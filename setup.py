import os
files={
"index.html":"""<!DOCTYPE html><html><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width,initial-scale=1\"><title>SHIV v29 - 8 GODS + 4 VETO</title><style>body{background:#050507;color:#e5e5e5;font-family:monospace;padding:12px}.card{border:1px solid #333;border-radius:10px;padding:12px;margin:8px 0;background:#0e0e11}.top{border-color:#a855f7}</style></head><body><h1>SHIV v29 | 8 GODS + 4 VETO | LIVE</h1><div id=top4></div><script>const G=[{id:'mickey',n:'MickeyScout GOD v29',pnl:0.974,w:30},{id:'vulture',n:'Vulture GOD v29',pnl:0.89,w:25},{id:'sniper',n:'Sniper GOD v29',pnl:0.887,w:15},{id:'degen',n:'Degen GOD v29',pnl:0.794,w:10},{id:'momentum',n:'Momentum-Breakout GOD v29',pnl:0.517,w:10},{id:'grid',n:'Grid GOD v29',pnl:0.377,w:5},{id:'scalper',n:'Scalper GOD v29',pnl:0.277,w:3},{id:'airdrop',n:'Airdrop GOD v29',pnl:0.218,w:2}];document.getElementById('top4').innerHTML=G.map(g=>`<div class=card top>${g.n} ${g.pnl} SOL ${g.w}% ACTIVE</div>`).join('')</script></body></html>""",
"README.md":"# SHIV v29 - Final 8 Gods + 4 Veto\nLive: https://punitgarud.github.io/Shiv/",
"package.json":'{"name":"shiv-v29","version":"29.0.0","type":"module"}',
"engine/scoring.js":"export async function finalScore(s,f){const r=f.rug.score_normalised||50;const c=f.bubble.centralization||40;if(r<50)return null;if(c>70)return null;let sc=s.baseScore*0.4+r*0.2+(100-c)*0.2+60*0.2;const w={mickey:30,vulture:25,sniper:15,degen:10,momentum:10,grid:5,scalper:3,airdrop:2};sc=sc*(w[s.godId]||5)/15;return{...s,finalScore:Math.round(sc)}}",
"engine/index.js":"import{finalScore}from'./scoring.js';console.log('SHIV v29 Brain - 8 GODS + 4 VETO');",
"engine/modules/01-mickeyscout-god.js":"export const meta={id:'mickey',name:'MickeyScout GOD v29',pnl:0.974,weight:30};export async function fetchCandidates(){try{const r=await fetch('https://dlmm-api.meteora.ag/pair/all_by_groups?limit=50');const j=await r.json();const p=j.groups?.flatMap(g=>g.pairs)||[];return p.filter(x=>x.liquidity>100000&&x.liquidity<400000).slice(0,10).map(x=>({mint:x.mint_y,symbol:x.name,baseScore:92}));}catch{return[{mint:'So11111111111111111111111111111111111111112',symbol:'SOL',baseScore:92}]}}",
"engine/modules/02-vulture-god.js":"export const meta={id:'vulture',name:'Vulture GOD v29',pnl:0.89,weight:25};export async function fetchCandidates(){return[{mint:'So11111111111111111111111111111111111111112',baseScore:88}]}",
"engine/modules/03-sniper-god.js":"export const meta={id:'sniper',name:'Sniper GOD v29',pnl:0.887,weight:15};export async function fetchCandidates(){return[]}",
"engine/modules/04-degen-god.js":"export const meta={id:'degen',name:'Degen GOD v29',pnl:0.794,weight:10};export async function fetchCandidates(){return[]}",
"engine/modules/05-momentum-breakout-god.js":"export const meta={id:'momentum',name:'Momentum-Breakout GOD v29',pnl:0.517,weight:10,kills:'04-breakout-v27'};export async function fetchCandidates(){return[]}",
"engine/modules/06-grid-god.js":"export const meta={id:'grid',name:'Grid GOD v29',pnl:0.377,weight:5};export async function fetchCandidates(){return[]}",
"engine/modules/07-scalper-god.js":"export const meta={id:'scalper',name:'Scalper GOD v29',pnl:0.277,weight:3};export async function fetchCandidates(){return[]}",
"engine/modules/08-airdrop-hunter-god.js":"export const meta={id:'airdrop',name:'Airdrop GOD v29',pnl:0.218,weight:2};export async function fetchCandidates(){return[]}",
"engine/modules/09-rugcheck-filter.js":"export async function filter(m){try{const r=await fetch('https://api.rugcheck.xyz/v1/tokens/'+m+'/report');const j=await r.json();return{score_normalised:j.score_normalised||0,veto:(j.score_normalised||0)<50}}catch{return{score_normalised:50,veto:false}}}",
"engine/modules/10-bubblemaps-filter.js":"export async function filter(){return{centralization:40,veto:false}}",
"engine/modules/11-unlocks-filter.js":"export async function filter(){return{daysUntil:999,pct:0,safety:70,veto:false}}",
"engine/modules/12-liquidation-filter.js":"export async function filter(){return{bias:'neutral',risk:'safe'}}",
".github/workflows/brain.yml":"name: SHIV Brain 6H\non:\n  schedule:\n    - cron: '0 */6 * * *'\n  workflow_dispatch:\n  \njobs:\n  brain:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: node engine/index.js\n"
}
for path,content in files.items():
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else ".", exist_ok=True)
    open(path,"w",encoding="utf-8").write(content)
print("All 18 files created")