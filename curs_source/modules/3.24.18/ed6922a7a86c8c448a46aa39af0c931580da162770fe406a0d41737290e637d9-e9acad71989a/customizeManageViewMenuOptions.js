import { x } from "./tslib.es6.js";
var grh, frh, vrh, _rh, brh, yrh;
export { _rh, brh, frh, grh, vrh, yrh };
var __wakaru_PFv_initialized = false;
export function PFv() {
if (__wakaru_PFv_initialized) return;
__wakaru_PFv_initialized = true;
"use strict";
x(), grh = [
    {
        value: "status",
        label: "Status",
        icon: "circle-dashed"
    },
    {
        value: "scope",
        label: "Scope",
        icon: "folder"
    }
], frh = [
    {
        value: "name",
        label: "Name",
        icon: "text-aa"
    },
    {
        value: "mostUsed",
        label: "Most Used",
        icon: "chart-bars",
        disabled: !0
    }
], vrh = [
    {
        value: "scope",
        label: "Source",
        icon: "folder"
    },
    {
        value: "author",
        label: "Author",
        icon: "person"
    }
], _rh = [
    {
        value: "name",
        label: "Name",
        icon: "text-aa"
    },
    {
        value: "author",
        label: "Author",
        icon: "person"
    }
], brh = {
    all: "list-bullets",
    user: "person",
    project: "folder",
    team: "organization",
    plugin: "extensions"
}, yrh = {
    all: "All",
    user: "Local",
    project: "Workspace",
    team: "Team",
    plugin: "Plugin"
};

}
