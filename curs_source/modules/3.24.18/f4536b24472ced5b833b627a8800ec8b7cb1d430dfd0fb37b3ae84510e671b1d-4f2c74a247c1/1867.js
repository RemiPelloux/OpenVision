function zR(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?nt(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?nt(r,e,n.max):Math.min(e,r)),e}
