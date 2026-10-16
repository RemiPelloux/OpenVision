function QO(e){return t=>async r=>(r.header.set("Authorization",`Bearer ${await e()}`),t(r))}
