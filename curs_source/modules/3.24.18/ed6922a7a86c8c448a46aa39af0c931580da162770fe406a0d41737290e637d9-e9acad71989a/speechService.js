import { S, jn } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var XGt, ebo, tbo, clh, R1e, ZGt, WKi, nbo, GKi;
export { GKi, R1e, WKi, XGt, ZGt, clh, ebo, nbo, tbo };
var __wakaru_Dwt_initialized = false;
export function Dwt() {
if (__wakaru_Dwt_initialized) return;
__wakaru_Dwt_initialized = true;
"use strict";
x(), rt(), dn(), Ze(), jn(), XGt = vn("speechService"), ebo = new At("hasSpeechProvider", !1, {
    type: "boolean",
    description: S(9725, null)
}), tbo = new At("speechToTextInProgress", !1, {
    type: "boolean",
    description: S(9726, null)
}), clh = new At("textToSpeechInProgress", !1, {
    type: "boolean",
    description: S(9727, null)
}), R1e = ((e)=>(e[e.Started = 1] = "Started", e[e.Recognizing = 2] = "Recognizing", e[e.Recognized = 3] = "Recognized", e[e.Stopped = 4] = "Stopped", e[e.Error = 5] = "Error", e))(R1e || {}), ZGt = ((e)=>(e[e.Started = 1] = "Started", e[e.Stopped = 2] = "Stopped", e[e.Error = 3] = "Error", e))(ZGt || {}), WKi = ((e)=>(e[e.Recognized = 1] = "Recognized", e[e.Stopped = 2] = "Stopped", e[e.Canceled = 3] = "Canceled", e))(WKi || {}), nbo = "accessibility.voice.speechLanguage", GKi = {
    "da-DK": {
        name: S(9728, null)
    },
    "de-DE": {
        name: S(9729, null)
    },
    "en-AU": {
        name: S(9730, null)
    },
    "en-CA": {
        name: S(9731, null)
    },
    "en-GB": {
        name: S(9732, null)
    },
    "en-IE": {
        name: S(9733, null)
    },
    "en-IN": {
        name: S(9734, null)
    },
    "en-NZ": {
        name: S(9735, null)
    },
    "en-US": {
        name: S(9736, null)
    },
    "es-ES": {
        name: S(9737, null)
    },
    "es-MX": {
        name: S(9738, null)
    },
    "fr-CA": {
        name: S(9739, null)
    },
    "fr-FR": {
        name: S(9740, null)
    },
    "hi-IN": {
        name: S(9741, null)
    },
    "it-IT": {
        name: S(9742, null)
    },
    "ja-JP": {
        name: S(9743, null)
    },
    "ko-KR": {
        name: S(9744, null)
    },
    "nl-NL": {
        name: S(9745, null)
    },
    "pt-PT": {
        name: S(9746, null)
    },
    "pt-BR": {
        name: S(9747, null)
    },
    "ru-RU": {
        name: S(9748, null)
    },
    "sv-SE": {
        name: S(9749, null)
    },
    "tr-TR": {
        name: S(9750, null)
    },
    "zh-CN": {
        name: S(9751, null)
    },
    "zh-HK": {
        name: S(9752, null)
    },
    "zh-TW": {
        name: S(9753, null)
    }
};

}
