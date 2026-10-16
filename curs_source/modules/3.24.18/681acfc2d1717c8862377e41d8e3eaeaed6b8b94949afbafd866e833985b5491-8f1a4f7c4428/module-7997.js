"use strict";
const { webidl: n } = require("./module-8005.js"), r = Symbol("ProgressEvent state");
class o extends Event {
    constructor(e, t = {}){
        super(e = n.converters.DOMString(e), t = n.converters.ProgressEventInit(t ?? {})), this[r] = {
            lengthComputable: t.lengthComputable,
            loaded: t.loaded,
            total: t.total
        };
    }
    get lengthComputable() {
        return n.brandCheck(this, o), this[r].lengthComputable;
    }
    get loaded() {
        return n.brandCheck(this, o), this[r].loaded;
    }
    get total() {
        return n.brandCheck(this, o), this[r].total;
    }
}
n.converters.ProgressEventInit = n.dictionaryConverter([
    {
        key: "lengthComputable",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "loaded",
        converter: n.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "total",
        converter: n.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "bubbles",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "cancelable",
        converter: n.converters.boolean,
        defaultValue: !1
    },
    {
        key: "composed",
        converter: n.converters.boolean,
        defaultValue: !1
    }
]), module.exports = {
    ProgressEvent: o
};
