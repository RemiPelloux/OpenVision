function yx(e,t,r,n=0,o=1){const i=Array.from(e).sort((m,u)=>m.sortNodePosition(u)).indexOf(t),s=e.size,c=(s-1)*n;return typeof r=="function"?r(i,s):o===1?i*n:c-i*n}
