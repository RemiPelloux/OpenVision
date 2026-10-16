"use strict";
const { webidl: a } = require("./module-8005.js"), s = Symbol("ProgressEvent state");
class o extends Event {
    constructor(e, n = {}){
        super(e = a.converters.DOMString(e), n = a.converters.ProgressEventInit(n ?? {})), this[s] = {
            lengthComputable: n.lengthComputable,
            loaded: n.loaded,
            total: n.total
        };
    }
    get lengthComputable() {
        return a.brandCheck(this, o), this[s].lengthComputable;
    }
    get loaded() {
        return a.brandCheck(this, o), this[s].loaded;
    }
    get total() {
        return a.brandCheck(this, o), this[s].total;
    }
}
a.converters.ProgressEventInit = a.dictionaryConverter([
    {
        key: "lengthComputable",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "loaded",
        converter: a.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "total",
        converter: a.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "bubbles",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: a.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: a.converters.boolean,
        defaultValue: !1
    }
]), module.exports = {
    ProgressEvent: o
};
