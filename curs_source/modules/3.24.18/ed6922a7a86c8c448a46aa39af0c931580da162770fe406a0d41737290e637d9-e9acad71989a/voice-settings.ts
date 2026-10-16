import { x } from "./tslib.es6.js";
function n6h(e) {
    return e !== void 0 && Object.hasOwn(Y5n, e);
}
var Zir, yMo, Qir, SMo, K5n, Y5n, kMo, wzt;
export { K5n, Qir, SMo, Y5n, Zir, kMo, n6h, wzt, yMo };
var __wakaru_Jir_initialized = false;
export function Jir() {
if (__wakaru_Jir_initialized) return;
__wakaru_Jir_initialized = true;
"use strict";
x(), Zir = [
    {
        id: "altair",
        label: "Altair"
    },
    {
        id: "ara",
        label: "Ara"
    },
    {
        id: "atlas",
        label: "Atlas"
    },
    {
        id: "aurora",
        label: "Aurora"
    },
    {
        id: "carina",
        label: "Carina"
    },
    {
        id: "castor",
        label: "Castor"
    },
    {
        id: "celeste",
        label: "Celeste"
    },
    {
        id: "cosmo",
        label: "Cosmo"
    },
    {
        id: "eve",
        label: "Eve"
    },
    {
        id: "helios",
        label: "Helios"
    },
    {
        id: "helix",
        label: "Helix"
    },
    {
        id: "iris",
        label: "Iris"
    },
    {
        id: "kepler",
        label: "Kepler"
    },
    {
        id: "leo",
        label: "Leo"
    },
    {
        id: "liora",
        label: "Liora"
    },
    {
        id: "lumen",
        label: "Lumen"
    },
    {
        id: "luna",
        label: "Luna"
    },
    {
        id: "lux",
        label: "Lux"
    },
    {
        id: "naksh",
        label: "Naksh"
    },
    {
        id: "orion",
        label: "Orion"
    },
    {
        id: "perseus",
        label: "Perseus"
    },
    {
        id: "rex",
        label: "Rex"
    },
    {
        id: "rigel",
        label: "Rigel"
    },
    {
        id: "sal",
        label: "Sal"
    },
    {
        id: "sirius",
        label: "Sirius"
    },
    {
        id: "ursa",
        label: "Ursa"
    },
    {
        id: "zagan",
        label: "Zagan"
    },
    {
        id: "zenith",
        label: "Zenith"
    }
], yMo = "ara", Qir = [
    {
        value: .75,
        label: "0.75x"
    },
    {
        value: 1,
        label: "1x"
    },
    {
        value: 1.25,
        label: "1.25x"
    },
    {
        value: 1.5,
        label: "1.5x"
    },
    {
        value: 2,
        label: "2x"
    }
], SMo = 1, K5n = "auto", Y5n = {
    auto: "Auto-detect",
    en: "English",
    "ar-EG": "Arabic (Egypt)",
    "ar-SA": "Arabic (Saudi Arabia)",
    "ar-AE": "Arabic (United Arab Emirates)",
    bn: "Bengali",
    ca: "Catalan",
    zh: "Chinese (Simplified)",
    da: "Danish",
    nl: "Dutch",
    fi: "Finnish",
    fr: "French",
    de: "German",
    hi: "Hindi",
    hu: "Hungarian",
    id: "Indonesian",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    pl: "Polish",
    "pt-BR": "Portuguese (Brazil)",
    "pt-PT": "Portuguese (Portugal)",
    ru: "Russian",
    "es-MX": "Spanish (Mexico)",
    "es-ES": "Spanish (Spain)",
    sv: "Swedish",
    th: "Thai",
    tr: "Turkish",
    vi: "Vietnamese"
}, kMo = Object.keys(Y5n).filter(n6h).map((e)=>({
        id: e,
        label: Y5n[e]
    })), wzt = {
    voiceId: yMo,
    speed: SMo,
    language: K5n
};

}
