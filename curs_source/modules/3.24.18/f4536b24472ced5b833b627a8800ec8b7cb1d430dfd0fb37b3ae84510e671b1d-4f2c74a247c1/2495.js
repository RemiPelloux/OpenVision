function xM(e,t){return e.dependency.map(r=>{const n=t.getFile(r);if(!n)throw new Error(`Cannot find ${r}, imported by ${e.name}`);return n})}
