function $c(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}
