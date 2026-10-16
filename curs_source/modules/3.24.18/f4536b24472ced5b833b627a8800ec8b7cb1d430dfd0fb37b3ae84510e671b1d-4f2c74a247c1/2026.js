function _N(e){if(!e)return;const t=e.parentElement;if(t&&t.tagName==="LABEL")return t;const r=e.id;if(r){const o=e.nextElementSibling;if(o&&o.htmlFor===r)return o}const n=e.labels;return n&&n[0]}
