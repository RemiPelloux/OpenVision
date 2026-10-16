Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LinkedList = void 0;
class n {
    static{
        this.Undefined = new n(void 0);
    }
    constructor(e){
        this.element = e, this.next = n.Undefined, this.prev = n.Undefined;
    }
}
class i {
    constructor(){
        this._first = n.Undefined, this._last = n.Undefined, this._size = 0;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._first;
    }
    isEmpty() {
        return this._first === n.Undefined;
    }
    clear() {
        let e = this._first;
        for(; e !== n.Undefined;){
            const t = e.next;
            e.prev = n.Undefined, e.next = n.Undefined, e = t;
        }
        this._first = n.Undefined, this._last = n.Undefined, this._size = 0;
    }
    unshift(e) {
        return this._insert(e, !1);
    }
    push(e) {
        return this._insert(e, !0);
    }
    _insert(e, t) {
        const i = new n(e);
        if (this._first === n.Undefined) this._first = i, this._last = i;
        else if (t) {
            const e = this._last;
            this._last = i, i.prev = e, e.next = i;
        } else {
            const e = this._first;
            this._first = i, i.next = e, e.prev = i;
        }
        this._size += 1;
        let r = !1;
        return ()=>{
            r || (r = !0, this._remove(i));
        };
    }
    shift() {
        if (this._first !== n.Undefined) {
            const e = this._first.element;
            return this._remove(this._first), e;
        }
    }
    pop() {
        if (this._last !== n.Undefined) {
            const e = this._last.element;
            return this._remove(this._last), e;
        }
    }
    remove(e) {
        this._remove(e);
    }
    _remove(e) {
        if (e.prev !== n.Undefined && e.next !== n.Undefined) {
            const t = e.prev;
            t.next = e.next, e.next.prev = t;
        } else e.prev === n.Undefined && e.next === n.Undefined ? (this._first = n.Undefined, this._last = n.Undefined) : e.next === n.Undefined ? (this._last = this._last.prev, this._last.next = n.Undefined) : e.prev === n.Undefined && (this._first = this._first.next, this._first.prev = n.Undefined);
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let e = this._first;
        for(; e !== n.Undefined;)yield e.element, e = e.next;
    }
}
exports.LinkedList = i;
