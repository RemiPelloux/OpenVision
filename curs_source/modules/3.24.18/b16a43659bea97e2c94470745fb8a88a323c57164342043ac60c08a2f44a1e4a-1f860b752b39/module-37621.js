require.r(exports), require.d(exports, {
    PNGColorType: ()=>n,
    PNGFilterType: ()=>r,
    default: ()=>h
});
var r, n, s = require("./module-57559.js");
function h() {
    return {
        mime: "image/png",
        hasAlpha: !0,
        encode: (t, { deflateLevel: e = 9, deflateStrategy: i = 3, filterType: h = r.AUTO, colorType: o, inputHasAlpha: a = !0, ...l } = {})=>{
            const f = new s.O({
                width: t.width,
                height: t.height
            });
            return f.data = t.data, s.O.sync.write(f, {
                ...l,
                deflateLevel: e,
                deflateStrategy: i,
                filterType: h,
                colorType: void 0 !== o ? o : a ? n.COLOR_ALPHA : n.COLOR,
                inputHasAlpha: a
            });
        },
        decode: (t, e)=>{
            const i = s.O.sync.read(t, e);
            return {
                data: i.data,
                width: i.width,
                height: i.height
            };
        }
    };
}
!function(t) {
    t[t.AUTO = -1] = "AUTO", t[t.NONE = 0] = "NONE", t[t.SUB = 1] = "SUB", t[t.UP = 2] = "UP", t[t.AVERAGE = 3] = "AVERAGE", t[t.PATH = 4] = "PATH";
}(r || (r = {})), function(t) {
    t[t.GRAYSCALE = 0] = "GRAYSCALE", t[t.COLOR = 2] = "COLOR", t[t.GRAYSCALE_ALPHA = 4] = "GRAYSCALE_ALPHA", t[t.COLOR_ALPHA = 6] = "COLOR_ALPHA";
}(n || (n = {}));
