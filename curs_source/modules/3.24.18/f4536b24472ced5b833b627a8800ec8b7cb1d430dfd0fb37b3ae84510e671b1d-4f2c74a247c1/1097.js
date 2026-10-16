function pl(e,t){const{digits:r}=t;return r===null?e:e.replace(/./gu,a(function(o){const i=r.indexOf(o);return i===-1?o:String((i+1)%10)},"toAscii"))}
