require.d(exports, {
    pushExecActivationRequestContext: ()=>n
});
var o = require(70857), s = require(25925), i = require(68388), c = require(91398);
function n(r) {
    const t = (0, i.yn)(r.workspacePath, o.homedir()), e = function() {
        let r = c.env.shell ?? "";
        try {
            const t = c.workspace.getConfiguration("terminal.integrated"), e = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", o = t.get(`defaultProfile.${e}`);
            if (o) {
                const s = t.get(`profiles.${e}`), i = s?.[o]?.path;
                i && (r = i);
            }
        } catch  {}
        return r;
    }();
    c.cursor.pushMcpWorkspaceProjectDir(r.projectDir), c.cursor.pushEnvStaticData({
        osVersion: `${o.platform()} ${o.release()}`,
        shell: (0, s.G6)(e),
        projectDir: r.projectDir,
        isWorkingDirHomeDir: t
    });
}
