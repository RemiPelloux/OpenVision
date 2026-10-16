function Wx(e,t){const r=Gl(e),n=new AbortController,o={passive:!0,...t,signal:n.signal};return[r,o,a(()=>n.abort(),"cancel")]}
