function TN({controlled:e,default:t,name:r,state:n="value"}){const{current:o}=ju.useRef(e!==void 0),[i,s]=ju.useState(t),c=o&&e!==void 0?e:i,l=ju.useCallback(m=>{o||s(m)},[]);return[c,l]}
