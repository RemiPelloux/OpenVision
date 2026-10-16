function ck(){const e=new Map;return{emit(t,r){e.get(t)?.forEach(n=>n(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){e.get(t)?.delete(r)}}}
