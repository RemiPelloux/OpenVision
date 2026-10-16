function gM(e,t){const r=vM(e)+"_";for(const n of t){if(!n.name.toLowerCase().startsWith(r))return;const o=n.name.substring(r.length);if(o.length==0||/^\d/.test(o))return}return r}
