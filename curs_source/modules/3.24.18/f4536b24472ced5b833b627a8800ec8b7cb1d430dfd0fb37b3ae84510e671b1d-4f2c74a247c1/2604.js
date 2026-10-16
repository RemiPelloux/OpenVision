function Fv(e){const t=Jm(e.message);if(e.delimitedEncoding){const r=e.number;return(n,o,i)=>t.readGroup(n,o,i,r)}return(r,n,o)=>t.read(r,n,o,n.uint32())}
