function PS(e,t,r){let n=!1,o;return Object.defineProperty(e,"signal",{enumerable:!0,get:a(()=>(o??=t(),n||(n=!0,o.aborted?r():o.addEventListener("abort",r,{once:!0})),o),"get")}),e}
