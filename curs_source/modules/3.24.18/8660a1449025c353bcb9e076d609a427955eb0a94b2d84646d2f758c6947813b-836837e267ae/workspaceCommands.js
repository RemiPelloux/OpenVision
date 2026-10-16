import { At, D } from "./Iwo.js";
import { F6t } from "./SZu.js";
import { nAg } from "./Ycg.js";
import { Xs, yo } from "./cancellation.js";
import { hs, nr, rs } from "./commands.js";
import { NS, bd } from "./dialogs.js";
import { ms, wk } from "./files.js";
import { EB } from "./getIconClasses.js";
import { Nx, pR } from "./ipa.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { ih } from "./pathService.js";
import { Cl, Gu } from "./quickInput.js";
import { Lr, Mc } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Sr, yr } from "./workspace.js";
import { Uat, eTe } from "./workspaceEditing.js";
import { HM, lN } from "./workspaces.js";
var hAi, gfl, ffl, MEt;
export { MEt, ffl, gfl, hAi };
var __wakaru_pAi_initialized = false;
export function pAi() {
if (__wakaru_pAi_initialized) return;
__wakaru_pAi_initialized = true;
"use strict";
E(), Bt(), Sr(), Uat(), Lr(), yo(), Nx(), rs(), ms(), qg(), Gu(), EB(), xp(), Kp(), bd(), fn(), Ki(), HM(), ih(), hAi = "addRootFolder", gfl = At(3242, "Add Folder to Workspace..."), ffl = "setRootFolder", MEt = "_workbench.pickWorkspaceFolder", hs.registerCommand({
    id: "workbench.action.files.openFileFolderInNewWindow",
    handler: (t)=>t.get(NS).pickFileFolderAndOpen({
            forceNewWindow: !0
        })
}), hs.registerCommand({
    id: "_files.pickFolderAndOpen",
    handler: (t, e)=>t.get(NS).pickFolderAndOpen(e)
}), hs.registerCommand({
    id: "workbench.action.files.openFolderInNewWindow",
    handler: (t)=>t.get(NS).pickFolderAndOpen({
            forceNewWindow: !0
        })
}), hs.registerCommand({
    id: "workbench.action.files.openFileInNewWindow",
    handler: (t)=>t.get(NS).pickFileAndOpen({
            forceNewWindow: !0
        })
}), hs.registerCommand({
    id: "workbench.action.openWorkspaceInNewWindow",
    handler: (t)=>t.get(NS).pickWorkspaceAndOpen({
            forceNewWindow: !0
        })
}), hs.registerCommand({
    id: hAi,
    handler: async (t)=>{
        const e = t.get(eTe), n = await nAg(t);
        !n || !n.length || await e.addFolders(n.map((i)=>({
                uri: i
            })));
    }
}), hs.registerCommand({
    id: ffl,
    handler: async (t)=>{
        const e = t.get(eTe), n = t.get(yr), i = await nAg(t);
        !i || !i.length || await e.updateFolders(0, n.getWorkspace().folders.length, i.map((r)=>({
                uri: r
            })));
    }
}), hs.registerCommand(MEt, async function(t, e) {
    const n = t.get(Cl), i = t.get(Yp), r = t.get(yr), s = t.get(dd), o = t.get(Ph), a = r.getWorkspace().folders;
    if (!a.length) return;
    const l = a.map((h)=>{
        const p = h.name, g = i.getUriLabel(Mc(h.uri), {
            relative: !0
        });
        return {
            label: p,
            description: g !== p ? g : void 0,
            folder: h,
            iconClasses: pR(s, o, h.uri, wk.ROOT_FOLDER)
        };
    }), c = (e ? e[0] : void 0) || Object.create(null);
    c.activeItem || (c.activeItem = l[0]), c.placeHolder || (c.placeHolder = D(3241, null)), typeof c.matchOnDescription != "boolean" && (c.matchOnDescription = !0);
    const u = (e ? e[1] : void 0) || Xs.None, d = await n.pick(l, c, u);
    if (d) return a[l.indexOf(d)];
}), hs.registerCommand({
    id: "vscode.openFolder",
    handler: (t, e, n)=>{
        const i = t.get(nr);
        if (typeof n == "boolean" && (n = {
            forceNewWindow: n
        }), !e) {
            const a = {
                forceNewWindow: n?.forceNewWindow
            };
            return n?.forceLocalWindow && (a.remoteAuthority = null, a.availableFileSystems = [
                "file"
            ]), i.executeCommand("_files.pickFolderAndOpen", a);
        }
        const r = rt.from(e, !0), s = {
            forceNewWindow: n?.forceNewWindow,
            cursorForceNewWindow: n?.cursorForceNewWindow,
            forceReuseWindow: n?.forceReuseWindow,
            noRecentEntry: n?.noRecentEntry,
            remoteAuthority: n?.forceLocalWindow ? null : void 0,
            forceProfile: n?.forceProfile,
            forceTempProfile: n?.forceTempProfile
        }, o = F6t(r) || r.scheme === Ot.untitled ? {
            workspaceUri: r
        } : {
            folderUri: r
        };
        return i.executeCommand("_files.windowOpen", [
            o
        ], s);
    },
    metadata: {
        description: "Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.",
        args: [
            {
                name: "uri",
                description: "(optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder",
                constraint: (t)=>t == null || t instanceof rt
            },
            {
                name: "options",
                description: "(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",
                constraint: (t)=>t === void 0 || typeof t == "object" || typeof t == "boolean"
            }
        ]
    }
}), hs.registerCommand({
    id: "vscode.newWindow",
    handler: (t, e)=>{
        const n = t.get(nr), i = {
            forceReuseWindow: e && e.reuseWindow,
            remoteAuthority: e && e.remoteAuthority
        };
        return n.executeCommand("_files.newWindow", i);
    },
    metadata: {
        description: "Opens an new window depending on the newWindow argument.",
        args: [
            {
                name: "options",
                description: "(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",
                constraint: (t)=>t === void 0 || typeof t == "object"
            }
        ]
    }
}), hs.registerCommand("_workbench.removeFromRecentlyOpened", function(t, e) {
    return t.get(lN).removeRecentlyOpened([
        e
    ]);
}), hs.registerCommand({
    id: "vscode.removeFromRecentlyOpened",
    handler: (t, e)=>{
        const n = t.get(lN);
        return typeof e == "string" ? e = e.match(/^[^:/?#]+:\/\//) ? rt.parse(e) : rt.file(e) : e = rt.revive(e), n.removeRecentlyOpened([
            e
        ]);
    },
    metadata: {
        description: "Removes an entry with the given path from the recently opened list.",
        args: [
            {
                name: "path",
                description: "URI or URI string to remove from recently opened.",
                constraint: (t)=>typeof t == "string" || t instanceof rt
            }
        ]
    }
}), hs.registerCommand("_workbench.addToRecentlyOpened", async function(t, e) {
    const n = t.get(lN), i = e.uri, r = e.label, s = e.remoteAuthority;
    let o;
    return e.type === "workspace" ? o = {
        workspace: await n.getWorkspaceIdentifier(i),
        label: r,
        remoteAuthority: s
    } : e.type === "folder" ? o = {
        folderUri: i,
        label: r,
        remoteAuthority: s
    } : o = {
        fileUri: i,
        label: r,
        remoteAuthority: s
    }, n.addRecentlyOpened([
        o
    ]);
}), hs.registerCommand("_workbench.getRecentlyOpened", async function(t) {
    return t.get(lN).getRecentlyOpened();
});

}
