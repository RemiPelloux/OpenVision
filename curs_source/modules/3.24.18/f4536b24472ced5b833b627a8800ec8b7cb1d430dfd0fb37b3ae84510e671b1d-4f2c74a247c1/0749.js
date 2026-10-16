function fa(e,t,r=!0){return e.filter(o=>o.parentId===t).flatMap(o=>[...!r||o.context?.open?[o]:[],...fa(e,o.id,r)])}
