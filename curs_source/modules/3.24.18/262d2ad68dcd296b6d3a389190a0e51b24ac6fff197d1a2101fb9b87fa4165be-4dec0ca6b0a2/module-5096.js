"use strict";
const n = require("./module-48498.js"), o = new Set([
    "jpg",
    "png",
    "gif",
    "webp",
    "flif",
    "cr2",
    "tif",
    "bmp",
    "jxr",
    "psd",
    "ico",
    "bpg",
    "jp2",
    "jpm",
    "jpx",
    "heic",
    "cur",
    "dcm"
]), s = (e)=>{
    const t = n(e);
    return o.has(t && t.ext) ? t : null;
};
module.exports = s, module.exports.default = s, Object.defineProperty(s, "minimumBytes", {
    value: n.minimumBytes
});
