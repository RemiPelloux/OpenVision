"use strict";
const n = require("./module-58334.js"), s = require("./module-64211.js"), o = require("./module-49727.js");
module.exports = function(e) {
    return "object" !== n(e) && (e = {
        content: e
    }), "object" !== n(e.data) && (e.data = {}), e.contents && null == e.content && (e.content = e.contents), o.define(e, "orig", o.toBuffer(e.content)), o.define(e, "language", e.language || ""), o.define(e, "matter", e.matter || ""), o.define(e, "stringify", function(t, r) {
        return r && r.language && (e.language = r.language), s(e, t, r);
    }), e.content = o.toString(e.content), e.isEmpty = !1, e.excerpt = "", e;
};
