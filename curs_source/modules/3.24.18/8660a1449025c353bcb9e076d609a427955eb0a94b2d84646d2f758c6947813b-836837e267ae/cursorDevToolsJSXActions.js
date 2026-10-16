import { u0 } from "./Ycg.js";
import { dlC, plC } from "./_Hv.js";
import { es, sn } from "./actions_2.js";
import { It, dn } from "./instantiation.js";
import { Cl, Gu } from "./quickInput.js";
import { hlC } from "./renderQuickInputCustomDom.js";
import { $T } from "./solid_2.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { Ee, Ht, pi } from "./ze.js";
var LKv, Kuc, Yuc, Xuc, Zuc;
export { Kuc, LKv, Xuc, Yuc, Zuc };
var __wakaru_mlC_initialized = false;
export function mlC() {
if (__wakaru_mlC_initialized) return;
__wakaru_mlC_initialized = true;
"use strict";
E(), at(), at(), at(), es(), It(), Gu(), pi(), es(), hlC(), $T(), LKv = wt("<div><canvas width=400 height=200>"), Kuc = class zMb extends sn {
    constructor(){
        super({
            id: zMb.ID,
            title: {
                value: "Open SolidJS Custom Render Quick Pick",
                original: "Open SolidJS Custom Render Quick Pick"
            },
            f1: !0
        });
    }
    async run(e) {
        const n = e.get(Cl), i = e.get(dn), r = n.createQuickPick(), s = [
            {
                label: "Item 1",
                description: "Item 1 description",
                customRenderedDom: dlC((o)=>u0(()=>Ee(plC, {}), o, i))
            },
            {
                label: "Item 2",
                description: "Item 2 description"
            },
            {
                label: "Item 3",
                description: "Item 3 description"
            }
        ];
        r.items = s, r.placeholder = "Select an item", r.show(), r.onDidHide(()=>{
            s.forEach((o)=>{
                o.customRenderedDom?.disposable && o.customRenderedDom.disposable.dispose();
            });
        });
    }
}, Kuc.ID = "cursor.openSolidCustomRenderQuickPick", Yuc = Kuc, Xuc = class VMb extends sn {
    constructor(){
        super({
            id: VMb.ID,
            title: {
                value: "Open Quick Pick with Section Headers",
                original: "Open Quick Pick with Section Headers"
            },
            f1: !0
        });
    }
    async run(e) {
        const i = e.get(Cl).createQuickPick({
            useSeparators: !0
        }), a = [
            {
                type: "section",
                id: "frameworks",
                label: "Frameworks"
            },
            {
                label: "React",
                description: "JavaScript UI library",
                detail: "Developed by Facebook"
            },
            {
                label: "Angular",
                description: "TypeScript-based framework",
                detail: "Developed by Google"
            },
            {
                label: "Vue",
                description: "Progressive JavaScript framework",
                detail: "Created by Evan You"
            },
            {
                type: "section",
                id: "languages",
                label: "Languages"
            },
            {
                label: "TypeScript",
                description: "Typed superset of JavaScript",
                detail: "Developed by Microsoft"
            },
            {
                label: "Python",
                description: "General-purpose language",
                detail: "Created by Guido van Rossum"
            },
            {
                label: "Rust",
                description: "Performance & safety focused",
                detail: "Created by Mozilla Research"
            },
            {
                type: "section",
                id: "tools",
                label: "Tools"
            },
            {
                label: "VS Code",
                description: "Code editor",
                detail: "Developed by Microsoft"
            },
            {
                label: "Docker",
                description: "Container platform",
                detail: "Developed by Docker, Inc."
            },
            {
                label: "Git",
                description: "Version control system",
                detail: "Created by Linus Torvalds"
            }
        ];
        i.items = a, i.placeholder = "Select an item", i.title = "Quick Pick with Section Headers", i.matchOnLabel = !0, i.matchOnDescription = !0, i.matchOnDetail = !0, i.show();
    }
}, Xuc.ID = "cursor.openSectionHeadersQuickPick", Zuc = Xuc, Ht(Yuc), Ht(Zuc);

}
