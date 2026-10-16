import { $Ge, MAp, _T1, bT1, mHr, vT1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
import Fg from "./react-runtime/react/esm-index-production.js";
import fT1 from "./react-runtime/react-dom/esm-index-production.js";
var DAp, NAp, LAp, OAp, FAp, BAp, UAp, jAp, $Ap, gHr, HAp, Jhe, WAp, GAp, qAp, zAp, VAp, _bi, KAp, YAp, XAp, PMa, ZAp, QAp, JAp, eRp, tRp, nRp;
export { $Ap, BAp, DAp, FAp, GAp, HAp, JAp, Jhe, KAp, LAp, NAp, OAp, PMa, QAp, UAp, VAp, WAp, XAp, YAp, ZAp, _bi, eRp, gHr, jAp, nRp, qAp, tRp, zAp };
var __wakaru_yT1_initialized = false;
export function yT1() {
if (__wakaru_yT1_initialized) return;
__wakaru_yT1_initialized = true;
E(), DAp = (t)=>{
    switch(t){
        case "success":
            return OAp;
        case "info":
            return BAp;
        case "warning":
            return FAp;
        case "error":
            return UAp;
        default:
            return null;
    }
}, NAp = Array(12).fill(0), LAp = ({ visible: t, className: e })=>Fg.createElement("div", {
        className: [
            "sonner-loading-wrapper",
            e
        ].filter(Boolean).join(" "),
        "data-visible": t
    }, Fg.createElement("div", {
        className: "sonner-spinner"
    }, NAp.map((n, i)=>Fg.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`
        })))), OAp = Fg.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, Fg.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
})), FAp = Fg.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, Fg.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
})), BAp = Fg.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, Fg.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
})), UAp = Fg.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, Fg.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
})), jAp = Fg.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, Fg.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), Fg.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
})), $Ap = ()=>{
    const [t, e] = Fg.useState(document.hidden);
    return Fg.useEffect(()=>{
        const n = ()=>{
            e(document.hidden);
        };
        return document.addEventListener("visibilitychange", n), ()=>window.removeEventListener("visibilitychange", n);
    }, []), t;
}, gHr = 1, HAp = class {
    constructor(){
        this.subscribe = (t)=>(this.subscribers.push(t), ()=>{
                const e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1);
            }), this.publish = (t)=>{
            this.subscribers.forEach((e)=>e(t));
        }, this.addToast = (t)=>{
            this.publish(t), this.toasts = [
                ...this.toasts,
                t
            ];
        }, this.create = (t)=>{
            var e;
            const { message: n, ...i } = t, r = typeof t?.id == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : gHr++, s = this.toasts.find((a)=>a.id === r), o = t.dismissible === void 0 ? !0 : t.dismissible;
            return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), s ? this.toasts = this.toasts.map((a)=>a.id === r ? (this.publish({
                    ...a,
                    ...t,
                    id: r,
                    title: n
                }), {
                    ...a,
                    ...t,
                    id: r,
                    dismissible: o,
                    title: n
                }) : a) : this.addToast({
                title: n,
                ...i,
                dismissible: o,
                id: r
            }), r;
        }, this.dismiss = (t)=>(t ? (this.dismissedToasts.add(t), requestAnimationFrame(()=>this.subscribers.forEach((e)=>e({
                        id: t,
                        dismiss: !0
                    })))) : this.toasts.forEach((e)=>{
                this.subscribers.forEach((n)=>n({
                        id: e.id,
                        dismiss: !0
                    }));
            }), t), this.message = (t, e)=>this.create({
                ...e,
                message: t
            }), this.error = (t, e)=>this.create({
                ...e,
                message: t,
                type: "error"
            }), this.success = (t, e)=>this.create({
                ...e,
                type: "success",
                message: t
            }), this.info = (t, e)=>this.create({
                ...e,
                type: "info",
                message: t
            }), this.warning = (t, e)=>this.create({
                ...e,
                type: "warning",
                message: t
            }), this.loading = (t, e)=>this.create({
                ...e,
                type: "loading",
                message: t
            }), this.promise = (t, e)=>{
            if (!e) return;
            let n;
            e.loading !== void 0 && (n = this.create({
                ...e,
                promise: t,
                type: "loading",
                message: e.loading,
                description: typeof e.description != "function" ? e.description : void 0
            }));
            const i = Promise.resolve(t instanceof Function ? t() : t);
            let r = n !== void 0, s;
            const o = i.then(async (l)=>{
                if (s = [
                    "resolve",
                    l
                ], Fg.isValidElement(l)) r = !1, this.create({
                    id: n,
                    type: "default",
                    message: l
                });
                else if (GAp(l) && !l.ok) {
                    r = !1;
                    const u = typeof e.error == "function" ? await e.error(`HTTP error! status: ${l.status}`) : e.error, d = typeof e.description == "function" ? await e.description(`HTTP error! status: ${l.status}`) : e.description, p = typeof u == "object" && !Fg.isValidElement(u) ? u : {
                        message: u
                    };
                    this.create({
                        id: n,
                        type: "error",
                        description: d,
                        ...p
                    });
                } else if (l instanceof Error) {
                    r = !1;
                    const u = typeof e.error == "function" ? await e.error(l) : e.error, d = typeof e.description == "function" ? await e.description(l) : e.description, p = typeof u == "object" && !Fg.isValidElement(u) ? u : {
                        message: u
                    };
                    this.create({
                        id: n,
                        type: "error",
                        description: d,
                        ...p
                    });
                } else if (e.success !== void 0) {
                    r = !1;
                    const u = typeof e.success == "function" ? await e.success(l) : e.success, d = typeof e.description == "function" ? await e.description(l) : e.description, p = typeof u == "object" && !Fg.isValidElement(u) ? u : {
                        message: u
                    };
                    this.create({
                        id: n,
                        type: "success",
                        description: d,
                        ...p
                    });
                }
            }).catch(async (l)=>{
                if (s = [
                    "reject",
                    l
                ], e.error !== void 0) {
                    r = !1;
                    const c = typeof e.error == "function" ? await e.error(l) : e.error, u = typeof e.description == "function" ? await e.description(l) : e.description, h = typeof c == "object" && !Fg.isValidElement(c) ? c : {
                        message: c
                    };
                    this.create({
                        id: n,
                        type: "error",
                        description: u,
                        ...h
                    });
                }
            }).finally(()=>{
                r && (this.dismiss(n), n = void 0), e.finally == null || e.finally.call(e);
            }), a = ()=>new Promise((l, c)=>o.then(()=>s[0] === "reject" ? c(s[1]) : l(s[1])).catch(c));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            });
        }, this.custom = (t, e)=>{
            const n = e?.id || gHr++;
            return this.create({
                jsx: t(n),
                id: n,
                ...e
            }), n;
        }, this.getActiveToasts = ()=>this.toasts.filter((t)=>!this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set;
    }
}, Jhe = new HAp, WAp = (t, e)=>{
    const n = e?.id || gHr++;
    return Jhe.addToast({
        title: t,
        ...e,
        id: n
    }), n;
}, GAp = (t)=>t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", qAp = WAp, zAp = ()=>Jhe.toasts, VAp = ()=>Jhe.getActiveToasts(), _bi = Object.assign(qAp, {
    success: Jhe.success,
    info: Jhe.info,
    warning: Jhe.warning,
    error: Jhe.error,
    custom: Jhe.custom,
    message: Jhe.message,
    promise: Jhe.promise,
    dismiss: Jhe.dismiss,
    loading: Jhe.loading
}, {
    getHistory: zAp,
    getToasts: VAp
}), vT1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"), KAp = 3, YAp = "24px", XAp = "16px", PMa = 4e3, ZAp = 356, QAp = 14, JAp = 45, eRp = 200, tRp = (t)=>{
    var e, n, i, r, s, o, a, l, c;
    const { invert: u, toast: d, unstyled: h, interacting: p, setHeights: g, visibleToasts: f, heights: _, index: b, toasts: y, expanded: S, removeToast: k, defaultRichColors: C, closeButton: T, style: I, cancelButtonStyle: A, actionButtonStyle: P, className: M = "", descriptionClassName: O = "", duration: N, position: U, gap: j, expandByDefault: $, classNames: H, icons: G, closeButtonAriaLabel: q = "Close toast" } = t, [K, V] = Fg.useState(null), [Y, J] = Fg.useState(null), [Q, te] = Fg.useState(!1), [ee, re] = Fg.useState(!1), [ie, oe] = Fg.useState(!1), [se, le] = Fg.useState(!1), [ce, ae] = Fg.useState(!1), [de, he] = Fg.useState(0), [ge, pe] = Fg.useState(0), ve = Fg.useRef(d.duration || N || PMa), fe = Fg.useRef(null), Te = Fg.useRef(null), _e = b === 0, Ce = b + 1 <= f, Se = d.type, Pe = d.dismissible !== !1, we = d.className || "", Ie = d.descriptionClassName || "", Me = Fg.useMemo(()=>_.findIndex((Ae)=>Ae.toastId === d.id) || 0, [
        _,
        d.id
    ]), De = Fg.useMemo(()=>{
        var Ae;
        return (Ae = d.closeButton) != null ? Ae : T;
    }, [
        d.closeButton,
        T
    ]), Ne = Fg.useMemo(()=>d.duration || N || PMa, [
        d.duration,
        N
    ]), be = Fg.useRef(0), je = Fg.useRef(0), $e = Fg.useRef(0), Je = Fg.useRef(null), [Ge, xe] = U.split("-"), Oe = Fg.useMemo(()=>_.reduce((Ae, ot, Be)=>Be >= Me ? Ae : Ae + ot.height, 0), [
        _,
        Me
    ]), ct = $Ap(), Ye = d.invert || u, Ve = Se === "loading";
    je.current = Fg.useMemo(()=>Me * j + Oe, [
        Me,
        Oe
    ]), Fg.useEffect(()=>{
        ve.current = Ne;
    }, [
        Ne
    ]), Fg.useEffect(()=>{
        te(!0);
    }, []), Fg.useEffect(()=>{
        const Ae = Te.current;
        if (Ae) {
            const ot = Ae.getBoundingClientRect().height;
            return pe(ot), g((Be)=>[
                    {
                        toastId: d.id,
                        height: ot,
                        position: d.position
                    },
                    ...Be
                ]), ()=>g((Be)=>Be.filter((Ue)=>Ue.toastId !== d.id));
        }
    }, [
        g,
        d.id
    ]), Fg.useLayoutEffect(()=>{
        if (!Q) return;
        const Ae = Te.current, ot = Ae.style.height;
        Ae.style.height = "auto";
        const Be = Ae.getBoundingClientRect().height;
        Ae.style.height = ot, pe(Be), g((Ue)=>Ue.find((qe)=>qe.toastId === d.id) ? Ue.map((qe)=>qe.toastId === d.id ? {
                    ...qe,
                    height: Be
                } : qe) : [
                {
                    toastId: d.id,
                    height: Be,
                    position: d.position
                },
                ...Ue
            ]);
    }, [
        Q,
        d.title,
        d.description,
        g,
        d.id,
        d.jsx,
        d.action,
        d.cancel
    ]);
    const Xe = Fg.useCallback(()=>{
        re(!0), he(je.current), g((Ae)=>Ae.filter((ot)=>ot.toastId !== d.id)), setTimeout(()=>{
            k(d);
        }, eRp);
    }, [
        d,
        k,
        g,
        je
    ]);
    Fg.useEffect(()=>{
        if (d.promise && Se === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
        let Ae;
        return S || p || ct ? (()=>{
            if ($e.current < be.current) {
                const Ue = new Date().getTime() - be.current;
                ve.current = ve.current - Ue;
            }
            $e.current = new Date().getTime();
        })() : (()=>{
            ve.current !== 1 / 0 && (be.current = new Date().getTime(), Ae = setTimeout(()=>{
                d.onAutoClose == null || d.onAutoClose.call(d, d), Xe();
            }, ve.current));
        })(), ()=>clearTimeout(Ae);
    }, [
        S,
        p,
        d,
        Se,
        ct,
        Xe
    ]), Fg.useEffect(()=>{
        d.delete && (Xe(), d.onDismiss == null || d.onDismiss.call(d, d));
    }, [
        Xe,
        d.delete
    ]);
    function lt() {
        var Ae;
        if (G?.loading) {
            var ot;
            return Fg.createElement("div", {
                className: $Ge(H?.loader, d == null || (ot = d.classNames) == null ? void 0 : ot.loader, "sonner-loader"),
                "data-visible": Se === "loading"
            }, G.loading);
        }
        return Fg.createElement(LAp, {
            className: $Ge(H?.loader, d == null || (Ae = d.classNames) == null ? void 0 : Ae.loader),
            visible: Se === "loading"
        });
    }
    const He = d.icon || G?.[Se] || DAp(Se);
    var gt, ht;
    return Fg.createElement("li", {
        tabIndex: 0,
        ref: Te,
        className: $Ge(M, we, H?.toast, d == null || (e = d.classNames) == null ? void 0 : e.toast, H?.default, H?.[Se], d == null || (n = d.classNames) == null ? void 0 : n[Se]),
        "data-sonner-toast": "",
        "data-rich-colors": (gt = d.richColors) != null ? gt : C,
        "data-styled": !(d.jsx || d.unstyled || h),
        "data-mounted": Q,
        "data-promise": !!d.promise,
        "data-swiped": ce,
        "data-removed": ee,
        "data-visible": Ce,
        "data-y-position": Ge,
        "data-x-position": xe,
        "data-index": b,
        "data-front": _e,
        "data-swiping": ie,
        "data-dismissible": Pe,
        "data-type": Se,
        "data-invert": Ye,
        "data-swipe-out": se,
        "data-swipe-direction": Y,
        "data-expanded": !!(S || $ && Q),
        "data-testid": d.testId,
        style: {
            "--index": b,
            "--toasts-before": b,
            "--z-index": y.length - b,
            "--offset": `${ee ? de : je.current}px`,
            "--initial-height": $ ? "auto" : `${ge}px`,
            ...I,
            ...d.style
        },
        onDragEnd: ()=>{
            oe(!1), V(null), Je.current = null;
        },
        onPointerDown: (Ae)=>{
            Ae.button !== 2 && (Ve || !Pe || (fe.current = new Date, he(je.current), Ae.target.setPointerCapture(Ae.pointerId), Ae.target.tagName !== "BUTTON" && (oe(!0), Je.current = {
                x: Ae.clientX,
                y: Ae.clientY
            })));
        },
        onPointerUp: ()=>{
            var Ae, ot, Be;
            if (se || !Pe) return;
            Je.current = null;
            const Ue = Number(((Ae = Te.current) == null ? void 0 : Ae.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), it = Number(((ot = Te.current) == null ? void 0 : ot.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), qe = new Date().getTime() - ((Be = fe.current) == null ? void 0 : Be.getTime()), pt = K === "x" ? Ue : it, dt = Math.abs(pt) / qe;
            if (Math.abs(pt) >= JAp || dt > .11) {
                he(je.current), d.onDismiss == null || d.onDismiss.call(d, d), J(K === "x" ? Ue > 0 ? "right" : "left" : it > 0 ? "down" : "up"), Xe(), le(!0);
                return;
            } else {
                var ft, bt;
                (ft = Te.current) == null || ft.style.setProperty("--swipe-amount-x", "0px"), (bt = Te.current) == null || bt.style.setProperty("--swipe-amount-y", "0px");
            }
            ae(!1), oe(!1), V(null);
        },
        onPointerMove: (Ae)=>{
            var ot, Be, Ue;
            if (!Je.current || !Pe || ((ot = window.getSelection()) == null ? void 0 : ot.toString().length) > 0) return;
            const qe = Ae.clientY - Je.current.y, pt = Ae.clientX - Je.current.x;
            var dt;
            const ft = (dt = t.swipeDirections) != null ? dt : _T1(U);
            !K && (Math.abs(pt) > 1 || Math.abs(qe) > 1) && V(Math.abs(pt) > Math.abs(qe) ? "x" : "y");
            let bt = {
                x: 0,
                y: 0
            };
            const St = (Et)=>1 / (1.5 + Math.abs(Et) / 20);
            if (K === "y") {
                if (ft.includes("top") || ft.includes("bottom")) if (ft.includes("top") && qe < 0 || ft.includes("bottom") && qe > 0) bt.y = qe;
                else {
                    const Et = qe * St(qe);
                    bt.y = Math.abs(Et) < Math.abs(qe) ? Et : qe;
                }
            } else if (K === "x" && (ft.includes("left") || ft.includes("right"))) if (ft.includes("left") && pt < 0 || ft.includes("right") && pt > 0) bt.x = pt;
            else {
                const Et = pt * St(pt);
                bt.x = Math.abs(Et) < Math.abs(pt) ? Et : pt;
            }
            (Math.abs(bt.x) > 0 || Math.abs(bt.y) > 0) && ae(!0), (Be = Te.current) == null || Be.style.setProperty("--swipe-amount-x", `${bt.x}px`), (Ue = Te.current) == null || Ue.style.setProperty("--swipe-amount-y", `${bt.y}px`);
        }
    }, De && !d.jsx && Se !== "loading" ? Fg.createElement("button", {
        "aria-label": q,
        "data-disabled": Ve,
        "data-close-button": !0,
        onClick: Ve || !Pe ? ()=>{} : ()=>{
            Xe(), d.onDismiss == null || d.onDismiss.call(d, d);
        },
        className: $Ge(H?.closeButton, d == null || (i = d.classNames) == null ? void 0 : i.closeButton)
    }, (ht = G?.close) != null ? ht : jAp) : null, (Se || d.icon || d.promise) && d.icon !== null && (G?.[Se] !== null || d.icon) ? Fg.createElement("div", {
        "data-icon": "",
        className: $Ge(H?.icon, d == null || (r = d.classNames) == null ? void 0 : r.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || lt() : null, d.type !== "loading" ? He : null) : null, Fg.createElement("div", {
        "data-content": "",
        className: $Ge(H?.content, d == null || (s = d.classNames) == null ? void 0 : s.content)
    }, Fg.createElement("div", {
        "data-title": "",
        className: $Ge(H?.title, d == null || (o = d.classNames) == null ? void 0 : o.title)
    }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? Fg.createElement("div", {
        "data-description": "",
        className: $Ge(O, Ie, H?.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), Fg.isValidElement(d.cancel) ? d.cancel : d.cancel && mHr(d.cancel) ? Fg.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || A,
        onClick: (Ae)=>{
            mHr(d.cancel) && Pe && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, Ae), Xe());
        },
        className: $Ge(H?.cancelButton, d == null || (l = d.classNames) == null ? void 0 : l.cancelButton)
    }, d.cancel.label) : null, Fg.isValidElement(d.action) ? d.action : d.action && mHr(d.action) ? Fg.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || P,
        onClick: (Ae)=>{
            mHr(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, Ae), !Ae.defaultPrevented && Xe());
        },
        className: $Ge(H?.actionButton, d == null || (c = d.classNames) == null ? void 0 : c.actionButton)
    }, d.action.label) : null);
}, nRp = Fg.forwardRef(function(e, n) {
    const { id: i, invert: r, position: s = "bottom-right", hotkey: o = [
        "altKey",
        "KeyT"
    ], expand: a, closeButton: l, className: c, offset: u, mobileOffset: d, theme: h = "light", richColors: p, duration: g, style: f, visibleToasts: _ = KAp, toastOptions: b, dir: y = MAp(), gap: S = QAp, icons: k, containerAriaLabel: C = "Notifications" } = e, [T, I] = Fg.useState([]), A = Fg.useMemo(()=>i ? T.filter((Q)=>Q.toasterId === i) : T.filter((Q)=>!Q.toasterId), [
        T,
        i
    ]), P = Fg.useMemo(()=>Array.from(new Set([
            s
        ].concat(A.filter((Q)=>Q.position).map((Q)=>Q.position)))), [
        A,
        s
    ]), [M, O] = Fg.useState([]), [N, U] = Fg.useState(!1), [j, $] = Fg.useState(!1), [H, G] = Fg.useState(h !== "system" ? h : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = Fg.useRef(null), K = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), V = Fg.useRef(null), Y = Fg.useRef(!1), J = Fg.useCallback((Q)=>{
        I((te)=>{
            var ee;
            return (ee = te.find((re)=>re.id === Q.id)) != null && ee.delete || Jhe.dismiss(Q.id), te.filter(({ id: re })=>re !== Q.id);
        });
    }, []);
    return Fg.useEffect(()=>Jhe.subscribe((Q)=>{
            if (Q.dismiss) {
                requestAnimationFrame(()=>{
                    I((te)=>te.map((ee)=>ee.id === Q.id ? {
                                ...ee,
                                delete: !0
                            } : ee));
                });
                return;
            }
            setTimeout(()=>{
                fT1.flushSync(()=>{
                    I((te)=>{
                        const ee = te.findIndex((re)=>re.id === Q.id);
                        return ee !== -1 ? [
                            ...te.slice(0, ee),
                            {
                                ...te[ee],
                                ...Q
                            },
                            ...te.slice(ee + 1)
                        ] : [
                            Q,
                            ...te
                        ];
                    });
                });
            });
        }), [
        T
    ]), Fg.useEffect(()=>{
        if (h !== "system") {
            G(h);
            return;
        }
        if (h === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? G("dark") : G("light")), typeof window > "u") return;
        const Q = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            Q.addEventListener("change", ({ matches: te })=>{
                G(te ? "dark" : "light");
            });
        } catch  {
            Q.addListener(({ matches: ee })=>{
                try {
                    G(ee ? "dark" : "light");
                } catch (re) {
                    console.error(re);
                }
            });
        }
    }, [
        h
    ]), Fg.useEffect(()=>{
        T.length <= 1 && U(!1);
    }, [
        T
    ]), Fg.useEffect(()=>{
        const Q = (te)=>{
            var ee;
            if (o.every((oe)=>te[oe] || te.code === oe)) {
                var ie;
                U(!0), (ie = q.current) == null || ie.focus();
            }
            te.code === "Escape" && (document.activeElement === q.current || (ee = q.current) != null && ee.contains(document.activeElement)) && U(!1);
        };
        return document.addEventListener("keydown", Q), ()=>document.removeEventListener("keydown", Q);
    }, [
        o
    ]), Fg.useEffect(()=>{
        if (q.current) return ()=>{
            V.current && (V.current.focus({
                preventScroll: !0
            }), V.current = null, Y.current = !1);
        };
    }, [
        q.current
    ]), Fg.createElement("section", {
        ref: n,
        "aria-label": `${C} ${K}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map((Q, te)=>{
        var ee;
        const [re, ie] = Q.split("-");
        return A.length ? Fg.createElement("ol", {
            key: Q,
            dir: y === "auto" ? MAp() : y,
            tabIndex: -1,
            ref: q,
            className: c,
            "data-sonner-toaster": !0,
            "data-sonner-theme": H,
            "data-y-position": re,
            "data-x-position": ie,
            style: {
                "--front-toast-height": `${((ee = M[0]) == null ? void 0 : ee.height) || 0}px`,
                "--width": `${ZAp}px`,
                "--gap": `${S}px`,
                ...f,
                ...bT1(u, d)
            },
            onBlur: (oe)=>{
                Y.current && !oe.currentTarget.contains(oe.relatedTarget) && (Y.current = !1, V.current && (V.current.focus({
                    preventScroll: !0
                }), V.current = null));
            },
            onFocus: (oe)=>{
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || Y.current || (Y.current = !0, V.current = oe.relatedTarget);
            },
            onMouseEnter: ()=>U(!0),
            onMouseMove: ()=>U(!0),
            onMouseLeave: ()=>{
                j || U(!1);
            },
            onDragEnd: ()=>U(!1),
            onPointerDown: (oe)=>{
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || $(!0);
            },
            onPointerUp: ()=>$(!1)
        }, A.filter((oe)=>!oe.position && te === 0 || oe.position === Q).map((oe, se)=>{
            var le, ce;
            return Fg.createElement(tRp, {
                key: oe.id,
                icons: k,
                index: se,
                toast: oe,
                defaultRichColors: p,
                duration: (le = b?.duration) != null ? le : g,
                className: b?.className,
                descriptionClassName: b?.descriptionClassName,
                invert: r,
                visibleToasts: _,
                closeButton: (ce = b?.closeButton) != null ? ce : l,
                interacting: j,
                position: Q,
                style: b?.style,
                unstyled: b?.unstyled,
                classNames: b?.classNames,
                cancelButtonStyle: b?.cancelButtonStyle,
                actionButtonStyle: b?.actionButtonStyle,
                closeButtonAriaLabel: b?.closeButtonAriaLabel,
                removeToast: J,
                toasts: A.filter((ae)=>ae.position == oe.position),
                heights: M.filter((ae)=>ae.position == oe.position),
                setHeights: O,
                expandByDefault: a,
                gap: S,
                expanded: N,
                swipeDirections: e.swipeDirections
            });
        })) : null;
    }));
});

}
