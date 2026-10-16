require.d(exports, {
    default: ()=>f
});
var r = require(63652);
async function f(t) {
    const e = Buffer.isBuffer(t.bytes) ? t.bytes : Buffer.from(t.bytes), s = new r.Cm({
        data: e
    });
    try {
        const t = await s.getText();
        return {
            text: "string" == typeof t.text ? t.text : ""
        };
    } finally{
        await s.destroy();
    }
}
