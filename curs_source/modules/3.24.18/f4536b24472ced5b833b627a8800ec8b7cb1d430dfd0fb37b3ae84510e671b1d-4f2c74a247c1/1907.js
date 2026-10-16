function ZR({root:e,...t}){const r=e||document;s0.has(r)||s0.set(r,{});const n=s0.get(r),o=JSON.stringify(t);return n[o]||(n[o]=new IntersectionObserver(mz,{root:e,...t})),n[o]}
