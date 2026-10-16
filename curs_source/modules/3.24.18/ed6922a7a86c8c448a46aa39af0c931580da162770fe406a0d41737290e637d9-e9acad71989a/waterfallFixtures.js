import { bi } from "./protobuf.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
import { Akt, BD, Rkt, WNn, dlo, hlo, m1e, mlo, plo, uet } from "./waterfall_update_pb.js";
function Ljt(e) {
    return Nr.fromDate(new Date(CAh + e));
}
function j$(e, t, n) {
    return {
        atMs: t,
        update: new Rkt({
            timestamp: Ljt(t),
            update: {
                case: "spanStart",
                value: new dlo({
                    spanId: e,
                    parentSpanId: n,
                    phaseType: wAh[e] ?? BD.UNSPECIFIED
                })
            }
        })
    };
}
function q$(e, t, n = Akt.SUCCESS) {
    return {
        atMs: t,
        update: new Rkt({
            timestamp: Ljt(t),
            update: {
                case: "spanEnd",
                value: new hlo({
                    spanId: e,
                    endStatus: n
                })
            }
        })
    };
}
function kAh(e, t, n, i) {
    return {
        atMs: t,
        update: new Rkt({
            timestamp: Ljt(t),
            update: {
                case: "spanStatusUpdate",
                value: new mlo({
                    spanId: e,
                    timestamp: Ljt(t),
                    statusType: n,
                    message: i
                })
            }
        })
    };
}
function YE(e, t, n, i = m1e.INFO) {
    return {
        atMs: t,
        update: new Rkt({
            timestamp: Ljt(t),
            update: {
                case: "spanLog",
                value: new plo({
                    spanId: e,
                    timestamp: Ljt(t),
                    message: n,
                    level: i
                })
            }
        })
    };
}
function un_() {
    return [
        j$(tB, 0),
        j$("createCloudWorkspace", 0, tB),
        YE("createCloudWorkspace", 100, "$ python3 -u scripts/setup/cloud_mini_init.py --allocate-workspace"),
        YE("createCloudWorkspace", 250, "Requesting cloud workspace capacity"),
        YE("createCloudWorkspace", 450, "Starting Docker service..."),
        YE("createCloudWorkspace", 550, " * Starting Docker: docker"),
        YE("createCloudWorkspace", 650, "   ...done."),
        YE("createCloudWorkspace", 750, "Waiting for Docker to be accessible..."),
        YE("createCloudWorkspace", 850, "Docker is accessible"),
        YE("createCloudWorkspace", 950, "Docker start command completed for cloud environment (ready=true)"),
        q$("createCloudWorkspace", 1e3),
        j$("restoreWorkspaceFiles", 1e3, tB),
        YE("restoreWorkspaceFiles", 1100, "$ python3 -u scripts/setup/cloud_mini_init.py --restore-workspace"),
        YE("restoreWorkspaceFiles", 1250, "Checking workspace snapshot cache"),
        YE("restoreWorkspaceFiles", 1450, "Restoring filesystem into /workspace"),
        YE("restoreWorkspaceFiles", 1600, "Hydrating repo files from remote checkpoint"),
        YE("restoreWorkspaceFiles", 1750, "Writing Cursor project metadata to /home/ubuntu/.cursor/projects/workspace"),
        YE("restoreWorkspaceFiles", 1850, "Creating /opt/cursor/artifacts/assets"),
        YE("restoreWorkspaceFiles", 1950, "Workspace restore completed"),
        q$("restoreWorkspaceFiles", 2e3),
        j$("setUpRepository", 2e3, tB),
        YE("setUpRepository", 2300, "$ git fetch --depth=1 origin"),
        YE("setUpRepository", 2600, "$ git checkout HEAD"),
        q$("setUpRepository", 3e3),
        j$("startAgentServices", 3e3, tB),
        q$("startAgentServices", 4e3),
        j$("installDependencies", 4e3, tB),
        YE("installDependencies", 4300, "$ pnpm install --frozen-lockfile"),
        YE("installDependencies", 4600, "Packages: +1423"),
        q$("installDependencies", 5e3),
        j$("runWorkspaceSetup", 5e3, tB),
        YE("runWorkspaceSetup", 5300, "$ ./scripts/setup.sh"),
        q$("runWorkspaceSetup", 6e3),
        j$("installExtensions", 6e3, tB),
        q$("installExtensions", 6600),
        j$("completeSetup", 6600, tB),
        q$("completeSetup", 7600),
        q$(tB, 8e3)
    ];
}
function dn_() {
    return [
        j$(tB, 0),
        j$("createCloudWorkspace", 0, tB),
        YE("createCloudWorkspace", 200, "$ python3 -u scripts/setup/cloud_mini_init.py --allocate-workspace"),
        YE("createCloudWorkspace", 400, "Requesting cloud workspace capacity"),
        YE("createCloudWorkspace", 650, "Starting Docker service..."),
        YE("createCloudWorkspace", 850, "Waiting for Docker to be accessible..."),
        YE("createCloudWorkspace", 950, "Docker start command completed for cloud environment (ready=true)"),
        q$("createCloudWorkspace", 1e3),
        j$("provisionSandbox", 1e3, tB),
        YE("provisionSandbox", 1300, "Provisioning sandbox"),
        kAh("provisionSandbox", 2e3, uet.WARN, "Cursor could not use the preferred workspace snapshot, so setup continued from the default workspace image. Network egress is restricted; some hosts may be unreachable."),
        q$("provisionSandbox", 2e3),
        j$("setUpRepository", 2e3, tB),
        YE("setUpRepository", 2300, "$ git fetch --depth=1 origin"),
        YE("setUpRepository", 2600, "$ git checkout HEAD"),
        YE("setUpRepository", 2850, "HEAD is now at 9f2c1ab Update README"),
        q$("setUpRepository", 3e3),
        j$("installDependencies", 3e3, tB),
        YE("installDependencies", 3300, "$ pnpm install --frozen-lockfile"),
        YE("installDependencies", 3600, "Packages: +1423"),
        YE("installDependencies", 3850, "Done in 11.2s"),
        q$("installDependencies", 4e3),
        j$("completeSetup", 4e3, tB),
        q$("completeSetup", 4500),
        q$(tB, 5500)
    ];
}
function hn_() {
    return [
        j$(tB, 0),
        j$("createCloudWorkspace", 0, tB),
        q$("createCloudWorkspace", 1e3),
        j$("restoreWorkspaceFiles", 1e3, tB),
        q$("restoreWorkspaceFiles", 2e3),
        j$("setUpRepository", 2e3, tB),
        YE("setUpRepository", 2300, "$ git fetch --depth=1 origin"),
        YE("setUpRepository", 2700, "fatal: unable to access GitHub: Could not resolve host", m1e.ERROR),
        kAh("setUpRepository", 2900, uet.ERROR, "Unable to reach GitHub during checkout. Cursor could not finish environment setup. Please review network access, credentials, and environment setup and retry."),
        q$("setUpRepository", 3e3, Akt.FAILURE),
        q$(tB, 3e3, Akt.FAILURE)
    ];
}
var wAh, CAh, tB, TAh;
export { CAh, Ljt, TAh, YE, dn_, hn_, j$, kAh, q$, tB, un_, wAh };
var __wakaru_mn__initialized = false;
export function mn_() {
if (__wakaru_mn__initialized) return;
__wakaru_mn__initialized = true;
"use strict";
x(), bi(), WNn(), wAh = {
    prepareEnvironment: BD.ENVIRONMENT,
    createCloudWorkspace: BD.CREATE_CLOUD_WORKSPACE,
    provisionSandbox: BD.PROVISION_SANDBOX,
    restoreWorkspaceFiles: BD.RESTORE_WORKSPACE_FILES,
    setUpRepository: BD.SETUP_REPOSITORY,
    installDependencies: BD.INSTALL_DEPENDENCIES,
    runWorkspaceSetup: BD.RUN_WORKSPACE_SETUP,
    startAgentServices: BD.START_AGENT_SERVICES,
    installExtensions: BD.INSTALL_EXTENSIONS,
    completeSetup: BD.COMPLETE
}, CAh = Date.UTC(2026, 5, 2, 5, 0, 0), tB = "prepareEnvironment", TAh = {
    happyPath: un_,
    warning: dn_,
    error: hn_
};

}
