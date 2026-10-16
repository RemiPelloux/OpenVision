import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_http2SessionReplacer_cache;
export function require_http2SessionReplacer() {
if (__wakaru_require_http2SessionReplacer_cache) return __wakaru_require_http2SessionReplacer_cache;
var exports2 = {};
__wakaru_require_http2SessionReplacer_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || (function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar2 = [];
            for(var k2 in o2)if (Object.prototype.hasOwnProperty.call(o2, k2)) ar2[ar2.length] = k2;
            return ar2;
        };
        return ownKeys(o);
    };
    return function(mod2) {
        if (mod2 && mod2.__esModule) return mod2;
        var result = {};
        if (mod2 != null) {
            for(var k2 = ownKeys(mod2), i = 0; i < k2.length; i++)if (k2[i] !== "default") __createBinding(result, mod2, k2[i]);
        }
        __setModuleDefault(result, mod2);
        return result;
    };
})();
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Http2SessionReplacer = exports2.SILENT_SESSION_THRESHOLD_MS = void 0;
var http23 = __importStar(require("node:http2"));
var connect_1 = require_cjs3();
exports2.SILENT_SESSION_THRESHOLD_MS = 15e3;
var Http2SessionReplacer = class {
    constructor(options2){
        this.options = options2;
        this.sessionOf = new WeakMap();
        this.openStreams = new Set();
        this.goawayWatched = new WeakSet();
        this.now = options2.now ?? (()=>Date.now());
        this.current = options2.create();
        this.lastResponseByteAt = this.now();
    }
    get authority() {
        return this.current.authority;
    }
    async request(method, path64, headers, options2) {
        this.judgeClosedStreams();
        const session = this.current;
        const openedAt = this.now();
        const stream3 = await this.requestWithEstablishTimeout(session, method, path64, headers, options2);
        this.sessionOf.set(stream3, session);
        const open7 = {
            stream: stream3,
            session,
            openedAt,
            errored: false
        };
        this.openStreams.add(open7);
        stream3.once("error", ()=>{
            open7.errored = true;
        });
        stream3.once("close", ()=>this.judge(open7));
        this.watchGoaway(stream3.session);
        return stream3;
    }
    watchGoaway(session) {
        const onGoaway = this.options.onGoaway;
        if (onGoaway === void 0 || session === void 0 || this.goawayWatched.has(session)) {
            return;
        }
        this.goawayWatched.add(session);
        session.once("goaway", (errorCode3)=>{
            if (errorCode3 !== http23.constants.NGHTTP2_NO_ERROR) {
                return;
            }
            for (const open7 of this.openStreams){
                if (open7.stream.session === session && !open7.stream.closed) {
                    onGoaway();
                    return;
                }
            }
        });
    }
    judgeClosedStreams() {
        for (const open7 of this.openStreams){
            if (open7.stream.closed) {
                this.judge(open7);
            }
        }
    }
    judge(open7) {
        if (!this.openStreams.delete(open7)) {
            return;
        }
        const { stream: stream3, session, openedAt } = open7;
        if (open7.errored || stream3.rstCode === http23.constants.NGHTTP2_NO_ERROR || session !== this.current) {
            return;
        }
        const silentForMs = this.now() - Math.max(openedAt, this.lastResponseByteAt);
        if (silentForMs < exports2.SILENT_SESSION_THRESHOLD_MS) {
            return;
        }
        this.replace(session, silentForMs, "silent_stream_abandoned");
    }
    replace(previous, waitedMs, reason) {
        this.current = this.options.create();
        this.lastResponseByteAt = this.now();
        this.options.onReplaced(previous, waitedMs, reason);
    }
    async requestWithEstablishTimeout(session, method, path64, headers, options2) {
        const timeoutMs = this.options.establishTimeoutMs?.() ?? 0;
        if (!(timeoutMs > 0)) {
            return session.request(method, path64, headers, options2);
        }
        const startedAt = this.now();
        let timer2;
        const arm = ()=>{
            timer2 = setTimeout(()=>{
                const state = session.state();
                if (state === "connecting" || state === "verifying") {
                    const waitedMs = this.now() - startedAt;
                    if (session === this.current) {
                        this.replace(session, waitedMs, "establish_timeout");
                    }
                    session.abortCurrent(new connect_1.ConnectError(`HTTP/2 session not established after ${Math.round(waitedMs)} ms`, connect_1.Code.Unavailable));
                }
                arm();
            }, timeoutMs);
            timer2.unref?.();
        };
        arm();
        try {
            return await session.request(method, path64, headers, options2);
        } finally{
            clearTimeout(timer2);
        }
    }
    notifyResponseByteRead(stream3) {
        const session = this.sessionOf.get(stream3);
        if (session === void 0) {
            this.current.notifyResponseByteRead(stream3);
            return;
        }
        if (session === this.current) {
            this.lastResponseByteAt = this.now();
        }
        session.notifyResponseByteRead(stream3);
    }
};
exports2.Http2SessionReplacer = Http2SessionReplacer;

return exports2;
}
