function C3(e,t){if(e===void 0)return[];if(t.fieldKind==="enum"||t.fieldKind==="scalar"){for(let r=e.length-1;r>=0;--r)if(e[r].no==t.number)return[e[r]];return[]}return e.filter(r=>r.no===t.number)}
