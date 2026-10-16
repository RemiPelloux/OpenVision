import { D, Di } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Hi, cn } from "./contextkey.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var qIn, BKm, UKm, dsk, zIn, gel, fel, vel;
export { BKm, UKm, dsk, fel, gel, qIn, vel, zIn };
var __wakaru_VIn_initialized = false;
export function VIn() {
if (__wakaru_VIn_initialized) return;
__wakaru_VIn_initialized = true;
"use strict";
E(), Bt(), Hi(), It(), Di(), qIn = jn("speechService"), BKm = new cn("hasSpeechProvider", !1, {
    type: "boolean",
    description: D(9725, null)
}), UKm = new cn("speechToTextInProgress", !1, {
    type: "boolean",
    description: D(9726, null)
}), dsk = new cn("textToSpeechInProgress", !1, {
    type: "boolean",
    description: D(9727, null)
}), zIn = ((t)=>(t[t.Started = 1] = "Started", t[t.Recognizing = 2] = "Recognizing", t[t.Recognized = 3] = "Recognized", t[t.Stopped = 4] = "Stopped", t[t.Error = 5] = "Error", t))(zIn || {}), gel = ((t)=>(t[t.Started = 1] = "Started", t[t.Stopped = 2] = "Stopped", t[t.Error = 3] = "Error", t))(gel || {}), fel = ((t)=>(t[t.Recognized = 1] = "Recognized", t[t.Stopped = 2] = "Stopped", t[t.Canceled = 3] = "Canceled", t))(fel || {}), vel = {
    "da-DK": {
        name: D(9728, null)
    },
    "de-DE": {
        name: D(9729, null)
    },
    "en-AU": {
        name: D(9730, null)
    },
    "en-CA": {
        name: D(9731, null)
    },
    "en-GB": {
        name: D(9732, null)
    },
    "en-IE": {
        name: D(9733, null)
    },
    "en-IN": {
        name: D(9734, null)
    },
    "en-NZ": {
        name: D(9735, null)
    },
    "en-US": {
        name: D(9736, null)
    },
    "es-ES": {
        name: D(9737, null)
    },
    "es-MX": {
        name: D(9738, null)
    },
    "fr-CA": {
        name: D(9739, null)
    },
    "fr-FR": {
        name: D(9740, null)
    },
    "hi-IN": {
        name: D(9741, null)
    },
    "it-IT": {
        name: D(9742, null)
    },
    "ja-JP": {
        name: D(9743, null)
    },
    "ko-KR": {
        name: D(9744, null)
    },
    "nl-NL": {
        name: D(9745, null)
    },
    "pt-PT": {
        name: D(9746, null)
    },
    "pt-BR": {
        name: D(9747, null)
    },
    "ru-RU": {
        name: D(9748, null)
    },
    "sv-SE": {
        name: D(9749, null)
    },
    "tr-TR": {
        name: D(9750, null)
    },
    "zh-CN": {
        name: D(9751, null)
    },
    "zh-HK": {
        name: D(9752, null)
    },
    "zh-TW": {
        name: D(9753, null)
    }
};

}
