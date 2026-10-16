function Rl(e,t=50,r=$h,n){let o=0,i=e.next(o);for(n?.push(i.value);!i.done&&o<r;)o+=t,i=e.next(o),n?.push(i.value);return o>=r?1/0:o}
