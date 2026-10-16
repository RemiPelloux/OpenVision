import { createSurfaceTestHooks, owningClientInstanceIdFromHost, startAgentHostRpcServer } from "./daemon_metrics_exports.js";
import { stitch_exports } from "./stitch_exports.js";
import { init_stitch } from "./src/stitch.ts";
import { SurfaceChannelHub } from "./src/surface-channel-hub.ts";
export async function startAgentHostDaemon(options2) {
    if (options2.host !== void 0 && options2.stitch !== void 0) {
        throw new Error("pass either host or stitch, not both");
    }
    const owned = options2.stitch === void 0 ? void 0 : await (await Promise.resolve().then(()=>(init_stitch(), stitch_exports))).createStitchedAgentHost(options2.stitch);
    const host = options2.host ?? owned?.host;
    if (host === void 0) {
        throw new Error("host or stitch is required");
    }
    const surfaceHub = options2.surfaceHub ?? owned?.surfaceHub ?? new SurfaceChannelHub();
    const resolveOwningClientInstanceId = (sessionId)=>owned?.owningClientInstanceId(sessionId) ?? owningClientInstanceIdFromHost(host, sessionId);
    const spawnDemoShell = owned === void 0 ? void 0 : (args)=>owned.shellOutput.spawnDemo(args);
    const surfaceTestHooks = createSurfaceTestHooks({
        hub: surfaceHub,
        resolveOwningClientInstanceId,
        spawnDemoShell,
        sessionStorage: options2.sessionStorage ?? owned?.sessionStorage
    });
    const disposeOwnedHub = owned?.surfaceHub === void 0;
    const localLoopEnabled = options2.localLoopEnabled ?? options2.stitch?.localLoop === true;
    const stopHolder = {};
    let server;
    try {
        server = await startAgentHostRpcServer({
            listen: options2.listen,
            host,
            sessionStorage: options2.sessionStorage ?? owned?.sessionStorage,
            auth: owned?.auth,
            surfaceHub,
            resolveOwningClientInstanceId,
            applySessionPermissions: owned?.applySessionPermissions,
            shellOutput: owned?.shellOutput,
            ...options2.bindSpawnDemoShell === true ? {
                spawnDemoShell
            } : {},
            unlinkExistingSocket: options2.unlinkExistingSocket,
            localLoopEnabled,
            enableSurfaceTestHooks: options2.enableSurfaceTestHooks === true,
            scheduleShutdown: (_reason)=>{
                setTimeout(()=>{
                    void (stopHolder.stop?.() ?? Promise.resolve()).finally(()=>{
                        options2.onRpcShutdownComplete?.();
                    });
                }, 0);
            }
        });
    } catch (error3) {
        if (owned !== void 0) {
            await owned.dispose();
        }
        throw error3;
    }
    const disposeHostOnStop = options2.disposeHostOnStop ?? owned !== void 0;
    let stopping;
    const daemon = {
        listen: server.listen,
        surfaceHub,
        surfaceTestHooks,
        stop: ()=>{
            stopping ??= (async ()=>{
                try {
                    await server.close();
                } finally{
                    if (disposeOwnedHub) {
                        surfaceHub.dispose();
                    }
                    if (owned !== void 0) {
                        await owned.dispose();
                    } else if (disposeHostOnStop) {
                        await host.dispose();
                    }
                }
            })();
            return stopping;
        }
    };
    stopHolder.stop = ()=>daemon.stop();
    return daemon;
}

export var daemon_exports = {};
Object.defineProperty(daemon_exports, "startAgentHostDaemon", {
    enumerable: true,
    get: ()=>startAgentHostDaemon
});
