import { Shape, init_Shape } from "./Shape.js";
var Point;
export { Point };
var __wakaru_init_Point_initialized = false;
export function init_Point() {
if (__wakaru_init_Point_initialized) return;
__wakaru_init_Point_initialized = true;
init_Shape();
Point = class extends Shape {
    x;
    y;
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    equal(point) {
        return point.x === this.x && point.y === this.y;
    }
    transform(matrix) {
        const p2 = Shape.applyTransform([
            this.x,
            this.y
        ], matrix);
        this.x = p2[0];
        this.y = p2[1];
        return this;
    }
};

}
