import { qn } from "./async.js";
import { Du } from "./dashboard_pb.js";
import { nl } from "./index.ts";
import { Bid, Fid, exo } from "./scm-provider-installations.ts";
import { E } from "./tslib.es6.js";
var UNi, Xws, $Bl, ZUf, QUf, jNi, $Ni, Zws;
export { $Bl, $Ni, QUf, UNi, Xws, ZUf, Zws, jNi };
var __wakaru_Qws_initialized = false;
export function Qws() {
if (__wakaru_Qws_initialized) return;
__wakaru_Qws_initialized = true;
"use strict";
E(), nl(), qn(), Du(), UNi = 8, Xws = 1, $Bl = 100, ZUf = 200, QUf = new Set([
    "rate-limited"
]), jNi = 20, $Ni = [
    {
        id: "github.com",
        provider: "github",
        repositoryFetchMode: "paged"
    },
    {
        id: "gitlab.com",
        provider: "gitlab",
        gitEnterpriseUuid: exo,
        repositoryFetchMode: "all"
    },
    {
        id: "bitbucket.org",
        provider: "bitbucket",
        gitEnterpriseUuid: Bid,
        repositoryFetchMode: "all"
    },
    {
        id: "dev.azure.com",
        provider: "azure-devops",
        gitEnterpriseUuid: Fid,
        repositoryFetchMode: "all"
    }
], Zws = class extends Error {
};

}
