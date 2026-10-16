function sa(e){const t=TS.get(e);if(t!==void 0)return t;const r=new Intl.NumberFormat("en-US",{style:"currency",currency:e}).resolvedOptions().maximumFractionDigits??2;return TS.set(e,r),r}
