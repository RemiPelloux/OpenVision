"use strict";
const { webidl: n } = require("./module-8193.js"), s = Symbol("ProgressEvent state");
class i extends Event {
    constructor(t, e = {}){
        super(t = n.converters.DOMString(t), e = n.converters.ProgressEventInit(e ?? {})), this[s] = {
            lengthComputable: e.lengthComputable,
            loaded: e.loaded,
            total: e.total
        };
    }
    get lengthComputable() {
        return n.brandCheck(this, i), this[s].lengthComputable;
    }
    get loaded() {
        return n.brandCheck(this, i), this[s].loaded;
    }
    get total() {
        return n.brandCheck(this, i), this[s].total;
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
    ProgressEvent: i
};
