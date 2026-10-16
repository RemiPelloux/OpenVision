import { Point, init_Point } from "./Point.js";
import { Shape, init_Shape } from "./Shape.js";
var LineDirection, Line;
export { Line, LineDirection };
var __wakaru_init_Line_initialized = false;
export function init_Line() {
if (__wakaru_init_Line_initialized) return;
__wakaru_init_Line_initialized = true;
init_Point();
init_Shape();
(function(LineDirection2) {
    LineDirection2[LineDirection2["None"] = 0] = "None";
    LineDirection2[LineDirection2["Horizontal"] = 1] = "Horizontal";
    LineDirection2[LineDirection2["Vertical"] = 2] = "Vertical";
})(LineDirection || (LineDirection = {}));
Line = class _Line extends Shape {
    from;
    to;
    direction = LineDirection.None;
    length = 0;
    intersections = [];
    gaps = [];
    constructor(from2, to3){
        super();
        this.from = from2;
        this.to = to3;
        this.init();
    }
    init() {
        let from2 = this.from;
        let to3 = this.to;
        if (Math.abs(from2.y - to3.y) < Shape.tolerance) {
            this.direction = LineDirection.Horizontal;
            to3.y = from2.y;
            if (from2.x > to3.x) {
                const temp = from2;
                from2 = to3;
                to3 = temp;
            }
            this.length = to3.x - from2.x;
        } else if (Math.abs(from2.x - to3.x) < Shape.tolerance) {
            this.direction = LineDirection.Vertical;
            to3.x = from2.x;
            if (from2.y > to3.y) {
                const temp = from2;
                from2 = to3;
                to3 = temp;
            }
            this.length = to3.y - from2.y;
        }
        this.from = from2;
        this.to = to3;
    }
    _valid = void 0;
    get valid() {
        if (this._valid === void 0) {
            this._valid = this.direction !== LineDirection.None && this.length > Shape.tolerance;
        }
        return this._valid;
    }
    get normalized() {
        if (this.direction === LineDirection.Horizontal) {
            return new _Line(new Point(this.from.x - Shape.tolerance, this.from.y), new Point(this.to.x + Shape.tolerance, this.from.y));
        } else if (this.direction === LineDirection.Vertical) {
            return new _Line(new Point(this.from.x, this.from.y - Shape.tolerance), new Point(this.from.x, this.to.y + Shape.tolerance));
        }
        return this;
    }
    addGap(line) {
        this.gaps.push(line);
    }
    containsPoint(p2) {
        if (this.direction === LineDirection.Vertical) {
            return this.from.x === p2.x && p2.y >= this.from.y && p2.y <= this.to.y;
        } else if (this.direction === LineDirection.Horizontal) {
            return this.from.y === p2.y && p2.x >= this.from.x && p2.x <= this.to.x;
        }
        return false;
    }
    addIntersectionPoint(point) {
        for (const intPoint of this.intersections){
            if (intPoint.equal(point)) return;
        }
        this.intersections.push(point);
    }
    intersection(line) {
        let result;
        if (!this.valid || !line.valid) {
            return result;
        }
        const thisNormalized = this.normalized;
        const lineNormalized = line.normalized;
        if (this.direction === LineDirection.Horizontal && line.direction === LineDirection.Vertical) {
            const x = lineNormalized.from.x;
            const y = thisNormalized.from.y;
            const isOk = x > thisNormalized.from.x && x < thisNormalized.to.x && y > lineNormalized.from.y && y < lineNormalized.to.y;
            if (isOk) {
                const intPoint = new Point(x, y);
                this.addIntersectionPoint(intPoint);
                line.addIntersectionPoint(intPoint);
                result = intPoint;
            }
        } else if (this.direction === LineDirection.Vertical && line.direction === LineDirection.Horizontal) {
            const x = thisNormalized.from.x;
            const y = lineNormalized.from.y;
            const isOk = x > lineNormalized.from.x && x < lineNormalized.to.x && y > thisNormalized.from.y && y < thisNormalized.to.y;
            if (isOk) {
                const intPoint = new Point(x, y);
                this.addIntersectionPoint(intPoint);
                line.addIntersectionPoint(intPoint);
                result = intPoint;
            }
        }
        return result;
    }
    transform(matrix) {
        const p1 = this.from.transform(matrix);
        const p2 = this.to.transform(matrix);
        const x = Math.min(p1.x, p2.x);
        const y = Math.min(p1.y, p2.y);
        const width = Math.abs(p1.x - p2.x);
        const height = Math.abs(p1.y - p2.y);
        this.from = new Point(x, y);
        this.to = new Point(x + width, y + height);
        this.init();
        return this;
    }
};

}
