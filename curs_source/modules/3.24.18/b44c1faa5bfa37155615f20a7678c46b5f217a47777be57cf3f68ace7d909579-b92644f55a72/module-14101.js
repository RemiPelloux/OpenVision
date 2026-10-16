"use strict";
require.d(exports, {
    XI: ()=>o,
    wH: ()=>s,
    xc: ()=>n
});
class n {
    constructor(e = 0){
        this.nextId = e;
    }
    next() {
        return this.nextId++;
    }
    peekNext() {
        return this.nextId;
    }
    observe(e) {
        Number.isSafeInteger(e) && e >= this.nextId && (this.nextId = e + 1);
    }
}
function s(e, t = new n) {
    return i(e, (e)=>{
        e.id = t.next();
    });
}
function o(e, t) {
    return i(e, (e)=>{
        t.observe(e.id);
    });
}
function i(e, t) {
    const { enqueuePostTurnEndedWork: r, flushPostTurnEndedWork: n } = e;
    return {
        sendUpdate: (t, r)=>e.sendUpdate(t, r),
        query: (r, n)=>(t(n), e.query(r, n)),
        enqueuePostTurnEndedWork: void 0 === r ? void 0 : (t)=>r.call(e, t),
        flushPostTurnEndedWork: void 0 === n ? void 0 : (t)=>n.call(e, t)
    };
}
