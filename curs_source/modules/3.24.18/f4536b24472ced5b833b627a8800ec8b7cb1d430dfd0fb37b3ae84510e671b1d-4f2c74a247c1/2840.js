function ub(e){const t=new Headers,r=new TextDecoder().decode(e).split(`\r
`);for(const n of r){if(n==="")continue;const o=n.indexOf(":");if(o>0){const i=n.substring(0,o).trim(),s=n.substring(o+1).trim();t.append(i,s)}}return t}
