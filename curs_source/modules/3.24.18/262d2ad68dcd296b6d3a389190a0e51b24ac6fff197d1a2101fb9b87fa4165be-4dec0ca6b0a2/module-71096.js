"use strict";
const n = require("./module-58334.js"), o = require("./module-64211.js"), s = require("./module-49727.js");
module.exports = function(e) {
    return "object" !== n(e) && (e = {
        content: e
    }), "object" !== n(e.data) && (e.data = {}), e.contents && null == e.content && (e.content = e.contents), s.define(e, "orig", s.toBuffer(e.content)), s.define(e, "language", e.language || ""), s.define(e, "matter", e.matter || ""), s.define(e, "stringify", function(t, r) {
        return r && r.language && (e.language = r.language), o(e, t, r);
    }), e.content = s.toString(e.content), e.isEmpty = !1, e.excerpt = "", e;
};
