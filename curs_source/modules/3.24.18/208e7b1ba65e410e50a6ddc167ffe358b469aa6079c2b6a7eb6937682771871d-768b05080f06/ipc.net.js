import { ae, it } from "./buffer.js";
import { N, se } from "./event.js";
import { Qr, m0 } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
function Ya() {
    return _T || (_T = ae.alloc(0)), _T;
}
function z3(e) {
    switch(e){
        case 0:
            return "None";
        case 1:
            return "Regular";
        case 2:
            return "Control";
        case 3:
            return "Ack";
        case 5:
            return "Disconnect";
        case 6:
            return "ReplayRequest";
        case 7:
            return "PauseWriting";
        case 8:
            return "ResumeWriting";
        case 9:
            return "KeepAlive";
    }
}
var h0, _T, Y3, Ms, vT, TT, g0, J3, Kl, X3, Q3, kT, Z3, eF;
export { J3, Kl, Ms, Q3, TT, X3, Y3, Ya, Z3, _T, eF, g0, h0, kT, vT, z3 };
var __wakaru_tF_initialized = false;
export function tF() {
if (__wakaru_tF_initialized) return;
__wakaru_tF_initialized = true;
"use strict";
h(), it(), se(), j(), Qr(), ((e)=>{
    e.enableDiagnostics = !1, e.records = [];
    const t = new WeakMap;
    let n = 0;
    function r(i, a) {
        if (!t.has(i)) {
            const o = String(++n);
            t.set(i, o);
        }
        return t.get(i);
    }
    function s(i, a, o, l) {
        if (!e.enableDiagnostics) return;
        const d = r(i, a);
        if (l instanceof ae || l instanceof Uint8Array || l instanceof ArrayBuffer || ArrayBuffer.isView(l)) {
            const u = ae.alloc(l.byteLength);
            u.set(l), e.records.push({
                timestamp: Date.now(),
                id: d,
                label: a,
                type: o,
                buff: u
            });
        } else e.records.push({
            timestamp: Date.now(),
            id: d,
            label: a,
            type: o,
            data: l
        });
    }
    e.traceSocketEvent = s;
})(h0 || (h0 = {})), _T = null, Y3 = class {
    get byteLength() {
        return this._totalLength;
    }
    constructor(){
        this._chunks = [], this._totalLength = 0;
    }
    acceptChunk(e) {
        this._chunks.push(e), this._totalLength += e.byteLength;
    }
    read(e) {
        return this._read(e, !0);
    }
    peek(e) {
        return this._read(e, !1);
    }
    _read(e, t) {
        if (e === 0) return Ya();
        if (e > this._totalLength) throw new Error("Cannot read so many bytes!");
        if (this._chunks[0].byteLength === e) {
            const i = this._chunks[0];
            return t && (this._chunks.shift(), this._totalLength -= e), i;
        }
        if (this._chunks[0].byteLength > e) {
            const i = this._chunks[0].slice(0, e);
            return t && (this._chunks[0] = this._chunks[0].slice(e), this._totalLength -= e), i;
        }
        const n = ae.alloc(e);
        let r = 0, s = 0;
        for(; e > 0;){
            const i = this._chunks[s];
            if (i.byteLength > e) {
                const a = i.slice(0, e);
                n.set(a, r), r += e, t && (this._chunks[s] = i.slice(e), this._totalLength -= e), e -= e;
            } else n.set(i, r), r += i.byteLength, t ? (this._chunks.shift(), this._totalLength -= i.byteLength) : s++, e -= i.byteLength;
        }
        return n;
    }
}, Ms = class {
    constructor(e, t, n, r){
        this.type = e, this.id = t, this.ack = n, this.data = r, this.writtenTime = 0;
    }
    get size() {
        return this.data.byteLength;
    }
}, vT = class extends J {
    constructor(e){
        super(), this._onMessage = this._register(new N), this.onMessage = this._onMessage.event, this._state = {
            readHead: !0,
            readLen: 13,
            messageType: 0,
            id: 0,
            ack: 0
        }, this._socket = e, this._isDisposed = !1, this._incomingData = new Y3, this._register(this._socket.onData((t)=>this.acceptChunk(t))), this.lastReadTime = Date.now();
    }
    acceptChunk(e) {
        if (!(!e || e.byteLength === 0)) for(this.lastReadTime = Date.now(), this._incomingData.acceptChunk(e); this._incomingData.byteLength >= this._state.readLen;){
            const t = this._incomingData.read(this._state.readLen);
            if (this._state.readHead) this._state.readHead = !1, this._state.readLen = t.readUInt32BE(9), this._state.messageType = t.readUInt8(0), this._state.id = t.readUInt32BE(1), this._state.ack = t.readUInt32BE(5), this._socket.traceSocketEvent("protocolHeaderRead", {
                messageType: z3(this._state.messageType),
                id: this._state.id,
                ack: this._state.ack,
                messageSize: this._state.readLen
            });
            else {
                const n = this._state.messageType, r = this._state.id, s = this._state.ack;
                if (this._state.readHead = !0, this._state.readLen = 13, this._state.messageType = 0, this._state.id = 0, this._state.ack = 0, this._socket.traceSocketEvent("protocolMessageRead", t), this._onMessage.fire(new Ms(n, r, s, t)), this._isDisposed) break;
            }
        }
    }
    readEntireBuffer() {
        return this._incomingData.read(this._incomingData.byteLength);
    }
    dispose() {
        this._isDisposed = !0, super.dispose();
    }
}, TT = class {
    constructor(e){
        this._writeNowTimeout = null, this._isDisposed = !1, this._isPaused = !1, this._socket = e, this._data = [], this._totalLength = 0, this.lastWriteTime = 0;
    }
    dispose() {
        try {
            this.flush();
        } catch  {}
        this._isDisposed = !0;
    }
    drain() {
        return this.flush(), this._socket.drain();
    }
    flush() {
        this._writeNow();
    }
    pause() {
        this._isPaused = !0;
    }
    resume() {
        this._isPaused = !1, this._scheduleWriting();
    }
    write(e) {
        if (this._isDisposed) return;
        e.writtenTime = Date.now(), this.lastWriteTime = Date.now();
        const t = ae.alloc(13);
        t.writeUInt8(e.type, 0), t.writeUInt32BE(e.id, 1), t.writeUInt32BE(e.ack, 5), t.writeUInt32BE(e.data.byteLength, 9), this._socket.traceSocketEvent("protocolHeaderWrite", {
            messageType: z3(e.type),
            id: e.id,
            ack: e.ack,
            messageSize: e.data.byteLength
        }), this._socket.traceSocketEvent("protocolMessageWrite", e.data), this._writeSoon(t, e.data);
    }
    _bufferAdd(e, t) {
        const n = this._totalLength === 0;
        return this._data.push(e, t), this._totalLength += e.byteLength + t.byteLength, n;
    }
    _bufferTake() {
        const e = ae.concat(this._data, this._totalLength);
        return this._data.length = 0, this._totalLength = 0, e;
    }
    _writeSoon(e, t) {
        this._bufferAdd(e, t) && this._scheduleWriting();
    }
    _scheduleWriting() {
        this._writeNowTimeout || (this._writeNowTimeout = setTimeout(()=>{
            this._writeNowTimeout = null, this._writeNow();
        }));
    }
    _writeNow() {
        if (this._totalLength === 0 || this._isPaused) return;
        const e = this._bufferTake();
        this._socket.traceSocketEvent("protocolWrite", {
            byteLength: e.byteLength
        }), this._socket.write(e);
    }
}, g0 = class extends J {
    constructor(e){
        super(), this._onMessage = this._register(new N), this.onMessage = this._onMessage.event, this._onDidDispose = this._register(new N), this.onDidDispose = this._onDidDispose.event, this._socket = e, this._socketWriter = this._register(new TT(this._socket)), this._socketReader = this._register(new vT(this._socket)), this._register(this._socketReader.onMessage((t)=>{
            t.type === 1 && this._onMessage.fire(t.data);
        })), this._register(this._socket.onClose(()=>this._onDidDispose.fire()));
    }
    drain() {
        return this._socketWriter.drain();
    }
    getSocket() {
        return this._socket;
    }
    sendDisconnect() {}
    send(e) {
        this._socketWriter.write(new Ms(1, 0, 0, e));
    }
}, J3 = class z9e extends m0 {
    constructor(t, n, r = null){
        super(t, n, r), this.protocol = t;
    }
    static fromSocket(t, n) {
        return new z9e(new g0(t), n);
    }
    get onDidDispose() {
        return this.protocol.onDidDispose;
    }
    dispose() {
        super.dispose();
        const t = this.protocol.getSocket();
        this.protocol.sendDisconnect(), this.protocol.dispose(), t.end();
    }
}, Kl = class {
    constructor(){
        this._hasListeners = !1, this._isDeliveringMessages = !1, this._bufferedMessages = [], this._emitter = new N({
            onWillAddFirstListener: ()=>{
                this._hasListeners = !0, queueMicrotask(()=>this._deliverMessages());
            },
            onDidRemoveLastListener: ()=>{
                this._hasListeners = !1;
            }
        }), this.event = this._emitter.event;
    }
    _deliverMessages() {
        if (!this._isDeliveringMessages) {
            for(this._isDeliveringMessages = !0; this._hasListeners && this._bufferedMessages.length > 0;)this._emitter.fire(this._bufferedMessages.shift());
            this._isDeliveringMessages = !1;
        }
    }
    fire(e) {
        this._hasListeners ? this._bufferedMessages.length > 0 ? this._bufferedMessages.push(e) : this._emitter.fire(e) : this._bufferedMessages.push(e);
    }
    flushBuffer() {
        this._bufferedMessages = [];
    }
}, X3 = class {
    constructor(e){
        this.data = e, this.next = null;
    }
}, Q3 = class {
    constructor(){
        this._first = null, this._last = null;
    }
    length() {
        let e = 0, t = this._first;
        for(; t;)t = t.next, e++;
        return e;
    }
    peek() {
        return this._first ? this._first.data : null;
    }
    toArray() {
        const e = [];
        let t = 0, n = this._first;
        for(; n;)e[t++] = n.data, n = n.next;
        return e;
    }
    pop() {
        if (this._first) {
            if (this._first === this._last) {
                this._first = null, this._last = null;
                return;
            }
            this._first = this._first.next;
        }
    }
    push(e) {
        const t = new X3(e);
        if (!this._first) {
            this._first = t, this._last = t;
            return;
        }
        this._last.next = t, this._last = t;
    }
    clear() {
        this._first = null, this._last = null;
    }
}, kT = class ra {
    static getInstance() {
        return ra._INSTANCE || (ra._INSTANCE = new ra), ra._INSTANCE;
    }
    constructor(){
        this.lastRuns = [];
        const t = Date.now();
        for(let n = 0; n < ra._HISTORY_LENGTH; n++)this.lastRuns[n] = t - 1e3 * n;
        setInterval(()=>{
            for(let n = ra._HISTORY_LENGTH; n >= 1; n--)this.lastRuns[n] = this.lastRuns[n - 1];
            this.lastRuns[0] = Date.now();
        }, 1e3);
    }
    load() {
        const t = Date.now(), n = (1 + ra._HISTORY_LENGTH) * 1e3;
        let r = 0;
        for(let s = 0; s < ra._HISTORY_LENGTH; s++)t - this.lastRuns[s] <= n && r++;
        return 1 - r / ra._HISTORY_LENGTH;
    }
    hasHighLoad() {
        return this.load() >= .5;
    }
}, kT._HISTORY_LENGTH = 10, kT._INSTANCE = null, Z3 = kT, eF = class {
    constructor(e){
        this._isSuspended = !1, this._onControlMessage = new Kl, this.onControlMessage = this._onControlMessage.event, this._onMessage = new Kl, this.onMessage = this._onMessage.event, this._onDidDispose = new Kl, this.onDidDispose = this._onDidDispose.event, this._onSocketClose = new Kl, this.onSocketClose = this._onSocketClose.event, this._onSocketTimeout = new Kl, this.onSocketTimeout = this._onSocketTimeout.event, this._loadEstimator = e.loadEstimator ?? Z3.getInstance(), this._shouldSendKeepAlive = e.sendKeepAlive ?? !0, this._isReconnecting = !1, this._outgoingUnackMsg = new Q3, this._outgoingMsgId = 0, this._outgoingAckId = 0, this._outgoingAckTimeout = null, this._incomingMsgId = 0, this._incomingAckId = 0, this._incomingMsgLastTime = 0, this._incomingAckTimeout = null, this._lastReplayRequestTime = 0, this._lastSocketTimeoutTime = Date.now(), this._socketDisposables = new ve, this._socket = e.socket, this._socketWriter = this._socketDisposables.add(new TT(this._socket)), this._socketReader = this._socketDisposables.add(new vT(this._socket)), this._socketDisposables.add(this._socketReader.onMessage((t)=>this._receiveMessage(t))), this._socketDisposables.add(this._socket.onClose((t)=>this._onSocketClose.fire(t))), e.initialChunk && this._socketReader.acceptChunk(e.initialChunk), this._keepAliveInterval = null, this._startKeepAlive();
    }
    get unacknowledgedCount() {
        return this._outgoingMsgId - this._outgoingAckId;
    }
    _startKeepAlive() {
        !this._shouldSendKeepAlive || this._keepAliveInterval || (this._keepAliveInterval = setInterval(()=>{
            this._sendKeepAlive();
        }, 5e3));
    }
    _stopKeepAlive() {
        this._keepAliveInterval && (clearInterval(this._keepAliveInterval), this._keepAliveInterval = null);
    }
    dispose() {
        this._outgoingAckTimeout && (clearTimeout(this._outgoingAckTimeout), this._outgoingAckTimeout = null), this._incomingAckTimeout && (clearTimeout(this._incomingAckTimeout), this._incomingAckTimeout = null), this._stopKeepAlive(), this._socketDisposables.dispose(), this._outgoingUnackMsg.clear();
    }
    suspend() {
        this._isSuspended || (this._isSuspended = !0, this._isReconnecting = !0, this._stopKeepAlive(), this._outgoingAckTimeout && (clearTimeout(this._outgoingAckTimeout), this._outgoingAckTimeout = null), this._incomingAckTimeout && (clearTimeout(this._incomingAckTimeout), this._incomingAckTimeout = null), this._socketDisposables.dispose(), this._socketDisposables = new ve, this._socket.dispose());
    }
    drain() {
        return this._socketWriter.drain();
    }
    sendDisconnect() {
        if (!this._didSendDisconnect) {
            this._didSendDisconnect = !0;
            const e = new Ms(5, 0, 0, Ya());
            this._socketWriter.write(e), this._socketWriter.flush();
        }
    }
    sendPause() {
        const e = new Ms(7, 0, 0, Ya());
        this._socketWriter.write(e);
    }
    sendResume() {
        const e = new Ms(8, 0, 0, Ya());
        this._socketWriter.write(e);
    }
    pauseSocketWriting() {
        this._socketWriter.pause();
    }
    getSocket() {
        return this._socket;
    }
    get isSuspended() {
        return this._isSuspended;
    }
    getOutgoingQueueStats() {
        let e = 0;
        const t = this._outgoingUnackMsg.toArray();
        for (const n of t)e += n.data.byteLength;
        return {
            messageCount: t.length,
            byteSize: e
        };
    }
    getMillisSinceLastIncomingData() {
        return Date.now() - this._socketReader.lastReadTime;
    }
    beginAcceptReconnection(e, t) {
        this._isReconnecting = !0, this._isSuspended = !1, this._socketDisposables.dispose(), this._socketDisposables = new ve, this._onControlMessage.flushBuffer(), this._onSocketClose.flushBuffer(), this._onSocketTimeout.flushBuffer(), this._socket.dispose(), this._lastReplayRequestTime = 0, this._lastSocketTimeoutTime = Date.now(), this._socket = e, this._socketWriter = this._socketDisposables.add(new TT(this._socket)), this._socketReader = this._socketDisposables.add(new vT(this._socket)), this._socketDisposables.add(this._socketReader.onMessage((n)=>this._receiveMessage(n))), this._socketDisposables.add(this._socket.onClose((n)=>this._onSocketClose.fire(n))), this._socketReader.acceptChunk(t);
    }
    endAcceptReconnection() {
        if (this._isSuspended) return;
        this._isReconnecting = !1, this._startKeepAlive(), this._incomingAckId = this._incomingMsgId;
        const e = new Ms(3, 0, this._incomingAckId, Ya());
        this._socketWriter.write(e);
        const t = this._outgoingUnackMsg.toArray();
        for(let n = 0, r = t.length; n < r; n++)this._socketWriter.write(t[n]);
        this._recvAckCheck();
    }
    acceptDisconnect() {
        this._onDidDispose.fire();
    }
    _receiveMessage(e) {
        if (e.ack > this._outgoingAckId) {
            this._outgoingAckId = e.ack;
            do {
                const t = this._outgoingUnackMsg.peek();
                if (t && t.id <= e.ack) this._outgoingUnackMsg.pop();
                else break;
            }while (!0)
        }
        switch(e.type){
            case 0:
                break;
            case 1:
                {
                    if (e.id > this._incomingMsgId) if (e.id !== this._incomingMsgId + 1) {
                        const t = Date.now();
                        t - this._lastReplayRequestTime > 1e4 && (this._lastReplayRequestTime = t, this._socketWriter.write(new Ms(6, 0, 0, Ya())));
                    } else this._incomingMsgId = e.id, this._incomingMsgLastTime = Date.now(), this._sendAckCheck(), this._onMessage.fire(e.data);
                    break;
                }
            case 2:
                {
                    this._onControlMessage.fire(e.data);
                    break;
                }
            case 3:
                break;
            case 5:
                {
                    this._onDidDispose.fire();
                    break;
                }
            case 6:
                {
                    const t = this._outgoingUnackMsg.toArray();
                    for(let n = 0, r = t.length; n < r; n++)this._socketWriter.write(t[n]);
                    this._recvAckCheck();
                    break;
                }
            case 7:
                {
                    this._socketWriter.pause();
                    break;
                }
            case 8:
                {
                    this._socketWriter.resume();
                    break;
                }
            case 9:
                break;
        }
    }
    readEntireBuffer() {
        return this._socketReader.readEntireBuffer();
    }
    flush() {
        this._socketWriter.flush();
    }
    send(e) {
        const t = ++this._outgoingMsgId;
        this._incomingAckId = this._incomingMsgId;
        const n = new Ms(1, t, this._incomingAckId, e);
        this._outgoingUnackMsg.push(n), this._isReconnecting || (this._socketWriter.write(n), this._recvAckCheck());
    }
    sendControl(e) {
        const t = new Ms(2, 0, 0, e);
        this._socketWriter.write(t);
    }
    _sendAckCheck() {
        if (this._incomingMsgId <= this._incomingAckId || this._incomingAckTimeout) return;
        const e = Date.now() - this._incomingMsgLastTime;
        if (e >= 2e3) {
            this._sendAck();
            return;
        }
        this._incomingAckTimeout = setTimeout(()=>{
            this._incomingAckTimeout = null, this._sendAckCheck();
        }, 2e3 - e + 5);
    }
    _recvAckCheck() {
        if (this._outgoingMsgId <= this._outgoingAckId || this._outgoingAckTimeout || this._isReconnecting) return;
        const e = this._outgoingUnackMsg.peek(), t = Date.now() - e.writtenTime, n = Date.now() - this._socketReader.lastReadTime, r = Date.now() - this._lastSocketTimeoutTime;
        if (t >= 2e4 && n >= 2e4 && r >= 2e4 && !this._loadEstimator.hasHighLoad()) {
            this._lastSocketTimeoutTime = Date.now(), this._onSocketTimeout.fire({
                unacknowledgedMsgCount: this._outgoingUnackMsg.length(),
                timeSinceOldestUnacknowledgedMsg: t,
                timeSinceLastReceivedSomeData: n
            });
            return;
        }
        const s = Math.max(2e4 - t, 2e4 - n, 2e4 - r, 500);
        this._outgoingAckTimeout = setTimeout(()=>{
            this._outgoingAckTimeout = null, this._recvAckCheck();
        }, s);
    }
    _sendAck() {
        if (this._incomingMsgId <= this._incomingAckId) return;
        this._incomingAckId = this._incomingMsgId;
        const e = new Ms(3, 0, this._incomingAckId, Ya());
        this._socketWriter.write(e);
    }
    _sendKeepAlive() {
        this._incomingAckId = this._incomingMsgId;
        const e = new Ms(9, 0, this._incomingAckId, Ya());
        this._socketWriter.write(e);
    }
};

}
