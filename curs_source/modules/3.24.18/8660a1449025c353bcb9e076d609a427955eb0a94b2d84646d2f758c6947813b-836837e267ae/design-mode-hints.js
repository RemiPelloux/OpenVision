import { Di } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var H5i, bfv, yfv;
export { H5i, bfv, yfv };
var __wakaru_Sfv_initialized = false;
export function Sfv() {
if (__wakaru_Sfv_initialized) return;
__wakaru_Sfv_initialized = true;
"use strict";
E(), Di(), H5i = [
    {
        key: "Esc"
    },
    " to cancel"
], bfv = [
    {
        key: "\u2318Z"
    },
    " to undo \xB7 ",
    {
        key: "Esc"
    },
    " to stop"
], yfv = {
    idle: [
        {
            key: "Click"
        },
        " to select or ",
        {
            key: "drag"
        },
        " to create an area \xB7 ",
        {
            key: "\u2191\u2193"
        },
        " to adjust"
    ],
    "region-drawing": H5i,
    "region-selected": H5i,
    "region-markup": [
        {
            key: "Ctrl+Z"
        },
        " to undo \xB7 ",
        {
            key: "Esc"
        },
        " to stop"
    ],
    "element-selected": H5i,
    "text-selected": [
        {
            key: "Double-click"
        },
        " to edit text \xB7 ",
        {
            key: "Esc"
        },
        " to cancel"
    ],
    "stroke-selected": H5i,
    "text-editing": [
        {
            key: "Return"
        },
        " to save \xB7 ",
        {
            key: "Esc"
        },
        " to cancel"
    ],
    "annotation-open": [
        {
            key: "Return"
        },
        " to save \xB7 ",
        {
            key: "Esc"
        },
        " to close"
    ]
};

}
