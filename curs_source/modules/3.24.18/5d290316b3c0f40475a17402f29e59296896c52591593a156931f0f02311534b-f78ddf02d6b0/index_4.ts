import { rg } from "./bash.ts";
import { Kr } from "./cache-env.ts";
import { Jr } from "./core_2.ts";
import { aw } from "./event-loop-pressure.ts";
import { rw } from "./ignore-mapping.ts";
import { ze } from "./index_2.ts";
import { G9 } from "./lazy.ts";
import { hg } from "./naive.ts";
import { $c } from "./network-policy-utils.ts";
import { fw } from "./policy-loader.ts";
import { en } from "./policy-merge.ts";
import { dl } from "./powershell.ts";
import { Ec } from "./ripgrep.ts";
import { Xr } from "./sandbox.ts";
import { h } from "./tslib.es6.js";
import { Yt } from "./types.ts";
import { Dc } from "./us.js";
import { ew } from "./zsh-light.ts";
import { _g } from "./zsh.ts";
var kg;
export { kg };
var __wakaru_ds_initialized = false;
export function ds() {
if (__wakaru_ds_initialized) return;
__wakaru_ds_initialized = true;
h(), ze(), rg(), G9(), hg(), dl(), Yt(), _g(), ew(), rg(), Jr(), rw(), hg(), aw(), dl(), Ec(), Kr(), Dc(), $c(), fw(), en(), Xr(), Yt(), _g(), kg = {
    perUser: {
        type: "insecure_none"
    }
};

}
