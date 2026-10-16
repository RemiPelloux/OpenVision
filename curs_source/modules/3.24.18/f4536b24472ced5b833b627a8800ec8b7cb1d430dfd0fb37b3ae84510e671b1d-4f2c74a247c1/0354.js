async function pS(e){try{const{loadStripe:t}=await Promise.resolve().then(()=>(dS(),lS));return await t(e)}catch(t){return console.error("[commerce-ui] Stripe.js failed to load",t),null}}
