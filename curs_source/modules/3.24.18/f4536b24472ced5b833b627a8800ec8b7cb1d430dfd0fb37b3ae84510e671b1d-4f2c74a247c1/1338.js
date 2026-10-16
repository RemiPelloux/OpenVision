function e5(e){const t=[];return k8.forEach(r=>{const n=e.getValue(r);if(n!==void 0){const o=n.get(),i=r.startsWith("scale")?1:0;if(o===i)return;t.push([r,o]),n.set(i)}}),t}
