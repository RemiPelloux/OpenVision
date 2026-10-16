function MO(e){const t=hb(e.next,e.interceptors),[r,n,o]=bb(e),i=Object.assign(Object.assign({},e.req),{message:fb(e.req.method.input,e.req.message),signal:r});return t(i).then(s=>(o(),s),n)}
