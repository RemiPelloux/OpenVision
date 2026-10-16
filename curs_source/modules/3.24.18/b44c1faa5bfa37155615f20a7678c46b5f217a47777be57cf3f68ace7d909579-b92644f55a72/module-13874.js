"use strict";
require.d(exports, {
    _: ()=>i
});
var n = require("./module-95831.js");
function s(e) {
    throw new n.dM(`Private inference config: ${e}`);
}
const o = "default";
function i(e, t) {
    0 === e.models.length && s("catalog lists no models; at least one model is required");
    const r = new Set;
    for (const t of e.models)t.id === o && s(`model id "${o}" is reserved for Cursor's Auto router; rename the [model.${o}] table ([models] default = "<key>" names the default model)`), r.has(t.id) && s(`catalog lists model "${t.id}" more than once`), r.add(t.id);
    return r.has(e.defaultModelId) || s(`defaultModelId "${e.defaultModelId}" is not one of the catalog models (${[
        ...r
    ].join(", ")})`), {
        models: e.models.map((e)=>(0, n.yz)(e, t.get(e.id))),
        defaultModelId: e.defaultModelId
    };
}
