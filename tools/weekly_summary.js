#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const csvPath=path.resolve(__dirname,'../memory/model-usage.csv');
if(!fs.existsSync(csvPath)){console.error('No CSV found'); process.exit(1);} 
const rows=fs.readFileSync(csvPath,'utf8').trim().split('\n').slice(1).filter(Boolean).map(r=>r.split(','));
const summary={};
let total=0;
for(const r of rows){
  const model=r[2];
  const cost=parseFloat(r[5])||0;
  summary[model]=(summary[model]||0)+cost;
  total+=cost;
}
const outLines=['# Weekly model usage summary','\n'];
for(const m of Object.keys(summary)) outLines.push(`- ${m}: $${summary[m].toFixed(4)}`);
outLines.push(`\n- TOTAL: $${total.toFixed(4)}`);
const outPath=path.resolve(__dirname,'../memory/weekly-cost-summary-'+new Date().toISOString().slice(0,10)+'.md');
fs.writeFileSync(outPath,outLines.join('\n'));
console.log('Summary written to', outPath);
