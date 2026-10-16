import { Yke } from "./pod_daemon_pb.js";
import { gSe } from "./pod_event_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var fSe, _Se, vSe, j9;
export { _Se, fSe, j9, vSe };
var __wakaru_SE_initialized = false;
export function SE() {
if (__wakaru_SE_initialized) return;
__wakaru_SE_initialized = true;
"use strict";
h(), F(), Yke(), gSe(), fSe = c.makeEnum("anyrun.v1.WorkspaceGitSetupMode", [
    {
        no: 0,
        name: "WORKSPACE_GIT_SETUP_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WORKSPACE_GIT_SETUP_MODE_REUSE",
        localName: "REUSE"
    },
    {
        no: 2,
        name: "WORKSPACE_GIT_SETUP_MODE_REUSE_THEN_CHECKOUT",
        localName: "REUSE_THEN_CHECKOUT"
    },
    {
        no: 3,
        name: "WORKSPACE_GIT_SETUP_MODE_NO_REPO",
        localName: "NO_REPO"
    }
]), _Se = c.makeEnum("anyrun.v1.WarmForkMode", [
    {
        no: 0,
        name: "WARM_FORK_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WARM_FORK_MODE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "WARM_FORK_MODE_FORKED",
        localName: "FORKED"
    },
    {
        no: 3,
        name: "WARM_FORK_MODE_COLD_FALLBACK",
        localName: "COLD_FALLBACK"
    },
    {
        no: 4,
        name: "WARM_FORK_MODE_LAZY_LOAD",
        localName: "LAZY_LOAD"
    },
    {
        no: 5,
        name: "WARM_FORK_MODE_COLD_FALLBACK_LAZY_LOAD",
        localName: "COLD_FALLBACK_LAZY_LOAD"
    }
]), vSe = c.makeEnum("anyrun.v1.EnvironmentBuildResolution", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_RESOLUTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_RESOLUTION_RESOLVED",
        localName: "RESOLVED"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_RESOLUTION_NO_FINISHED_BUILDS",
        localName: "NO_FINISHED_BUILDS"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_RESOLUTION_NO_HEALTHY_BUILDS",
        localName: "NO_HEALTHY_BUILDS"
    }
]), j9 = c.makeMessageType("anyrun.v1.EnvironmentBuildBootInfo", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "workspace_git_setup_mode",
            kind: "enum",
            T: c.getEnumType(fSe)
        },
        {
            no: 4,
            name: "warm_fork_mode",
            kind: "enum",
            T: c.getEnumType(_Se)
        },
        {
            no: 5,
            name: "fast_forward_default_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "resolution",
            kind: "enum",
            T: c.getEnumType(vSe)
        },
        {
            no: 7,
            name: "default_image_fallback",
            kind: "scalar",
            T: 8
        }
    ]);

}
