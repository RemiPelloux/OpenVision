function PP(e,t){const r=JSON.stringify([e,t]);let n=NP.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),NP.set(r,n)),n}
