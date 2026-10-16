function CC(e,t){if(e===t)return!0;const[r,n]=e.length<=t.length?[e,t]:[t,e];let o=0;for(;o<r.length&&r[o]===n[o];)o+=1;const i=n.length-r.length;return n.slice(o+i)===r.slice(o)}
