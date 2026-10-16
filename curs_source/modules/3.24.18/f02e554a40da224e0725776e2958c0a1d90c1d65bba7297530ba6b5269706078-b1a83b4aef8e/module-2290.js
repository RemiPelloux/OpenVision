"use strict";
const e = 2047;
class r {
    constructor(){
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & e) === this.bottom;
    }
    push(t) {
        this.list[this.top] = t, this.top = this.top + 1 & e;
    }
    shift() {
        const t = this.list[this.bottom];
        return void 0 === t ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & e, t);
    }
}
module.exports = class {
    constructor(){
        this.head = this.tail = new r;
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(t) {
        this.head.isFull() && (this.head = this.head.next = new r), this.head.push(t);
    }
    shift() {
        const t = this.tail, e = t.shift();
        return t.isEmpty() && null !== t.next && (this.tail = t.next), e;
    }
};
