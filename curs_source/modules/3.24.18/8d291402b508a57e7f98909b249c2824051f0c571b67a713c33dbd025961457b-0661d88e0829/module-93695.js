require.r(exports), require.d(exports, {
    createPrivateInferenceLoopClient: ()=>p
});
var i = require(37949), a = require(33002), o = require(98691), r = require(82714), s = require(89117), c = require(94698);
const d = (0, i.h)("agent-host:private-inference");
async function p(e) {
    const t = e.piOptions.decision;
    if ("fail-closed" === t.kind || "enrollment-pending" === t.kind) return l(e, t.configErrorDetail);
    try {
        const n = await (0, s._x)({
            configFile: t.configFile,
            env: e.piOptions.env,
            ...void 0 !== e.piOptions.onCatalogParsed ? {
                onCatalogParsed: e.piOptions.onCatalogParsed
            } : {}
        }), i = new r.Zy;
        return d.info((0, a.q6)(), "Private inference construction active"), (0, o.x)({
            sessionProvider: (0, s.uK)(n),
            catalog: n,
            promptQualityCaptures: i,
            getPrivacyModeEnum: ()=>e.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
            attachAttemptContext: e.attachAttemptContext,
            ...void 0 === e.backendClients.privateInferenceBackend || void 0 === e.host.privateInferenceUsage ? {} : {
                usageAdmission: (0, c.$)(e.backendClients.privateInferenceBackend, e.host.privateInferenceUsage)
            }
        });
    } catch (t) {
        const n = t instanceof Error ? t.message : String(t);
        return l(e, n);
    }
}
function l(e, t) {
    return d.info((0, a.q6)(), `Private inference unusable. Turns will fail: ${t}`), (0, o.x)({
        sessionProvider: void 0,
        catalog: void 0,
        configErrorDetail: t,
        getPrivacyModeEnum: ()=>e.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
        attachAttemptContext: e.attachAttemptContext
    });
}
