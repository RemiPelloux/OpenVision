function vd(e,t,r){const n=Array.prototype.slice.call(arguments,3),o=r(n);let i=t.get(o);return typeof i>"u"&&(i=e.apply(this,n),t.set(o,i)),i}
