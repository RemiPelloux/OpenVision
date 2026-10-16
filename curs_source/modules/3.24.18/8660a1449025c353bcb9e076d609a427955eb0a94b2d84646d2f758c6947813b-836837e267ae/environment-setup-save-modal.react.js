import { zt } from "./LYd.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { jsx as h3 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var oJv;
export { oJv };
var __wakaru__hc_initialized = false;
export function _hc() {
if (__wakaru__hc_initialized) return;
__wakaru__hc_initialized = true;
"use strict";
E(), Mt(), oJv = [
    {
        value: "team",
        label: "Team",
        leading: h3(zt, {
            "aria-hidden": !0,
            color: "secondary",
            name: "briefcase",
            size: "sm"
        }),
        trailing: h3("span", {
            className: "glass-euugli glass-4b2ntj glass-b3r6kr glass-lyipyv glass-uxw1ft",
            children: "Anyone in team can access"
        })
    },
    {
        value: "personal",
        label: "Personal",
        leading: h3(zt, {
            "aria-hidden": !0,
            color: "secondary",
            name: "person",
            size: "sm"
        }),
        trailing: h3("span", {
            className: "glass-euugli glass-4b2ntj glass-b3r6kr glass-lyipyv glass-uxw1ft",
            children: "Only you can access"
        })
    }
];

}
