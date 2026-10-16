import { ftf } from "./Ycg.js";
import { E } from "./tslib.es6.js";
var Pgs, LCl, Mgs, OCl, iPi, rPi, FCl, zPn;
export { FCl, LCl, Mgs, OCl, Pgs, iPi, rPi, zPn };
var __wakaru_Dgs_initialized = false;
export function Dgs() {
if (__wakaru_Dgs_initialized) return;
__wakaru_Dgs_initialized = true;
"use strict";
E(), Pgs = [
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
], LCl = "ara", Mgs = [
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
], OCl = 1, iPi = "auto", rPi = {
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
}, FCl = Object.keys(rPi).filter(ftf).map((t)=>({
        id: t,
        label: rPi[t]
    })), zPn = {
    voiceId: LCl,
    speed: OCl,
    language: iPi
};

}
