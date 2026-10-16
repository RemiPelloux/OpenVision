function rw(){const e=[],t=Object.create(null);let r;return t.get=(n,o)=>(r?.revoke?.(),o===nd?e:(e.push(o),r=Proxy.revocable(n,t),r.proxy)),Proxy.revocable(Object.create(null),t).proxy}
