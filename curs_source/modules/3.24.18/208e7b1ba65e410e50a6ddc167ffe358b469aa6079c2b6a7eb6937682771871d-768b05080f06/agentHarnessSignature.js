import { IA } from "./agentHarnessErrno.js";
import { MV } from "./agentHarnessManifest.js";
import { h } from "./tslib.es6.js";
var Ts, BA, GA, OV, Vi, VA, LV, $A, jA, Fd, HA;
export { $A, BA, Fd, GA, HA, LV, OV, Ts, VA, Vi, jA };
var __wakaru_qA_initialized = false;
export function qA() {
if (__wakaru_qA_initialized) return;
__wakaru_qA_initialized = true;
"use strict";
h(), IA(), MV(), Ts = "manifest.sig", BA = "application/vnd.cursor.agent-harness.manifest+json", GA = 1, OV = "ecdsa-p256-sha256", Vi = {
    bytes: 16 * 1024,
    signatures: 8,
    keyId: 64,
    algorithm: 64,
    signature: 256
}, VA = /^[A-Za-z0-9._-]+$/, LV = /^[A-Za-z0-9+/]+={0,2}$/, $A = [
    {
        keyId: "harness-prod-1",
        spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAED+hfLq9Hmi9Lc/tHqO9nNNaKb/Y9UiJ3OJKflOhVsnJck0aLox8SYnE6dY6qgeSv0LAgUNGSBHlEjtr7U5nJ0g=="
    },
    {
        keyId: "harness-standby-1",
        spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErZJDN/jiDTP13zIP1nhdVHUogD5CKlMmFkdtvl7nR7w1ukb0DqavYsrp63pudRGrXoVv2LLUi+TnaHoSQURX+g=="
    }
], jA = {
    keyId: "harness-dev-only-1",
    spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEOgqYCkjo2I6HlIeMuNoY5HlRwm0kCWlRqsp6TRpFXDZFyO68/9QfIbQg3vl/V6MAkTKMY0LRzqlrViKpfIRsvA=="
}, Fd = "agent-harness-trust-dev-key", HA = `${Ts} is more than ${Vi.bytes} bytes`;

}
