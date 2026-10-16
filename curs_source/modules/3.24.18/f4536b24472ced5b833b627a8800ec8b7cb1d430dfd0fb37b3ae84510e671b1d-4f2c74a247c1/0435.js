function OS(e,t,r){const n=e.promise?.then(t).catch(o=>r?.(o)===!1?Promise.reject(o):Promise.reject(new Error("redacted")));return n?.catch(Pt),n}
