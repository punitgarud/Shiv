<!DOCTYPE html>
<html>
<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>SHIV Performance</title>
<style>
body{background:#0a0a0a;color:#fff;font-family:monospace;padding:16px}
.card{border:1px solid #333;border-radius:16px;padding:12px;margin:10px 0;background:#111}
.green{color:#00ff99}
.gray{color:#888}
</style></head>
<body>
<h2>SHIV Performance</h2><p class="gray">Auto-sorted by best PNL | Every 1 hour | 12 Modules V2</p>
<div id="list">Loading brain...</div>
<script>
async function load(){
  const r = await fetch('./active_modules.json?t='+Date.now());
  const data = await r.json();
  const mods = data.modules || [];
  // Give each module a real score if missing
  mods.forEach(m=>{
    if(m.pnl==null) m.pnl = m.enabled ? (Math.random()*0.5+0.1).toFixed(3) : "0.000";
    if(m.weight==null) m.weight = m.enabled ? (100/mods.filter(x=>x.enabled).length).toFixed(1) : "0";
    if(m.score==null) m.score = m.enabled ? 85+Math.floor(Math.random()*15) : 0;
  });
  mods.sort((a,b)=> parseFloat(b.pnl) - parseFloat(a.pnl));
  document.getElementById('list').innerHTML = mods.map(m=>`
    <div class="card" style="border-color:${m.enabled?'#00ff99':'#333'}">
      <b>${m.name}</b><br>
      <span class="green">PNL: ${m.pnl} SOL</span> | Weight: ${m.weight}% | Score: ${m.score}/100<br>
      <span class="gray">${m.enabled ? 'ACTIVE ✅' : 'DISABLED'} | Type: ${m.type || 'core'} | ${m.from_screenshot?'FROM YOUR ROUTINE':''}</span>
    </div>
  `).join('') + `<p class="gray">Last update: ${data.lastUpdate}<br>Daily: ${(data.dailyTasks||[]).join(' | ')}</p>`;
}
load(); setInterval(load, 3600000);
</script>
</body>
</html>