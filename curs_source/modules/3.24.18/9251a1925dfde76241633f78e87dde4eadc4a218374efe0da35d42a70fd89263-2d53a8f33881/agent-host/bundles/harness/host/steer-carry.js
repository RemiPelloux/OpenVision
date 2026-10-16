import { init_pass_through_iterator } from "./pass-through-iterator.js";
import { runGoesOn, steerAck, steerInjectionId } from "../../../../tree_chunk_napi_exports.js";
var __classPrivateFieldGet3, _SteerCarry_instances, _SteerCarry_sent, _SteerCarry_admit, _SteerCarry_settleHeldBy, SteerCarry;
export { SteerCarry, _SteerCarry_admit, _SteerCarry_instances, _SteerCarry_sent, _SteerCarry_settleHeldBy, __classPrivateFieldGet3 };
var __wakaru_init_steer_carry_initialized = false;
export function init_steer_carry() {
if (__wakaru_init_steer_carry_initialized) return;
__wakaru_init_steer_carry_initialized = true;
"use strict";
init_pass_through_iterator();
__classPrivateFieldGet3 = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
SteerCarry = class {
    constructor(){
        _SteerCarry_instances.add(this);
        _SteerCarry_sent.set(this, new Map());
    }
    recordSent(message) {
        const injectionId = steerInjectionId(message);
        if (injectionId !== void 0) {
            __classPrivateFieldGet3(this, _SteerCarry_sent, "f").set(injectionId, {
                frame: message,
                state: "settled"
            });
        }
    }
    beginCall() {
        const handedOver = [];
        for (const [injectionId, steer] of __classPrivateFieldGet3(this, _SteerCarry_sent, "f")){
            if (steer.state !== "settled") {
                __classPrivateFieldGet3(this, _SteerCarry_sent, "f").set(injectionId, {
                    frame: steer.frame,
                    state: "handedOver",
                    ack: steer.ack
                });
                handedOver.push(steer.frame);
            }
        }
        const call = {
            handedOver,
            admit: (message)=>__classPrivateFieldGet3(this, _SteerCarry_instances, "m", _SteerCarry_admit).call(this, call, message),
            end: ()=>__classPrivateFieldGet3(this, _SteerCarry_instances, "m", _SteerCarry_settleHeldBy).call(this, call)
        };
        return call;
    }
    unclaimedAcks() {
        return [
            ...__classPrivateFieldGet3(this, _SteerCarry_sent, "f").values()
        ].flatMap((steer)=>steer.state === "settled" ? [] : [
                steer.ack.update
            ]);
    }
};
_SteerCarry_sent = new WeakMap(), _SteerCarry_instances = new WeakSet(), _SteerCarry_admit = function _SteerCarry_admit2(call, message) {
    const ack = steerAck(message);
    const steer = ack === void 0 ? void 0 : __classPrivateFieldGet3(this, _SteerCarry_sent, "f").get(ack.injectionId);
    if (ack === void 0 || steer === void 0) {
        return runGoesOn(message) ? [
            ...__classPrivateFieldGet3(this, _SteerCarry_instances, "m", _SteerCarry_settleHeldBy).call(this, call),
            message
        ] : [
            message
        ];
    }
    if (steer.state === "handedOver" && ack.state === "queued") {
        return [];
    }
    if (ack.state === "queuedForNextTurn") {
        __classPrivateFieldGet3(this, _SteerCarry_sent, "f").set(ack.injectionId, {
            frame: steer.frame,
            state: "held",
            ack,
            by: call
        });
        return [];
    }
    __classPrivateFieldGet3(this, _SteerCarry_sent, "f").set(ack.injectionId, {
        frame: steer.frame,
        state: "settled"
    });
    return [
        message
    ];
}, _SteerCarry_settleHeldBy = function _SteerCarry_settleHeldBy2(call) {
    const acks = [];
    for (const [injectionId, steer] of __classPrivateFieldGet3(this, _SteerCarry_sent, "f")){
        if (steer.state === "held" && steer.by === call) {
            __classPrivateFieldGet3(this, _SteerCarry_sent, "f").set(injectionId, {
                frame: steer.frame,
                state: "settled"
            });
            acks.push(steer.ack.message);
        }
    }
    return acks;
};

}
