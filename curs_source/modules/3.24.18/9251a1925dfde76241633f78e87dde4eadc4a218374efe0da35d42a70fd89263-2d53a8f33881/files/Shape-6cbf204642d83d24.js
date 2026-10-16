var Shape;
export { Shape };
var __wakaru_init_Shape_initialized = false;
export function init_Shape() {
if (__wakaru_init_Shape_initialized) return;
__wakaru_init_Shape_initialized = true;
Shape = class {
    static tolerance = 2;
    static applyTransform(p2, m2) {
        const xt2 = p2[0] * m2[0] + p2[1] * m2[2] + m2[4];
        const yt2 = p2[0] * m2[1] + p2[1] * m2[3] + m2[5];
        return [
            xt2,
            yt2
        ];
    }
};

}
