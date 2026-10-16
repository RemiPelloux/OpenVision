import { rI } from "./api.js";
import { vW } from "./clientreport.js";
import { yk } from "./constants_2.js";
import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { oi } from "./dsn.js";
import { co } from "./dynamicSamplingContext.js";
import { hs } from "./envelope.js";
import { zC } from "./envelope_2.js";
import { TW } from "./eventUtils.js";
import { ar } from "./integration.js";
import { Fp } from "./internal.js";
import { aI } from "./internal_2.js";
import { fn } from "./is.js";
import { OC } from "./merge.js";
import { es } from "./misc.js";
import { Op } from "./parseSampleRate.js";
import { nI } from "./prepareEvent.js";
import { dk } from "./session.js";
import { VC } from "./should-ignore-span.js";
import { sr } from "./spanUtils.js";
import { xp } from "./syncpromise.js";
import { UFe } from "./transactionEvent.js";
import { h } from "./tslib.es6.js";
var xFe, FFe;
export { FFe, xFe };
var __wakaru_kW_initialized = false;
export function kW() {
if (__wakaru_kW_initialized) return;
__wakaru_kW_initialized = true;
"use strict";
h(), rI(), yk(), dt(), gt(), zC(), ar(), Fp(), aI(), dk(), co(), vW(), Ke(), oi(), hs(), TW(), fn(), OC(), es(), Op(), nI(), VC(), sr(), xp(), UFe(), xFe = Symbol.for("SentryInternalError"), FFe = Symbol.for("SentryDoNotSendEventError");

}
