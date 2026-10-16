function rt(e,t){if(!e||!t)return!1;const r=t.getRootNode?.();if(e.contains(t))return!0;if(r&&uo(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}
