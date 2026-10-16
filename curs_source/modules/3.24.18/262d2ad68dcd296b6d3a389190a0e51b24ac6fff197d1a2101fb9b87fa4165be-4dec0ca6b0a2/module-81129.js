"use strict";
const yaml = __webpack_require__(45526), engines = exports = module.exports;
engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
}, engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(e, t) {
        const r = Object.assign({
            replacer: null,
            space: 2
        }, t);
        return JSON.stringify(e, r.replacer, r.space);
    }
}, engines.javascript = {
    parse: function parse(str, options, wrap) {
        try {
            return !1 !== wrap && (str = "(function() {\nreturn " + str.trim() + ";\n}());"), eval(str) || {};
        } catch (e) {
            if (!1 !== wrap && /(unexpected|identifier)/i.test(e.message)) return parse(str, options, !1);
            throw new SyntaxError(e);
        }
    },
    stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
    }
};
