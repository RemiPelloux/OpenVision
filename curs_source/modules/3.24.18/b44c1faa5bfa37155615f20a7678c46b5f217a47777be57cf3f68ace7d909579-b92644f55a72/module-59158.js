"use strict";
var n, s = require("./module-30129.js").Buffer, o = require("./module-45232.js"), i = require("./module-53710.js"), a = module.exports;
a.encodings = null, a.defaultCharUnicode = "�", a.defaultCharSingleByte = "?", a.encode = function(e, t, r) {
    e = "" + (e || "");
    var n = a.getEncoder(t, r), o = n.write(e), i = n.end();
    return i && i.length > 0 ? s.concat([
        o,
        i
    ]) : o;
}, a.decode = function(e, t, r) {
    "string" == typeof e && (a.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), a.skipDecodeWarning = !0), e = s.from("" + (e || ""), "binary"));
    var n = a.getDecoder(t, r), o = n.write(e), i = n.end();
    return i ? o + i : o;
}, a.encodingExists = function(e) {
    try {
        return a.getCodec(e), !0;
    } catch (e) {
        return !1;
    }
}, a.toEncoding = a.encode, a.fromEncoding = a.decode, a._codecDataCache = {
    __proto__: null
}, a.getCodec = function(e) {
    if (!a.encodings) {
        var t = require("./module-58999.js");
        a.encodings = {
            __proto__: null
        }, i(a.encodings, t);
    }
    for(var n = a._canonicalizeEncoding(e), s = {};;){
        var o = a._codecDataCache[n];
        if (o) return o;
        var c = a.encodings[n];
        switch(typeof c){
            case "string":
                n = c;
                break;
            case "object":
                for(var l in c)s[l] = c[l];
                s.encodingName || (s.encodingName = n), n = c.type;
                break;
            case "function":
                return s.encodingName || (s.encodingName = n), o = new c(s, a), a._codecDataCache[s.encodingName] = o, o;
            default:
                throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + n + "')");
        }
    }
}, a._canonicalizeEncoding = function(e) {
    return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
}, a.getEncoder = function(e, t) {
    var r = a.getCodec(e), n = new r.encoder(t, r);
    return r.bomAware && t && t.addBOM && (n = new o.PrependBOM(n, t)), n;
}, a.getDecoder = function(e, t) {
    var r = a.getCodec(e), n = new r.decoder(t, r);
    return !r.bomAware || t && !1 === t.stripBOM || (n = new o.StripBOM(n, t)), n;
}, a.enableStreamingAPI = function(e) {
    if (!a.supportsStreams) {
        var t = require("./module-65819.js")(e);
        a.IconvLiteEncoderStream = t.IconvLiteEncoderStream, a.IconvLiteDecoderStream = t.IconvLiteDecoderStream, a.encodeStream = function(e, t) {
            return new a.IconvLiteEncoderStream(a.getEncoder(e, t), t);
        }, a.decodeStream = function(e, t) {
            return new a.IconvLiteDecoderStream(a.getDecoder(e, t), t);
        }, a.supportsStreams = !0;
    }
};
try {
    n = require("./module-2203.js");
} catch (e) {}
n && n.Transform ? a.enableStreamingAPI(n) : a.encodeStream = a.decodeStream = function() {
    throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
};
