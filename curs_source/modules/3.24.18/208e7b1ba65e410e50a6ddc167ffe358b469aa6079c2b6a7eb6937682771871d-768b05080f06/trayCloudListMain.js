import { Kat } from "./background_composer_connectweb.js";
import { Gf } from "./background_composer_pb.js";
import { Vy } from "./connect.js";
import { Tu } from "./firstWindowStartup.js";
import { Hat } from "./index_7.ts";
import { Jat } from "./trayCloudVisibility.js";
import { vE } from "./trayMenuState.js";
import { h } from "./tslib.es6.js";
var rOe, sU, GE, iU;
export { GE, iU, rOe, sU };
var __wakaru_iot_initialized = false;
export function iot() {
if (__wakaru_iot_initialized) return;
__wakaru_iot_initialized = true;
"use strict";
h(), Vy(), Hat(), Kat(), Gf(), Tu(), vE(), Jat(), rOe = "https://api2.cursor.sh", sU = "00000000", GE = 15e3, iU = 100;

}
