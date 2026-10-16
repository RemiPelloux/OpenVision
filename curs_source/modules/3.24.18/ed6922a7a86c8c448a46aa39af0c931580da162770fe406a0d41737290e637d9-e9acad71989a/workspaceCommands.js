import { T1, mRn, sT } from "./De_3.js";
import { Ae, S } from "./HVr.js";
import { Ar, Ji } from "./cancellation.js";
import { $n, ki, vi } from "./commands.js";
import { Fc, lv } from "./dialogs.js";
import { Fi, Ig } from "./files.js";
import { WM } from "./getIconClasses.js";
import { dc, yu } from "./label.js";
import { kl, pc } from "./language.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { fu, zl } from "./pathService.js";
import { iOt } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Li, ml } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
import { Coe, yLe } from "./workspaceEditing.js";
import { IA, KM } from "./workspaces.js";
async function T3h(e) {
    const t = e.get(lv), n = e.get(zl);
    return await t.showOpenDialog({
        openLabel: mRn(S(3239, null)),
        title: S(3240, null),
        canSelectFolders: !0,
        canSelectMany: !0,
        defaultUri: await t.defaultFolderPath(),
        availableFileSystems: [
            n.defaultUriScheme
        ]
    });
}
var d5n, ARo, RRo, X8e;
export { ARo, RRo, T3h, X8e, d5n };
var __wakaru_zqt_initialized = false;
export function zqt() {
if (__wakaru_zqt_initialized) return;
__wakaru_zqt_initialized = true;
"use strict";
x(), rt(), ci(), yLe(), Li(), Ar(), sT(), vi(), Fi(), yu(), Ya(), WM(), Ll(), kl(), Fc(), Qt(), li(), IA(), fu(), d5n = "addRootFolder", ARo = Ae(3242, "Add Folder to Workspace..."), RRo = "setRootFolder", X8e = "_workbench.pickWorkspaceFolder", ki.registerCommand({
    id: "workbench.action.files.openFileFolderInNewWindow",
    handler: (e)=>e.get(lv).pickFileFolderAndOpen({
            forceNewWindow: !0
        })
}), ki.registerCommand({
    id: "_files.pickFolderAndOpen",
    handler: (e, t)=>e.get(lv).pickFolderAndOpen(t)
}), ki.registerCommand({
    id: "workbench.action.files.openFolderInNewWindow",
    handler: (e)=>e.get(lv).pickFolderAndOpen({
            forceNewWindow: !0
        })
}), ki.registerCommand({
    id: "workbench.action.files.openFileInNewWindow",
    handler: (e)=>e.get(lv).pickFileAndOpen({
            forceNewWindow: !0
        })
}), ki.registerCommand({
    id: "workbench.action.openWorkspaceInNewWindow",
    handler: (e)=>e.get(lv).pickWorkspaceAndOpen({
            forceNewWindow: !0
        })
}), ki.registerCommand({
    id: d5n,
    handler: async (e)=>{
        const t = e.get(Coe), n = await T3h(e);
        !n || !n.length || await t.addFolders(n.map((i)=>({
                uri: i
            })));
    }
}), ki.registerCommand({
    id: RRo,
    handler: async (e)=>{
        const t = e.get(Coe), n = e.get(Jn), i = await T3h(e);
        !i || !i.length || await t.updateFolders(0, n.getWorkspace().folders.length, i.map((r)=>({
                uri: r
            })));
    }
}), ki.registerCommand(X8e, async function(e, t) {
    const n = e.get(Gs), i = e.get(dc), r = e.get(Jn), s = e.get(fc), o = e.get(pc), a = r.getWorkspace().folders;
    if (!a.length) return;
    const c = a.map((p)=>{
        const g = p.name, f = i.getUriLabel(ml(p.uri), {
            relative: !0
        });
        return {
            label: g,
            description: f !== g ? f : void 0,
            folder: p,
            iconClasses: T1(s, o, p.uri, Ig.ROOT_FOLDER)
        };
    }), l = (t ? t[0] : void 0) || Object.create(null);
    l.activeItem || (l.activeItem = c[0]), l.placeHolder || (l.placeHolder = S(3241, null)), typeof l.matchOnDescription != "boolean" && (l.matchOnDescription = !0);
    const u = (t ? t[1] : void 0) || Ji.None, h = await n.pick(c, l, u);
    if (h) return a[c.indexOf(h)];
}), ki.registerCommand({
    id: "vscode.openFolder",
    handler: (e, t, n)=>{
        const i = e.get($n);
        if (typeof n == "boolean" && (n = {
            forceNewWindow: n
        }), !t) {
            const a = {
                forceNewWindow: n?.forceNewWindow
            };
            return n?.forceLocalWindow && (a.remoteAuthority = null, a.availableFileSystems = [
                "file"
            ]), i.executeCommand("_files.pickFolderAndOpen", a);
        }
        const r = Ee.from(t, !0), s = {
            forceNewWindow: n?.forceNewWindow,
            cursorForceNewWindow: n?.cursorForceNewWindow,
            forceReuseWindow: n?.forceReuseWindow,
            noRecentEntry: n?.noRecentEntry,
            remoteAuthority: n?.forceLocalWindow ? null : void 0,
            forceProfile: n?.forceProfile,
            forceTempProfile: n?.forceTempProfile
        }, o = iOt(r) || r.scheme === gt.untitled ? {
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
                constraint: (e)=>e == null || e instanceof Ee
            },
            {
                name: "options",
                description: "(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",
                constraint: (e)=>e === void 0 || typeof e == "object" || typeof e == "boolean"
            }
        ]
    }
}), ki.registerCommand({
    id: "vscode.newWindow",
    handler: (e, t)=>{
        const n = e.get($n), i = {
            forceReuseWindow: t && t.reuseWindow,
            remoteAuthority: t && t.remoteAuthority
        };
        return n.executeCommand("_files.newWindow", i);
    },
    metadata: {
        description: "Opens an new window depending on the newWindow argument.",
        args: [
            {
                name: "options",
                description: "(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",
                constraint: (e)=>e === void 0 || typeof e == "object"
            }
        ]
    }
}), ki.registerCommand("_workbench.removeFromRecentlyOpened", function(e, t) {
    return e.get(KM).removeRecentlyOpened([
        t
    ]);
}), ki.registerCommand({
    id: "vscode.removeFromRecentlyOpened",
    handler: (e, t)=>{
        const n = e.get(KM);
        return typeof t == "string" ? t = t.match(/^[^:/?#]+:\/\//) ? Ee.parse(t) : Ee.file(t) : t = Ee.revive(t), n.removeRecentlyOpened([
            t
        ]);
    },
    metadata: {
        description: "Removes an entry with the given path from the recently opened list.",
        args: [
            {
                name: "path",
                description: "URI or URI string to remove from recently opened.",
                constraint: (e)=>typeof e == "string" || e instanceof Ee
            }
        ]
    }
}), ki.registerCommand("_workbench.addToRecentlyOpened", async function(e, t) {
    const n = e.get(KM), i = t.uri, r = t.label, s = t.remoteAuthority;
    let o;
    return t.type === "workspace" ? o = {
        workspace: await n.getWorkspaceIdentifier(i),
        label: r,
        remoteAuthority: s
    } : t.type === "folder" ? o = {
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
}), ki.registerCommand("_workbench.getRecentlyOpened", async function(e) {
    return e.get(KM).getRecentlyOpened();
});

}
