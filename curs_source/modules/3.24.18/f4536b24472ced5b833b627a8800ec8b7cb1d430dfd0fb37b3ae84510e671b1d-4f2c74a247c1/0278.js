async function O1(e,t){const r=Array.isArray(t)?t:[t],n=await Promise.all(r.map(o=>typeof o=="function"?o(e):Promise.resolve(o)));return Object.assign({},...n)}
