import { exec } from "../../../dist_exports2.js";
import { CoordinateScaler, init_scaling } from "./scaling.js";
import { init_shell2 } from "./shell.js";
import { CursorType, init_recording_data_pb } from "../../../proto/dist/generated/agent/v1/recording_data_pb.js";
var X11_CURSOR_MAP, InputEventLogger;
export { InputEventLogger, X11_CURSOR_MAP };
var __wakaru_init_input_event_logger_initialized = false;
export function init_input_event_logger() {
if (__wakaru_init_input_event_logger_initialized) return;
__wakaru_init_input_event_logger_initialized = true;
"use strict";
init_recording_data_pb();
init_scaling();
init_shell2();
X11_CURSOR_MAP = {
    left_ptr: CursorType.ARROW,
    arrow: CursorType.ARROW,
    default: CursorType.ARROW,
    top_left_arrow: CursorType.ARROW,
    hand: CursorType.POINTER,
    hand1: CursorType.POINTER,
    hand2: CursorType.POINTER,
    pointer: CursorType.POINTER,
    pointing_hand: CursorType.POINTER,
    xterm: CursorType.TEXT,
    ibeam: CursorType.TEXT,
    text: CursorType.TEXT,
    watch: CursorType.WAIT,
    wait: CursorType.WAIT,
    progress: CursorType.WAIT,
    left_ptr_watch: CursorType.WAIT,
    crosshair: CursorType.CROSSHAIR,
    cross: CursorType.CROSSHAIR,
    tcross: CursorType.CROSSHAIR,
    move: CursorType.MOVE,
    fleur: CursorType.MOVE,
    size_all: CursorType.MOVE,
    sb_v_double_arrow: CursorType.RESIZE_NS,
    v_double_arrow: CursorType.RESIZE_NS,
    ns_resize: CursorType.RESIZE_NS,
    row_resize: CursorType.RESIZE_NS,
    top_side: CursorType.RESIZE_NS,
    bottom_side: CursorType.RESIZE_NS,
    sb_h_double_arrow: CursorType.RESIZE_EW,
    h_double_arrow: CursorType.RESIZE_EW,
    ew_resize: CursorType.RESIZE_EW,
    col_resize: CursorType.RESIZE_EW,
    left_side: CursorType.RESIZE_EW,
    right_side: CursorType.RESIZE_EW,
    top_left_corner: CursorType.RESIZE_NWSE,
    bottom_right_corner: CursorType.RESIZE_NWSE,
    nwse_resize: CursorType.RESIZE_NWSE,
    size_fdiag: CursorType.RESIZE_NWSE,
    top_right_corner: CursorType.RESIZE_NESW,
    bottom_left_corner: CursorType.RESIZE_NESW,
    nesw_resize: CursorType.RESIZE_NESW,
    size_bdiag: CursorType.RESIZE_NESW,
    not_allowed: CursorType.NOT_ALLOWED,
    no_drop: CursorType.NOT_ALLOWED,
    forbidden: CursorType.NOT_ALLOWED,
    circle: CursorType.NOT_ALLOWED,
    grab: CursorType.GRAB,
    openhand: CursorType.GRAB,
    grabbing: CursorType.GRABBING,
    closedhand: CursorType.GRABBING
};
InputEventLogger = class {
    constructor(config2){
        this.events = [];
        this.recordingStartTime = 0;
        this.lastKnownPosition = {
            x: 0,
            y: 0
        };
        this.isRunning = false;
        this.pending = Promise.resolve();
        const displayNum = config2.displayNum ?? 1;
        this.env = {
            DISPLAY: `:${displayNum}`
        };
        this.scaler = new CoordinateScaler(config2.resolution);
    }
    async start() {
        this.events = [];
        this.recordingStartTime = Date.now();
        this.isRunning = true;
        this.pending = Promise.resolve();
        try {
            this.lastKnownPosition = await this.captureCurrentPosition();
        } catch  {
            this.lastKnownPosition = {
                x: Math.floor(this.scaler.apiWidth / 2),
                y: Math.floor(this.scaler.apiHeight / 2)
            };
        }
    }
    logEvent(action, commandStartTime, commandEndTime) {
        if (!this.isRunning) {
            return;
        }
        const positionBefore = {
            ...this.lastKnownPosition
        };
        const expectedPosition = this.getExpectedPositionAfterAction(action, positionBefore);
        this.lastKnownPosition = expectedPosition;
        const task = async ()=>{
            let positionAfter;
            let cursorTypeAfter;
            try {
                [positionAfter, cursorTypeAfter] = await Promise.all([
                    this.captureCurrentPosition(),
                    this.detectCursorType()
                ]);
                this.lastKnownPosition = positionAfter;
            } catch  {
                positionAfter = expectedPosition;
                cursorTypeAfter = CursorType.ARROW;
            }
            const event = {
                executionTimestampMs: commandEndTime - this.recordingStartTime,
                action,
                commandDurationMs: commandEndTime - commandStartTime,
                positionBefore,
                positionAfter,
                cursorTypeAfter
            };
            this.events.push(event);
        };
        this.pending = this.pending.then(()=>task()).catch(()=>{});
    }
    async stop() {
        this.isRunning = false;
        await this.pending;
        return [
            ...this.events
        ];
    }
    getEvents() {
        return [
            ...this.events
        ];
    }
    getRecordingStartTime() {
        return this.recordingStartTime;
    }
    getIsRunning() {
        return this.isRunning;
    }
    async captureCurrentPosition() {
        const output = await exec("xdotool", [
            "getmouselocation",
            "--shell"
        ], {
            env: this.env
        });
        const xMatch = output.match(/X=(\d+)/);
        const yMatch = output.match(/Y=(\d+)/);
        if (!xMatch || !yMatch) {
            throw new Error(`Failed to parse cursor position: ${output}`);
        }
        const displayX = parseInt(xMatch[1], 10);
        const displayY = parseInt(yMatch[1], 10);
        return this.scaler.displayToApi(displayX, displayY);
    }
    async detectCursorType() {
        try {
            const output = await exec("xdotool", [
                "getmouselocation",
                "--shell"
            ], {
                env: this.env
            });
            const cursorMatch = output.match(/CURSOR=(\S+)/i);
            if (cursorMatch) {
                const cursorName = cursorMatch[1].toLowerCase();
                return X11_CURSOR_MAP[cursorName] ?? CursorType.ARROW;
            }
            try {
                const xpropOutput = await exec("xprop", [
                    "-root",
                    "_XSERVER_CURSOR"
                ], {
                    env: this.env,
                    timeoutMs: 500
                });
                for (const [name17, type2] of Object.entries(X11_CURSOR_MAP)){
                    if (xpropOutput.toLowerCase().includes(name17)) {
                        return type2;
                    }
                }
            } catch  {}
            return CursorType.ARROW;
        } catch  {
            return CursorType.ARROW;
        }
    }
    getExpectedPositionAfterAction(action, positionBefore) {
        const actionOneof = action.action;
        if (!actionOneof) {
            return positionBefore;
        }
        switch(actionOneof.case){
            case "mouseMove":
                {
                    const coord = actionOneof.value.coordinate;
                    if (coord) {
                        return {
                            x: coord.x,
                            y: coord.y
                        };
                    }
                    break;
                }
            case "click":
                {
                    const coord = actionOneof.value.coordinate;
                    if (coord) {
                        return {
                            x: coord.x,
                            y: coord.y
                        };
                    }
                    break;
                }
            case "drag":
                {
                    const path64 = actionOneof.value.path;
                    if (path64.length > 0) {
                        const lastPoint = path64[path64.length - 1];
                        return {
                            x: lastPoint.x,
                            y: lastPoint.y
                        };
                    }
                    break;
                }
            case "scroll":
                {
                    const coord = actionOneof.value.coordinate;
                    if (coord) {
                        return {
                            x: coord.x,
                            y: coord.y
                        };
                    }
                    break;
                }
            default:
                break;
        }
        return positionBefore;
    }
};

}
