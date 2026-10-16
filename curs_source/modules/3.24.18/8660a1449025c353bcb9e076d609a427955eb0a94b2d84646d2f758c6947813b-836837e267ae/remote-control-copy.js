import { yY } from "./date.js";
import { E } from "./tslib.es6.js";
var W5n, c5v, u5v, osc, d5v, asc, h5v, p5v, m5v, g5v, f5v, v5v, _5v, b5v, lsc, y5v, csc, S5v, k5v, w5v, C5v, T5v, E5v, I5v, usc, x5v, v4i, _4i, A5v, R5v, P5v;
export { A5v, C5v, E5v, I5v, P5v, R5v, S5v, T5v, W5n, _4i, _5v, asc, b5v, c5v, csc, d5v, f5v, g5v, h5v, k5v, lsc, m5v, osc, p5v, u5v, usc, v4i, v5v, w5v, x5v, y5v };
var __wakaru_dsc_initialized = false;
export function dsc() {
if (__wakaru_dsc_initialized) return;
__wakaru_dsc_initialized = true;
"use strict";
E(), yY(), W5n = "Remote Control", c5v = "Allow agents on this computer to be controlled remotely from mobile", u5v = "Turn Remote Control on again to reset this computer", osc = "Paired Devices", d5v = "No devices are currently paired with this computer.", asc = "Unnamed device", h5v = "Disconnect", p5v = "It won\u2019t be able to control this computer until it\u2019s authorized here again.", m5v = "&&Disconnect", g5v = "Disconnect from All Computers", f5v = "It won\u2019t be able to control any of your computers. To use it again, authorize it as a new device.", v5v = "&&Disconnect from All Computers", _5v = "Approve", b5v = "Reject", lsc = "Remote Control runs on a cloud agent, which requires data storage that your current privacy mode disables", y5v = "Enable Remote Control for this computer", csc = "Allow agents on this computer to be controlled from your other devices", S5v = "Disable Remote Control on all of my computers", k5v = "Unregisters every computer on your account; you can register any of them again later", w5v = "Unregister All", C5v = "Disable Remote Control on all of your computers?", T5v = "This will turn off Remote Control on every computer associated with your account.", E5v = "&&Unregister All", I5v = "Couldn\u2019t unregister some computers. Try again.", usc = "Computer Name", x5v = "Change how this computer appears on other devices", v4i = {
    sectionTitle: W5n,
    workersLabel: W5n,
    workersDescription: c5v
}, _4i = {
    sectionTitle: "Self-Hosted Workers",
    workersLabel: "Enable local self-hosted workers",
    workersDescription: "Allow cloud agents to run in your local environment."
}, A5v = {
    disconnected: {
        label: "Offline",
        variant: "warn"
    },
    connecting: {
        label: "Connecting\u2026",
        variant: "neutral"
    },
    connected: {
        label: "Connected",
        variant: "success"
    },
    clockSkewed: {
        label: "Check Clock",
        variant: "warn"
    },
    otherWindow: {
        label: "Another Window",
        variant: "neutral"
    }
}, R5v = "Remote Control is running in another Cursor window", P5v = "This computer\u2019s clock is wrong; set the date and time automatically to connect";

}
