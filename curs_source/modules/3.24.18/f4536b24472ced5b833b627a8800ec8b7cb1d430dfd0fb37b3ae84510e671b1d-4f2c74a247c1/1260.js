function PI(e,t){const r=[],n={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const i=t.types[o],s=e.indexes[i][n[i]],c=e.values[s]??0;r[o]=c,n[i]++}return r}
