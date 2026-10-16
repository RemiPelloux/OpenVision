"use strict";
const n = require("./module-48498.js"), s = new Set([
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
]), o = (e)=>{
    const t = n(e);
    return s.has(t && t.ext) ? t : null;
};
module.exports = o, module.exports.default = o, Object.defineProperty(o, "minimumBytes", {
    value: n.minimumBytes
});
