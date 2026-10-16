function wp(e,t){const r=getComputedStyle(e);return yp({...t,dark:e.closest("[data-theme]")?.getAttribute("data-theme")==="dark",read:a(n=>r.getPropertyValue(n),"read")})}
