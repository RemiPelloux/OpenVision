import { E } from "./tslib.es6.js";
var tWm, nWm, iWm, rWm, sWm, oWm;
export { iWm, nWm, oWm, rWm, sWm, tWm };
var __wakaru_$Z1_initialized = false;
export function $Z1() {
if (__wakaru_$Z1_initialized) return;
__wakaru_$Z1_initialized = true;
"use strict";
E(), tWm = [
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
], nWm = [
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
], iWm = [
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
], rWm = [
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
], sWm = {
    all: "list-bullets",
    user: "person",
    project: "folder",
    team: "organization",
    plugin: "extensions"
}, oWm = {
    all: "All",
    user: "Local",
    project: "Workspace",
    team: "Team",
    plugin: "Plugin"
};

}
