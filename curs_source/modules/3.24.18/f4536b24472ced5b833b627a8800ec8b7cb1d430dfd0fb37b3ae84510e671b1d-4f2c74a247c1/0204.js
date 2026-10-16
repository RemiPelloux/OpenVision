async function tw(e){if(typeof e=="string")return Yu(e);const t=Array.isArray(e)?e:[e];for(const r of t){const n=await r();if(n!=null&&n!=="")return Yu(n)}return Xu}
