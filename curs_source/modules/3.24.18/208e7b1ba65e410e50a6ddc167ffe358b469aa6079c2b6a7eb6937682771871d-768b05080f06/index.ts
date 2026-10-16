import { cBe } from "./agent-store-ids.ts";
import { lBe } from "./auto-spillover-ui.ts";
import { _Be } from "./desktop-bridge.ts";
import { vBe } from "./environment-setup.ts";
import { TBe } from "./glass-perf-vote-config.ts";
import { ABe } from "./permissions.ts";
import { PBe } from "./retry.ts";
import { h } from "./tslib.es6.js";
var __wakaru_Nc_initialized = false;
export function Nc() {
if (__wakaru_Nc_initialized) return;
__wakaru_Nc_initialized = true;
h(), cBe(), lBe(), _Be(), vBe(), TBe(), ABe(), PBe();

}
