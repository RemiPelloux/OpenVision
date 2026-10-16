import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
import { withTimeout } from "../../dist_exports.js";
import { detectDisplay, parseDisplayNum } from "../../dist_exports2.js";
import { init_computer_use3 } from "./computer-use/index.js";
import { InputEventLogger } from "./computer-use/input-event-logger.js";
import { errorMessage2, formatProxyValidationError, hasFfmpegExited, isErrnoCode } from "../../mcp_sandbox_policy_exports.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { RecordScreenDiscardSuccess, RecordScreenFailure, RecordScreenResult, RecordScreenSaveSuccess, RecordScreenStartSuccess, RecordingMode, RequestedFilePathRejectedReason, init_record_screen_exec_pb } from "../../proto/dist/generated/agent/v1/record_screen_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { spawnWorkload } from "../../utils/dist/workload-spawn.js";
var import_node_child_process15, fs15, path27, import_node_util10, __addDisposableResource40, __disposeResources40, execFileAsync4, execFileUtf8Async2, RECORDING_STAGING_DIR, LocalRecordScreenExecutor;
export { LocalRecordScreenExecutor, RECORDING_STAGING_DIR, __addDisposableResource40, __disposeResources40, execFileAsync4, execFileUtf8Async2, fs15, import_node_child_process15, import_node_util10, path27 };
var __wakaru_init_record_screen2_initialized = false;
export function init_record_screen2() {
if (__wakaru_init_record_screen2_initialized) return;
__wakaru_init_record_screen2_initialized = true;
"use strict";
import_node_child_process15 = require("node:child_process");
fs15 = __toESM(require("node:fs/promises"), 1);
path27 = __toESM(require("node:path"), 1);
import_node_util10 = require("node:util");
init_dist();
init_record_screen_exec_pb();
init_dist3();
init_esm2();
init_computer_use3();
__addDisposableResource40 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources40 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
execFileAsync4 = (0, import_node_util10.promisify)(import_node_child_process15.execFile);
execFileUtf8Async2 = execFileAsync4;
RECORDING_STAGING_DIR = "/opt/cursor/recording-staging/";
LocalRecordScreenExecutor = class _LocalRecordScreenExecutor {
    constructor(options2){
        this.activeRecording = null;
        this.inFlightSaves = [];
        this.onRecordingStartedCallback = null;
        this.onRecordingStoppedCallback = null;
        this.recordingStoppedCallbackInvoked = false;
        this.artifactsDir = options2.artifactsDir;
        this.stagingDir = options2.stagingDir ?? RECORDING_STAGING_DIR;
        this.display = options2.display;
        this.disablePolishedRendering = options2.disablePolishedRendering ?? false;
        this.polishedRenderer = options2.polishedRenderer;
        if (!this.disablePolishedRendering) {
            if (!this.polishedRenderer) {
                throw new Error("record_screen requires a polished recording renderer when polished rendering is enabled. This tool should run via exec-daemon where that dependency is bundled.");
            }
            this.polishedRenderer.assertAvailable();
        }
    }
    setOnRecordingStarted(callback) {
        this.onRecordingStartedCallback = callback;
    }
    setOnRecordingStopped(callback) {
        this.onRecordingStoppedCallback = callback;
    }
    invokeStoppedCallbackOnce() {
        if (!this.recordingStoppedCallbackInvoked && this.onRecordingStoppedCallback) {
            this.recordingStoppedCallbackInvoked = true;
            this.onRecordingStoppedCallback();
        }
    }
    async cleanupRecording(state) {
        try {
            await state.inputEventLogger.stop();
        } catch  {}
        if (!hasFfmpegExited(state.childProcess) && state.childProcess.pid) {
            try {
                await this.stopFfmpegRecording(state);
            } catch  {
                try {
                    process.kill(state.childProcess.pid, "SIGKILL");
                } catch  {}
            }
        }
    }
    getActiveInputEventLogger() {
        return this.activeRecording?.inputEventLogger ?? null;
    }
    async dispose() {
        const pending = this.inFlightSaves.map((entry)=>entry.promise);
        if (pending.length > 0) {
            try {
                await withTimeout(Promise.all(pending), _LocalRecordScreenExecutor.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS, "Timed out waiting for in-flight recording save");
            } catch  {}
        }
        if (this.activeRecording) {
            await this.cleanupRecording(this.activeRecording);
            this.invokeStoppedCallbackOnce();
            try {
                await fs15.rm(this.activeRecording.sessionDir, {
                    force: true,
                    recursive: true
                });
            } catch  {}
            this.activeRecording = null;
        }
    }
    findInFlightSave(state) {
        return this.inFlightSaves.find((entry)=>entry.state === state);
    }
    clearActiveRecordingIfCurrent(state) {
        if (this.activeRecording === state) {
            this.activeRecording = null;
        }
    }
    invokeStoppedCallbackIfCurrent(state) {
        if (this.activeRecording === state) {
            this.invokeStoppedCallbackOnce();
        }
    }
    sanitizeToolCallId(toolCallId) {
        return toolCallId.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    async ensureRecordingDirectoryExists() {
        await fs15.mkdir(this.stagingDir, {
            recursive: true
        });
        await fs15.mkdir(this.artifactsDir, {
            recursive: true
        });
    }
    buildSessionDir(toolCallId) {
        const sanitized = this.sanitizeToolCallId(toolCallId);
        const timestamp2 = (new Date()).toISOString().replace(/[:.]/g, "-");
        const dirname33 = `session-${timestamp2}-${sanitized}`;
        return path27.join(this.stagingDir, dirname33);
    }
    validateAndNormalizeSaveAsFilename(saveAsFilename) {
        let filename = saveAsFilename.trim();
        if (filename.startsWith(this.artifactsDir)) {
            filename = filename.slice(this.artifactsDir.length);
            if (filename.startsWith("/")) {
                filename = filename.slice(1);
            }
        }
        filename = filename.trim();
        if (filename.length === 0) {
            return {
                success: false,
                reason: RequestedFilePathRejectedReason.UNSPECIFIED
            };
        }
        if (filename.includes("/") || filename.includes("\\")) {
            return {
                success: false,
                reason: RequestedFilePathRejectedReason.SLASHES_NOT_ALLOWED
            };
        }
        filename = filename.replace(/[^a-zA-Z0-9 ._-]/g, "_");
        filename = filename.trim();
        if (filename.length === 0) {
            return {
                success: false,
                reason: RequestedFilePathRejectedReason.UNSPECIFIED
            };
        }
        if (filename.length > 128) {
            filename = filename.slice(0, 128).trim();
        }
        if (!filename.toLowerCase().endsWith(".mp4")) {
            filename = `${filename}.mp4`;
        }
        return {
            success: true,
            filename
        };
    }
    async movePolishedVideo(sourcePath, destinationPath) {
        try {
            await fs15.rename(sourcePath, destinationPath);
            return;
        } catch (error3) {
            if (!isErrnoCode(error3, "EXDEV")) {
                throw error3;
            }
        }
        try {
            await fs15.copyFile(sourcePath, destinationPath);
        } catch (error3) {
            await fs15.rm(destinationPath, {
                force: true
            }).catch(()=>void 0);
            throw error3;
        }
        try {
            await fs15.unlink(sourcePath);
        } catch (error3) {
            await fs15.rm(destinationPath, {
                force: true
            }).catch(()=>void 0);
            throw error3;
        }
    }
    async getUniqueArtifactVideoPath(preferredFilename) {
        const parsed = path27.parse(preferredFilename);
        const baseName = parsed.name || "recording";
        const extension3 = parsed.ext || ".mp4";
        let candidateFilename = `${baseName}${extension3}`;
        let suffix = 2;
        for(;;){
            const candidatePath = path27.join(this.artifactsDir, candidateFilename);
            try {
                const handle = await fs15.open(candidatePath, "wx");
                await handle.close();
                return candidatePath;
            } catch (error3) {
                if (!isErrnoCode(error3, "EEXIST")) {
                    throw error3;
                }
                candidateFilename = `${baseName}-${suffix}${extension3}`;
                suffix++;
            }
        }
    }
    async resolveArtifactVideoPath(options2) {
        const { saveAsFilename, stagingSessionDir } = options2;
        let requestedFilePathRejectedReason;
        let preferredFilename;
        if (saveAsFilename) {
            const validationResult = this.validateAndNormalizeSaveAsFilename(saveAsFilename);
            if (validationResult.success) {
                preferredFilename = validationResult.filename;
            } else {
                requestedFilePathRejectedReason = validationResult.reason;
                preferredFilename = `${path27.basename(stagingSessionDir)}.mp4`;
            }
        } else {
            preferredFilename = `${path27.basename(stagingSessionDir)}.mp4`;
        }
        const finalVideoPath = await this.getUniqueArtifactVideoPath(preferredFilename);
        return {
            finalVideoPath,
            requestedFilePathRejectedReason
        };
    }
    async getVideoDurationMs(videoPath) {
        const { stdout } = await spawnWorkload(execFileUtf8Async2, "ffprobe", [
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            videoPath
        ], {
            encoding: "utf8"
        });
        const durationSec = parseFloat(stdout.trim());
        if (!Number.isFinite(durationSec) || durationSec < 0) {
            throw new Error(`Invalid video duration from ffprobe: ${stdout.trim()}`);
        }
        return Math.floor(durationSec * 1e3);
    }
    async getVideoDimensions(videoPath) {
        const { stdout } = await spawnWorkload(execFileUtf8Async2, "ffprobe", [
            "-v",
            "error",
            "-select_streams",
            "v:0",
            "-show_entries",
            "stream=width,height",
            "-of",
            "csv=p=0:s=x",
            videoPath
        ], {
            encoding: "utf8"
        });
        const [widthStr, heightStr] = stdout.trim().split("x");
        const width = Number.parseInt(widthStr, 10);
        const height = Number.parseInt(heightStr, 10);
        if (!Number.isFinite(width) || !Number.isFinite(height)) {
            throw new Error(`Invalid video dimensions from ffprobe: ${stdout.trim()}`);
        }
        if (width <= 0 || height <= 0) {
            throw new Error(`Invalid non-positive video dimensions from ffprobe: ${stdout.trim()}`);
        }
        return {
            width,
            height
        };
    }
    async renderPolished(stagingSessionDir) {
        const recordingDir = path27.join(stagingSessionDir, "recording");
        const polishedVideoPath = path27.join(recordingDir, "recording_full.mp4");
        await this.polishedRenderer.renderRecordingSession({
            stagingSessionDir,
            outputVideoPath: polishedVideoPath,
            fps: _LocalRecordScreenExecutor.PROXY_TARGET_FPS,
            includeBrandTag: true
        });
        await fs15.access(polishedVideoPath, fs15.constants.R_OK);
        return polishedVideoPath;
    }
    async getVideoFramerate(videoPath) {
        try {
            const { stdout } = await spawnWorkload(execFileUtf8Async2, "ffprobe", [
                "-v",
                "error",
                "-select_streams",
                "v:0",
                "-show_entries",
                "stream=r_frame_rate",
                "-of",
                "default=noprint_wrappers=1:nokey=1",
                videoPath
            ], {
                encoding: "utf8"
            });
            const rate = stdout.trim();
            if (rate.includes("/")) {
                const [numStr, denStr] = rate.split("/");
                const num = Number.parseFloat(numStr);
                const den = Number.parseFloat(denStr);
                if (Number.isFinite(num) && Number.isFinite(den) && den !== 0) {
                    const fps = num / den;
                    if (fps > 0 && fps < 500) {
                        return Math.round(fps);
                    }
                }
            } else {
                const fps = Number.parseFloat(rate);
                if (Number.isFinite(fps) && fps > 0 && fps < 500) {
                    return Math.round(fps);
                }
            }
            console.warn(`[record-screen] Unexpected ffprobe r_frame_rate output "${rate}", defaulting to ${_LocalRecordScreenExecutor.PROXY_TARGET_FPS}fps`);
        } catch (error3) {
            console.warn(`[record-screen] Failed to read video framerate: ${error3 instanceof Error ? error3.message : String(error3)}, defaulting to ${_LocalRecordScreenExecutor.PROXY_TARGET_FPS}fps`);
        }
        return _LocalRecordScreenExecutor.PROXY_TARGET_FPS;
    }
    async startFfmpegRecording(resolution, sessionDir) {
        const recordingDir = path27.join(sessionDir, "recording");
        await fs15.mkdir(recordingDir, {
            recursive: true
        });
        const proxyPath = path27.join(recordingDir, "recording_render_proxy_1080p.mp4");
        let refreshRate;
        try {
            const displayResult = await detectDisplay(this.display);
            refreshRate = displayResult.display.refreshRate;
        } catch (error3) {
            console.warn(`[record-screen] Failed to detect refresh rate: ${error3 instanceof Error ? error3.message : String(error3)}, using default ${_LocalRecordScreenExecutor.DEFAULT_REFRESH_RATE}Hz`);
            refreshRate = _LocalRecordScreenExecutor.DEFAULT_REFRESH_RATE;
        }
        const args = [
            "-video_size",
            resolution,
            "-framerate",
            String(refreshRate),
            "-draw_mouse",
            "0",
            "-f",
            "x11grab",
            "-i",
            this.display,
            "-vf",
            `scale=${_LocalRecordScreenExecutor.PROXY_TARGET_WIDTH}:-2:flags=lanczos,fps=${_LocalRecordScreenExecutor.PROXY_TARGET_FPS}`,
            "-c:v",
            "libx264",
            "-preset",
            _LocalRecordScreenExecutor.PROXY_PRESET,
            "-crf",
            String(_LocalRecordScreenExecutor.PROXY_CRF),
            "-pix_fmt",
            "yuv420p",
            "-profile:v",
            "high",
            "-x264-params",
            "keyint=1:min-keyint=1:scenecut=0:bframes=0",
            "-movflags",
            "+faststart",
            "-tune",
            "fastdecode",
            "-y",
            proxyPath
        ];
        const child = spawnWorkload(import_node_child_process15.spawn, "ffmpeg", args, {
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            detached: true
        });
        const videoStartedPromise = new Promise((resolve36, reject2)=>{
            let stderrBuffer = "";
            let hasStarted = false;
            const onStderr = (data)=>{
                stderrBuffer += data.toString();
                if (!hasStarted && stderrBuffer.includes("frame=")) {
                    hasStarted = true;
                    resolve36(Date.now());
                }
            };
            child.stderr?.on("data", onStderr);
            const timeout2 = setTimeout(()=>{
                if (!hasStarted) {
                    reject2(new Error("ffmpeg did not start encoding within 5 seconds"));
                }
            }, 5e3);
            child.once("exit", (code, signal)=>{
                clearTimeout(timeout2);
                if (!hasStarted) {
                    reject2(new Error(`ffmpeg exited before starting: code=${code} signal=${signal}`));
                }
            });
            child.once("error", (err)=>{
                clearTimeout(timeout2);
                if (!hasStarted) {
                    reject2(new Error(`ffmpeg failed to start: ${err.message}`));
                }
            });
        });
        await new Promise((resolve36, reject2)=>{
            const timeout2 = setTimeout(resolve36, 300);
            child.once("error", (err)=>{
                clearTimeout(timeout2);
                reject2(new Error(`Failed to start ffmpeg: ${err.message}`));
            });
            child.once("exit", (code, signal)=>{
                clearTimeout(timeout2);
                if (code !== null && code !== 0) {
                    reject2(new Error(`ffmpeg exited with code ${code}`));
                } else if (signal !== null) {
                    reject2(new Error(`ffmpeg killed by signal ${signal}`));
                } else {
                    reject2(new Error("ffmpeg exited unexpectedly during startup"));
                }
            });
        });
        return {
            process: child,
            videoStartedPromise
        };
    }
    async runFfmpegCommand(label, args) {
        return await new Promise((resolve36, reject2)=>{
            const child = spawnWorkload(import_node_child_process15.spawn, "ffmpeg", args, {
                stdio: [
                    "ignore",
                    "ignore",
                    "pipe"
                ]
            });
            let stderr = "";
            child.stderr?.on("data", (data)=>{
                if (stderr.length < 2e4) {
                    stderr += data.toString();
                }
            });
            child.once("error", (error3)=>{
                reject2(new Error(`ffmpeg ${label} failed to start: ${error3 instanceof Error ? error3.message : String(error3)}`));
            });
            child.once("close", (code)=>{
                if (code === 0) {
                    resolve36();
                } else {
                    reject2(new Error(`ffmpeg ${label} exited with code ${code}: ${stderr.trim()}`));
                }
            });
        });
    }
    async saveRecordingDataPackage(options2) {
        const { sessionDir, durationMs: durationMs2, recordingStartEpochMs, ffmpegStartedEpochMs, inputEvents, resolution, renderProxies } = options2;
        const recordingDir = path27.join(sessionDir, "recording");
        const dataPath = path27.join(recordingDir, "recording-data.json");
        const eventToVideoOffsetMs = ffmpegStartedEpochMs - recordingStartEpochMs;
        const serializedEvents = inputEvents.map((event)=>({
                executionTimestampMs: event.executionTimestampMs,
                commandDurationMs: event.commandDurationMs,
                positionBefore: event.positionBefore,
                positionAfter: event.positionAfter,
                cursorTypeAfter: event.cursorTypeAfter,
                action: {
                    action: this.serializeAction(event.action)
                }
            }));
        const dataPackage = {
            version: 3,
            durationMs: durationMs2,
            recordingStartEpochMs,
            ffmpegStartedEpochMs,
            eventToVideoOffsetMs,
            displayWidth: resolution.display.width,
            displayHeight: resolution.display.height,
            apiWidth: resolution.api.width,
            apiHeight: resolution.api.height,
            inputEvents: serializedEvents,
            renderProxies: renderProxies ?? null
        };
        await fs15.writeFile(dataPath, JSON.stringify(dataPackage, null, 2));
    }
    serializeAction(action) {
        const { action: actionOneof } = action;
        const result = {
            case: actionOneof.case
        };
        switch(actionOneof.case){
            case "click":
                result.value = {
                    coordinate: actionOneof.value.coordinate ? {
                        x: actionOneof.value.coordinate.x,
                        y: actionOneof.value.coordinate.y
                    } : null,
                    button: actionOneof.value.button,
                    count: actionOneof.value.count,
                    modifierKeys: actionOneof.value.modifierKeys
                };
                break;
            case "mouseMove":
                result.value = {
                    coordinate: actionOneof.value.coordinate ? {
                        x: actionOneof.value.coordinate.x,
                        y: actionOneof.value.coordinate.y
                    } : null
                };
                break;
            case "type":
                result.value = {
                    text: actionOneof.value.text
                };
                break;
            case "key":
                result.value = {
                    key: actionOneof.value.key,
                    holdDurationMs: actionOneof.value.holdDurationMs
                };
                break;
            case "scroll":
                result.value = {
                    coordinate: actionOneof.value.coordinate ? {
                        x: actionOneof.value.coordinate.x,
                        y: actionOneof.value.coordinate.y
                    } : null,
                    direction: actionOneof.value.direction,
                    amount: actionOneof.value.amount,
                    modifierKeys: actionOneof.value.modifierKeys
                };
                break;
            case "drag":
                result.value = {
                    path: actionOneof.value.path.map((p2)=>({
                            x: p2.x,
                            y: p2.y
                        })),
                    button: actionOneof.value.button
                };
                break;
            case "wait":
                result.value = {
                    durationMs: actionOneof.value.durationMs
                };
                break;
            case "screenshot":
            case "cursorPosition":
            case "mouseDown":
            case "mouseUp":
                result.value = actionOneof.value;
                break;
            default:
                result.value = {};
        }
        return result;
    }
    async stopFfmpegRecording(state) {
        const { childProcess } = state;
        if (hasFfmpegExited(childProcess) || !childProcess.pid) {
            return;
        }
        const pid = childProcess.pid;
        return new Promise((resolve36, reject2)=>{
            const timeout2 = setTimeout(()=>{
                try {
                    try {
                        process.kill(-pid, "SIGKILL");
                    } catch  {
                        process.kill(pid, "SIGKILL");
                    }
                } catch  {}
                reject2(new Error("Timeout waiting for ffmpeg to stop"));
            }, 2e4);
            childProcess.once("exit", ()=>{
                clearTimeout(timeout2);
                resolve36();
            });
            childProcess.once("error", (error3)=>{
                clearTimeout(timeout2);
                reject2(new Error(`Error stopping ffmpeg: ${error3.message}`));
            });
            try {
                try {
                    process.kill(-pid, "SIGTERM");
                } catch  {
                    process.kill(pid, "SIGTERM");
                }
            } catch (error3) {
                clearTimeout(timeout2);
                if (isErrnoCode(error3, "ESRCH")) {
                    resolve36();
                    return;
                }
                reject2(new Error(`Failed to send SIGTERM: ${error3 instanceof Error ? error3.message : String(error3)}`));
            }
        });
    }
    async performSave(args, state) {
        const saveStartedAtMs = Date.now();
        try {
            const inputEvents = await state.inputEventLogger.stop();
            const recordingStartEpochMs = state.inputEventLogger.getRecordingStartTime();
            this.invokeStoppedCallbackIfCurrent(state);
            let stopError;
            try {
                if (!hasFfmpegExited(state.childProcess) && state.childProcess.pid) {
                    await this.stopFfmpegRecording(state);
                }
            } catch (error3) {
                stopError = error3;
                console.warn(`[record-screen] Failed to stop ffmpeg: ${errorMessage2(error3)}`);
            }
            const ffmpegStartedEpochMs = state.ffmpegStartedEpochMs ?? recordingStartEpochMs;
            const stagingSessionDir = state.sessionDir;
            const stagingRecordingDir = path27.join(stagingSessionDir, "recording");
            const proxyPath = path27.join(stagingRecordingDir, "recording_render_proxy_1080p.mp4");
            let actualVideoDurationMs;
            let videoDimensions;
            let sourceFps;
            try {
                await fs15.access(proxyPath, fs15.constants.R_OK);
            } catch (error3) {
                await this.cleanupRecording(state);
                this.clearActiveRecordingIfCurrent(state);
                const message = isErrnoCode(error3, "ENOENT") ? `Recording proxy not found at ${proxyPath}` : `Recording proxy at ${proxyPath} could not be validated: ${errorMessage2(error3)}`;
                return new RecordScreenResult({
                    result: {
                        case: "failure",
                        value: new RecordScreenFailure({
                            error: formatProxyValidationError(message, state, stopError, saveStartedAtMs)
                        })
                    }
                });
            }
            try {
                [actualVideoDurationMs, videoDimensions, sourceFps] = await Promise.all([
                    this.getVideoDurationMs(proxyPath),
                    this.getVideoDimensions(proxyPath),
                    this.getVideoFramerate(proxyPath)
                ]);
                if (actualVideoDurationMs <= 0) {
                    throw new Error(`Recording proxy has zero duration at ${proxyPath}`);
                }
            } catch (error3) {
                await this.cleanupRecording(state);
                const detail = errorMessage2(error3);
                const message = detail.includes(proxyPath) ? detail : `Recording proxy at ${proxyPath} could not be validated: ${detail}`;
                return new RecordScreenResult({
                    result: {
                        case: "failure",
                        value: new RecordScreenFailure({
                            error: formatProxyValidationError(message, state, stopError, saveStartedAtMs)
                        })
                    }
                });
            }
            const renderProxies = {
                profileVersion: _LocalRecordScreenExecutor.PROXY_PROFILE_VERSION,
                generatedAtEpochMs: Date.now(),
                source: {
                    width: videoDimensions.width,
                    height: videoDimensions.height,
                    durationMs: actualVideoDurationMs,
                    fps: sourceFps
                },
                artifacts: [
                    {
                        name: "render_proxy_1080p",
                        path: "recording_render_proxy_1080p.mp4",
                        width: videoDimensions.width,
                        height: videoDimensions.height,
                        fps: _LocalRecordScreenExecutor.PROXY_TARGET_FPS,
                        codec: "h264",
                        profile: _LocalRecordScreenExecutor.PROXY_PROFILE_VERSION,
                        keyint: 1,
                        status: "success",
                        elapsedMs: 0
                    }
                ]
            };
            await this.saveRecordingDataPackage({
                sessionDir: stagingSessionDir,
                durationMs: actualVideoDurationMs,
                recordingStartEpochMs,
                ffmpegStartedEpochMs,
                inputEvents,
                resolution: state.resolution,
                renderProxies
            });
            const { finalVideoPath, requestedFilePathRejectedReason } = await this.resolveArtifactVideoPath({
                saveAsFilename: args.saveAsFilename,
                stagingSessionDir
            });
            try {
                if (this.disablePolishedRendering) {
                    await fs15.copyFile(proxyPath, finalVideoPath);
                } else {
                    const polishedVideoPath = await this.renderPolished(stagingSessionDir);
                    await this.movePolishedVideo(polishedVideoPath, finalVideoPath);
                }
            } catch (error3) {
                await fs15.rm(finalVideoPath, {
                    force: true
                }).catch(()=>void 0);
                throw error3;
            }
            try {
                await fs15.rm(stagingSessionDir, {
                    force: true,
                    recursive: true
                });
            } catch (error3) {
                console.warn(`[record-screen] Failed to remove staging session ${stagingSessionDir}: ${errorMessage2(error3)}`);
            }
            this.clearActiveRecordingIfCurrent(state);
            return new RecordScreenResult({
                result: {
                    case: "saveSuccess",
                    value: new RecordScreenSaveSuccess({
                        path: finalVideoPath,
                        recordingDurationMs: protoInt64.parse(actualVideoDurationMs.toString()),
                        requestedFilePathRejectedReason
                    })
                }
            });
        } catch (error3) {
            await this.cleanupRecording(state);
            this.invokeStoppedCallbackIfCurrent(state);
            return new RecordScreenResult({
                result: {
                    case: "failure",
                    value: new RecordScreenFailure({
                        error: errorMessage2(error3)
                    })
                }
            });
        }
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource40(env_1, createSpan(parentCtx.withName("LocalRecordScreenExecutor.execute")), false);
            try {
                await this.ensureRecordingDirectoryExists();
            } catch (error3) {
                return new RecordScreenResult({
                    result: {
                        case: "failure",
                        value: new RecordScreenFailure({
                            error: `Failed to create recording directory: ${error3 instanceof Error ? error3.message : String(error3)}. Ensure the parent directory exists and has write permissions, or run: sudo mkdir -p ${this.stagingDir} ${this.artifactsDir} && sudo chmod 777 ${this.stagingDir} ${this.artifactsDir}`
                        })
                    }
                });
            }
            if (args.mode === RecordingMode.UNSPECIFIED) {
                return new RecordScreenResult({
                    result: {
                        case: "failure",
                        value: new RecordScreenFailure({
                            error: "Mode must be one of START_RECORDING, SAVE_RECORDING, DISCARD_RECORDING"
                        })
                    }
                });
            }
            switch(args.mode){
                case RecordingMode.START_RECORDING:
                    {
                        this.recordingStoppedCallbackInvoked = false;
                        let wasPriorRecordingCancelled = false;
                        if (this.activeRecording) {
                            const prior = this.activeRecording;
                            if (!this.inFlightSaves.some((entry)=>entry.state === prior)) {
                                wasPriorRecordingCancelled = true;
                                try {
                                    await this.cleanupRecording(prior);
                                    await fs15.rm(prior.sessionDir, {
                                        force: true,
                                        recursive: true
                                    }).catch(()=>{});
                                } catch  {}
                            }
                            this.activeRecording = null;
                        }
                        let childProcess = null;
                        let inputEventLogger = null;
                        let sessionDir = null;
                        try {
                            sessionDir = this.buildSessionDir(args.toolCallId || "recording");
                            await fs15.mkdir(sessionDir, {
                                recursive: true
                            });
                            const { resolutionString, resolution: resolutionConfig } = await detectDisplay(this.display);
                            const { process: ffmpegProcess, videoStartedPromise } = await this.startFfmpegRecording(resolutionString, sessionDir);
                            childProcess = ffmpegProcess;
                            const displayNum = parseDisplayNum(this.display);
                            inputEventLogger = new InputEventLogger({
                                displayNum,
                                resolution: resolutionConfig
                            });
                            await inputEventLogger.start();
                            const startTime = inputEventLogger.getRecordingStartTime();
                            let ffmpegStartedEpochMs;
                            try {
                                ffmpegStartedEpochMs = await videoStartedPromise;
                            } catch (error3) {
                                throw new Error(`ffmpeg failed to start encoding: ${error3 instanceof Error ? error3.message : String(error3)}`);
                            }
                            const state = {
                                childProcess,
                                sessionDir,
                                startTime,
                                inputEventLogger,
                                resolution: resolutionConfig,
                                ffmpegStartedEpochMs,
                                ffmpegDiedEarly: false,
                                ffmpegDiedTime: null,
                                ffmpegExitCode: null,
                                ffmpegExitSignal: null
                            };
                            this.activeRecording = state;
                            if (this.onRecordingStartedCallback) {
                                this.onRecordingStartedCallback(inputEventLogger);
                            }
                            childProcess.once("exit", (code, signal)=>{
                                state.ffmpegDiedEarly = true;
                                state.ffmpegDiedTime = Date.now();
                                state.ffmpegExitCode = code;
                                state.ffmpegExitSignal = signal;
                            });
                            const wasSaveAsFilenameIgnored = !!args.saveAsFilename;
                            return new RecordScreenResult({
                                result: {
                                    case: "startSuccess",
                                    value: new RecordScreenStartSuccess({
                                        wasPriorRecordingCancelled,
                                        wasSaveAsFilenameIgnored
                                    })
                                }
                            });
                        } catch (error3) {
                            if (inputEventLogger) {
                                try {
                                    await inputEventLogger.stop();
                                } catch  {}
                            }
                            if (childProcess && !childProcess.killed && childProcess.pid) {
                                try {
                                    process.kill(childProcess.pid, "SIGKILL");
                                } catch  {}
                            }
                            if (sessionDir) {
                                await fs15.rm(sessionDir, {
                                    force: true,
                                    recursive: true
                                }).catch(()=>{});
                            }
                            this.activeRecording = null;
                            return new RecordScreenResult({
                                result: {
                                    case: "failure",
                                    value: new RecordScreenFailure({
                                        error: error3 instanceof Error ? error3.message : String(error3)
                                    })
                                }
                            });
                        }
                    }
                case RecordingMode.SAVE_RECORDING:
                    {
                        if (!this.activeRecording) {
                            if (this.inFlightSaves.length === 1) {
                                return await this.inFlightSaves[0].promise;
                            }
                            return new RecordScreenResult({
                                result: {
                                    case: "failure",
                                    value: new RecordScreenFailure({
                                        error: "No active recording to save"
                                    })
                                }
                            });
                        }
                        const state = this.activeRecording;
                        const existing = this.findInFlightSave(state);
                        if (existing) {
                            return await existing.promise;
                        }
                        const savePromise = Promise.resolve().then(()=>this.performSave(args, state));
                        const entry = {
                            state,
                            promise: savePromise
                        };
                        this.inFlightSaves.push(entry);
                        try {
                            return await savePromise;
                        } finally{
                            this.inFlightSaves = this.inFlightSaves.filter((pending)=>pending !== entry);
                        }
                    }
                case RecordingMode.DISCARD_RECORDING:
                    {
                        if (!this.activeRecording) {
                            return new RecordScreenResult({
                                result: {
                                    case: "failure",
                                    value: new RecordScreenFailure({
                                        error: "No active recording to discard"
                                    })
                                }
                            });
                        }
                        const state = this.activeRecording;
                        if (this.findInFlightSave(state)) {
                            return new RecordScreenResult({
                                result: {
                                    case: "failure",
                                    value: new RecordScreenFailure({
                                        error: "Save in progress for this recording; wait for it or start a new recording"
                                    })
                                }
                            });
                        }
                        try {
                            await state.inputEventLogger.stop();
                            this.invokeStoppedCallbackOnce();
                            if (!hasFfmpegExited(state.childProcess) && state.childProcess.pid) {
                                await this.stopFfmpegRecording(state);
                            }
                            await fs15.rm(state.sessionDir, {
                                force: true,
                                recursive: true
                            });
                            this.activeRecording = null;
                            return new RecordScreenResult({
                                result: {
                                    case: "discardSuccess",
                                    value: new RecordScreenDiscardSuccess()
                                }
                            });
                        } catch (error3) {
                            await this.cleanupRecording(state);
                            this.invokeStoppedCallbackOnce();
                            const sessionDir = state.sessionDir;
                            let removed = false;
                            try {
                                await fs15.rm(sessionDir, {
                                    force: true,
                                    recursive: true
                                });
                                removed = true;
                            } catch  {}
                            this.activeRecording = null;
                            const detail = error3 instanceof Error ? error3.message : String(error3);
                            const suffix = removed ? "" : `. Session may remain at: ${sessionDir}`;
                            return new RecordScreenResult({
                                result: {
                                    case: "failure",
                                    value: new RecordScreenFailure({
                                        error: `Failed to discard recording: ${detail}${suffix}`
                                    })
                                }
                            });
                        }
                    }
                default:
                    {
                        const _exhaustiveCheck = args.mode;
                        return new RecordScreenResult({
                            result: {
                                case: "failure",
                                value: new RecordScreenFailure({
                                    error: `Unhandled recording mode: ${_exhaustiveCheck}`
                                })
                            }
                        });
                    }
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources40(env_1);
        }
    }
};
LocalRecordScreenExecutor.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS = 3e4;
LocalRecordScreenExecutor.PROXY_TARGET_WIDTH = 1920;
LocalRecordScreenExecutor.PROXY_TARGET_FPS = 60;
LocalRecordScreenExecutor.PROXY_CRF = 17;
LocalRecordScreenExecutor.PROXY_PRESET = "veryfast";
LocalRecordScreenExecutor.PROXY_PROFILE_VERSION = "render-proxy-h264-all-i-v1";
LocalRecordScreenExecutor.DEFAULT_REFRESH_RATE = 60;

}
