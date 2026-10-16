function qm(e,t,...r){if(r.length==0)return e.enums[t];const n=r.pop();return r.reduce((o,i)=>o.nestedMessages[i],e.messages[t]).nestedEnums[n]}
