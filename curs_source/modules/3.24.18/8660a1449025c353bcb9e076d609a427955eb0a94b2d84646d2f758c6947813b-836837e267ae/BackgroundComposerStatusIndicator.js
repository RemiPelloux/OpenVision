import { _De } from "./BA.js";
import { WcC } from "./BackgroundComposerStatusIndicator.css";
import { zt } from "./LYd.js";
import { Ok, aS, aVe } from "./Ycg.js";
import { Po, pd } from "./background_composer_pb.js";
import { gs, yt } from "./codicons.js";
import { Bu, Iw } from "./hoverWidget.js";
import { Mt } from "./index_197.js";
import { Wct } from "./spinningLoader_2.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Jat } from "./useLargeHoverTooltip.js";
import { at, zr } from "./web.js";
import { Er, Le, wt } from "./yBp.js";
import { Ee, pi, vt, xn } from "./ze.js";
var Cdc, XXv, S8e;
export { Cdc, S8e, XXv };
var __wakaru_GcC_initialized = false;
export function GcC() {
if (__wakaru_GcC_initialized) return;
__wakaru_GcC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), Mt(), pi(), pd(), Iw(), gs(), ta(), aS(), Jat(), Wct(), WcC(), Cdc = wt("<span>"), XXv = Ok(zt), S8e = (t)=>{
    const e = vt(()=>{
        switch(t.status){
            case Po.RUNNING:
            case Po.CREATING:
                return yt.circleShine;
            case Po.FINISHED:
                return yt.checkCircled;
            case Po.ERROR:
                return yt.warnCircle;
            default:
                return yt.warnCircle;
        }
    }), n = vt(()=>{
        if (t.neutralFinished) return "var(--cursor-icon-secondary)";
        if (t.onlyColorFinished) return t.status === Po.FINISHED ? "var(--vscode-testing-iconPassed)" : "var(--vscode-testing-iconUnset)";
        switch(t.status){
            case Po.CREATING:
            case Po.RUNNING:
                return "var(--vscode-editorLightBulb-foreground)";
            case Po.FINISHED:
                return "var(--vscode-testing-iconPassed)";
            case Po.ERROR:
                return "var(--vscode-editor-foreground)";
            default:
                return "var(--vscode-testing-iconUnset)";
        }
    }), i = vt(()=>{
        if (t.status === Po.ERROR) return "Errored";
        if (!t.hasStartedVm) return "Waiting for VM to start...";
        switch(t.status){
            case Po.CREATING:
                return "Creating environment...";
            case Po.RUNNING:
                return "Running...";
            case Po.FINISHED:
                return "Finished";
            case Po.UNSPECIFIED:
            case Po.EXPIRED:
                return "Session expired";
            default:
                return;
        }
    }), { showLargeHover: r, hideHover: s } = aVe({
        delay: t.hoverDelayMs
    });
    return (()=>{
        var o = Cdc();
        return o.addEventListener("mouseleave", ()=>{
            t.disableHover || s();
        }), o.addEventListener("mouseenter", (a)=>{
            if (t.disableHover) return;
            const l = i();
            l && r(a, l, Bu.BELOW);
        }), o.style.setProperty("position", "relative"), Le(o, (()=>{
            var a = zr(()=>t.status === Po.RUNNING || t.status === Po.CREATING);
            return ()=>a() ? Ee(_De, {
                    get color () {
                        return n();
                    },
                    get spinSpeed () {
                        return t.spinSpeed ?? "regular";
                    },
                    get size () {
                        return t.size;
                    }
                }) : (()=>{
                    var l = zr(()=>!!(t.status === Po.FINISHED && t.finishedIconName));
                    return ()=>l() ? Ee(XXv, {
                            get name () {
                                return t.finishedIconName;
                            },
                            get size () {
                                return t.finishedSize ?? t.size;
                            },
                            get style () {
                                return {
                                    color: n()
                                };
                            }
                        }) : (()=>{
                            var c = Cdc();
                            return xn((u)=>{
                                var d = `${Gn.asClassName(e())} ${t.size ? "" : "!text-[16px]"} bg-codicon-icon ${t.iconClass}`, h = n(), p = t.status === Po.FINISHED && t.finishedSize ? `${t.finishedSize}px` : t.size ? `${t.size}px` : void 0, g = t.status === Po.ERROR ? .6 : void 0;
                                return d !== u.e && Er(c, u.e = d), h !== u.t && ((u.t = h) != null ? c.style.setProperty("color", h) : c.style.removeProperty("color")), p !== u.a && ((u.a = p) != null ? c.style.setProperty("font-size", p) : c.style.removeProperty("font-size")), g !== u.o && ((u.o = g) != null ? c.style.setProperty("opacity", g) : c.style.removeProperty("opacity")), u;
                            }, {
                                e: void 0,
                                t: void 0,
                                a: void 0,
                                o: void 0
                            }), c;
                        })();
                })();
        })(), null), Le(o, ()=>t.children, null), xn(()=>Er(o, `background-composer-status-indicator-wrapper ${t.class ?? ""}`)), o;
    })();
};

}
