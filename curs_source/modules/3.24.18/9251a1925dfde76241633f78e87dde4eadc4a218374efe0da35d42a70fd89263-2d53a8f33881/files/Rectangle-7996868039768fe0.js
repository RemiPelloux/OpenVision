import { Line, init_Line } from "./Line.js";
import { Point, init_Point } from "./Point.js";
import { Shape, init_Shape } from "./Shape.js";
var Rectangle;
export { Rectangle };
var __wakaru_init_Rectangle_initialized = false;
export function init_Rectangle() {
if (__wakaru_init_Rectangle_initialized) return;
__wakaru_init_Rectangle_initialized = true;
init_Line();
init_Point();
init_Shape();
Rectangle = class extends Shape {
    from;
    width;
    height;
    constructor(from2, width, height){
        super();
        this.from = from2;
        this.width = width;
        this.height = height;
    }
    get to() {
        return new Point(this.from.x + this.width, this.from.y + this.height);
    }
    getLines() {
        const to3 = this.to;
        const lines2 = [
            new Line(this.from, new Point(to3.x, this.from.y)),
            new Line(this.from, new Point(this.from.x, to3.y)),
            new Line(new Point(to3.x, this.from.y), to3),
            new Line(new Point(this.from.x, to3.y), to3)
        ];
        return lines2.filter((l)=>l.valid);
    }
    transform(matrix) {
        const p1 = Shape.applyTransform([
            this.from.x,
            this.from.y
        ], matrix);
        const p2 = Shape.applyTransform([
            this.from.x + this.width,
            this.from.y + this.height
        ], matrix);
        const x = Math.min(p1[0], p2[0]);
        const y = Math.min(p1[1], p2[1]);
        const width = Math.abs(p1[0] - p2[0]);
        const height = Math.abs(p1[1] - p2[1]);
        this.from = new Point(x, y);
        this.width = width;
        this.height = height;
        return this;
    }
};

}
