import { Ja } from "./constants.js";
import { DZe } from "./extensionsApiProposals.js";
import { E2 } from "./extensions_2.js";
import { Ne } from "./nls.js";
import { Ft } from "./resources.js";
import { t2 } from "./semver.js";
import { jk } from "./severity_2.js";
import { h } from "./tslib.es6.js";
var I2, i_e;
export { I2, i_e };
var __wakaru_BZe_initialized = false;
export function BZe() {
if (__wakaru_BZe_initialized) return;
__wakaru_BZe_initialized = true;
"use strict";
h(), Ja(), Ft(), jk(), Ne(), t2(), E2(), DZe(), I2 = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/, i_e = /^-(\d{4})(\d{2})(\d{2})$/;

}
