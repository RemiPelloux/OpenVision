import { require_webidl } from "../fetch/webidl.js";
var __wakaru_require_progressevent_cache;
export function require_progressevent() {
if (__wakaru_require_progressevent_cache) return __wakaru_require_progressevent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_progressevent_cache = module2;
"use strict";
var { webidl } = require_webidl();
var kState = Symbol("ProgressEvent state");
var ProgressEvent = class _ProgressEvent extends Event {
    constructor(type2, eventInitDict = {}){
        type2 = webidl.converters.DOMString(type2);
        eventInitDict = webidl.converters.ProgressEventInit(eventInitDict ?? {});
        super(type2, eventInitDict);
        this[kState] = {
            lengthComputable: eventInitDict.lengthComputable,
            loaded: eventInitDict.loaded,
            total: eventInitDict.total
        };
    }
    get lengthComputable() {
        webidl.brandCheck(this, _ProgressEvent);
        return this[kState].lengthComputable;
    }
    get loaded() {
        webidl.brandCheck(this, _ProgressEvent);
        return this[kState].loaded;
    }
    get total() {
        webidl.brandCheck(this, _ProgressEvent);
        return this[kState].total;
    }
};
webidl.converters.ProgressEventInit = webidl.dictionaryConverter([
    {
        key: "lengthComputable",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "loaded",
        converter: webidl.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "total",
        converter: webidl.converters["unsigned long long"],
        defaultValue: 0
    },
    {
        key: "bubbles",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "cancelable",
        converter: webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: "composed",
        converter: webidl.converters.boolean,
        defaultValue: false
    }
]);
module2.exports = {
    ProgressEvent
};

return module2.exports;
}
