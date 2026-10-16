"use strict";
const { webidl: r } = require("./module-43290.js"), s = Symbol("ProgressEvent state");
class o extends Event {
    constructor(A, e = {}){
        super(A = r.converters.DOMString(A, "ProgressEvent constructor", "type"), e = r.converters.ProgressEventInit(e ?? {})), this[s] = {
            lengthComputable: e.lengthComputable,
            loaded: e.loaded,
            total: e.total
        };
    }
    get lengthComputable() {
        return r.brandCheck(this, o), this[s].lengthComputable;
    }
    get loaded() {
        return r.brandCheck(this, o), this[s].loaded;
    }
    get total() {
        return r.brandCheck(this, o), this[s].total;
    }
}
r.converters.ProgressEventInit = r.dictionaryConverter([
    {
        key: "lengthComputable",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "loaded",
        converter: r.converters["unsigned long long"],
        defaultValue: ()=>0
    },
    {
        key: "total",
        converter: r.converters["unsigned long long"],
        defaultValue: ()=>0
    },
    {
        key: "bubbles",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "cancelable",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    },
    {
        key: "composed",
        converter: r.converters.boolean,
        defaultValue: ()=>!1
    }
]), module.exports = {
    ProgressEvent: o
};
