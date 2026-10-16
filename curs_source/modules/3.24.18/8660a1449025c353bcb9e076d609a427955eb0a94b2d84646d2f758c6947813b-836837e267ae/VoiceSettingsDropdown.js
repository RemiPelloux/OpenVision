import { y9e } from "./ComposerUnifiedContextMenu.js";
import { N4k } from "./VoiceSettingsDropdown.css";
import { Gr, YB, nye, vMe } from "./Ycg.js";
import { Ss } from "./aiMiscServices.js";
import { gs, yt } from "./codicons.js";
import { iye } from "./hooks.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { VIn, vel } from "./speechService.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { uWt } from "./utilities_3.js";
import { at, zr } from "./web.js";
import { Er, wt } from "./yBp.js";
import { Ee, Wt, pi, vt, xn } from "./ze.js";
var rtf, stf;
export { rtf, stf };
var __wakaru_L4k_initialized = false;
export function L4k() {
if (__wakaru_L4k_initialized) return;
__wakaru_L4k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), Ole(), vo(), Ss(), VIn(), iye(), y9e(), N4k(), rtf = wt('<button class=voice-settings-dropdown-trigger title="Voice settings"><i>'), stf = ()=>{
    const t = Gr(), [e, n, i] = nye(), [r, s] = Wt("bottom-left"), [o, a] = YB(t.storageService, "voiceInputLanguage"), l = (h)=>{
        a(h), i();
    }, c = ()=>{
        const h = {};
        Object.entries(vel).forEach(([g, f])=>{
            const _ = f.name.split("(")[0].trim();
            h[_] || (h[_] = []), h[_].push({
                code: g,
                name: f.name
            });
        });
        const p = [];
        return Object.entries(h).forEach(([g, f])=>{
            g === "English" ? p.push({
                code: "en-US",
                name: "English"
            }) : f.length === 1 ? p.push({
                code: f[0].code,
                name: g
            }) : p.push(...f);
        }), p.sort((g, f)=>g.name.localeCompare(f.name));
    }, u = vt(()=>{
        const h = c(), p = o() ?? uWt, g = h.map(({ code: f, name: _ })=>({
                id: f,
                title: _,
                onClick: ()=>l(f),
                showType: p === f || f === "en-US" && p.startsWith("en-") ? "check" : void 0
            }));
        return [
            {
                type: "items",
                items: [
                    {
                        id: "auto-detect",
                        title: "Auto-Detect",
                        onClick: ()=>l(uWt),
                        showType: p === uWt ? "check" : void 0
                    }
                ]
            },
            {
                type: "divider"
            },
            {
                type: "items",
                items: g
            }
        ];
    }), d = (h)=>{
        const g = h.currentTarget.getBoundingClientRect(), f = g.top < t.window.innerHeight / 2;
        s(f ? "top-left" : "bottom-left"), n({
            x: g.left,
            y: f ? g.bottom + 4 : g.top - 4
        });
    };
    return [
        (()=>{
            var h = rtf(), p = h.firstChild;
            return h.addEventListener("click", d), xn(()=>Er(p, Gn.asClassName(yt.chevronDown))), h;
        })(),
        zr(()=>zr(()=>!!e())() && Ee(vMe, {
                get position () {
                    return e();
                },
                id: "voice-settings-menu",
                onClose: i,
                get sections () {
                    return u();
                },
                get anchor () {
                    return r();
                },
                width: 200,
                maxHeight: 300
            }))
    ];
};

}
