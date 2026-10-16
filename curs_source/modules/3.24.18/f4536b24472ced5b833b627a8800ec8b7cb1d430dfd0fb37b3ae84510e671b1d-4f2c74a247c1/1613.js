function am(e,t,r){const n=e.style,o=t?.style,i={};if(!n)return i;for(const s in n)(Ct(n[s])||o&&Ct(o[s])||ig(s,e)||r?.getValue(s)?.liveStyle!==void 0)&&(i[s]=n[s]);return i}
