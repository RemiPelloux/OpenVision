function lh(e,t){const{digits:r}=t;return r===null?e:e.replace(/[0-9]/g,a(function(o){const i=(o.charCodeAt(0)-48+9)%10;return r[i]??o},"toLocale"))}
