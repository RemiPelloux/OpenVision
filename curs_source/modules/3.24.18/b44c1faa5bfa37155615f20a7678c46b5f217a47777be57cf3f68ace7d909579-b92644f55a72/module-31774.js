"use strict";
require.d(exports, {
    g: ()=>i
});
var n = require("./module-56151.js"), s = require("./module-6688.js"), o = require("./module-83360.js");
function i(e, t) {
    return (r, i)=>{
        const a = function(e) {
            const t = e.runOptions.conversationId;
            return {
                conversationId: t,
                composerId: e.runOptions.conversationGroupId ?? t,
                attemptRequestId: e.attemptRequestId,
                originalRequestId: e.originalRequestId,
                modelId: e.requestedModel.modelId,
                requestedModel: e.requestedModel
            };
        }(i), c = (0, n.Am)(function(e, t, r, n) {
            return e.with(o.ku, r).with(o.A6, t).with(o.Fn, n).with(s.an, ()=>(0, s.qUv)(r));
        }(r, i.runOptions.conversationId, i.attemptRequestId, i.requestedModel), a), l = void 0 === e ? c : e(c, a);
        return (0, n.qo)(l, t);
    };
}
