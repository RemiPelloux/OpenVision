import { createContext } from "../storage/instruments.js";
import { init_dist } from "../../../context/dist/index.js";
var realHarnessClock;
export { realHarnessClock };
var __wakaru_init_clock_initialized = false;
export function init_clock() {
if (__wakaru_init_clock_initialized) return;
__wakaru_init_clock_initialized = true;
"use strict";
init_dist();
realHarnessClock = {
    schedule (delayMs, fn) {
        const [deadline, cancel] = createContext().withTimeoutAndCancel(delayMs);
        let disposed = false;
        deadline.signal.addEventListener("abort", ()=>{
            if (!disposed) {
                fn();
            }
        }, {
            once: true
        });
        return {
            dispose () {
                disposed = true;
                cancel();
            }
        };
    }
};

}
