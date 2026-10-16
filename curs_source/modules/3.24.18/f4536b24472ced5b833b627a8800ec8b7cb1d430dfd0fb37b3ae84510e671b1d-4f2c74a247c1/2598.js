function e3(e){const t=bs(e.scalar,e.utf8Validation,e.longAsString),r=e.localName;if(e.oneof){const n=e.oneof.localName;return(o,i)=>{o[n]={case:r,value:t(i)}}}return(n,o)=>{n[r]=t(o)}}
