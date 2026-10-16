"use strict";
const { webidl: t } = require("./module-8005.js"), s = Symbol("ProgressEvent state");
class o extends Event {
    constructor(e, a = {}){
        super(e = t.converters.DOMString(e), a = t.converters.ProgressEventInit(a ?? {})), this[s] = {
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        };
    }
    get lengthComputable() {
        return t.brandCheck(this, o), this[s].lengthComputable;
    }
    get loaded() {
        return t.brandCheck(this, o), this[s].loaded;
    }
    get total() {
        return t.brandCheck(this, o), this[s].total;
    }
}
t.converters.ProgressEventInit = t.dictionaryConverter([
    {
        key: "lengthComputable",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "loaded",
        converter: t.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "total",
        converter: t.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "bubbles",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: t.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: t.converters.boolean,
        defaultValue: !1
    }
]), module.exports = {
    ProgressEvent: o
};
