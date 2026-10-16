require.r(exports);
require.d(exports, {
    assert: ()=>assert,
    assertFloat32: ()=>assertFloat32,
    assertInt32: ()=>assertInt32,
    assertUInt32: ()=>assertUInt32
});
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
const FLOAT32_MAX = 34028234663852886e22, FLOAT32_MIN = -34028234663852886e22, UINT32_MAX = 4294967295, INT32_MAX = 2147483647, INT32_MIN = -2147483648;
function assertInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid int 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN) throw new Error("invalid int 32: " + arg);
}
function assertUInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid uint 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0) throw new Error("invalid uint 32: " + arg);
}
function assertFloat32(arg) {
    if (typeof arg !== "number") throw new Error("invalid float 32: " + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > FLOAT32_MAX || arg < FLOAT32_MIN) throw new Error("invalid float 32: " + arg);
}
