function c1(e){return e.length<2?e:e.reduce((t,r)=>{const n=t[t.length-1];return!n||n.type!==0||r.type!==0?t.push(r):n.value+=r.value,t},[])}
