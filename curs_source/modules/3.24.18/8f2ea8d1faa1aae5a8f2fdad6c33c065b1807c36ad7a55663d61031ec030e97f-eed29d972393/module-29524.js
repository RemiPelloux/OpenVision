require.d(exports, {
    registerWebpCodecWithStartupDiagnostics: ()=>c
});
var t = require(37949), o = require(91105);
const a = (0, t.h)("cursor-agent-host");
function c(e) {
    const r = (0, o.Zu2)();
    r.registered ? a.info(e, "webp_codec.startup", {
        registered: !0
    }) : a.error(e, "webp_codec.startup.unavailable", {
        registered: !1,
        reason: r.reason,
        platform: process.platform,
        arch: process.arch
    });
}
