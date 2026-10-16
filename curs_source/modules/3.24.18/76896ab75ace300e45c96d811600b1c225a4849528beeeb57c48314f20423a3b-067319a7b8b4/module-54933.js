require.d(exports, {
    registerCursorIgnoreFileWatcher: ()=>n
});
var s = require(91105), a = require(91398);
function n(e) {
    const r = a.workspace.createFileSystemWatcher("**/.cursorignore"), t = (r)=>{
        for (const t of e())r(t).catch(()=>{});
    };
    return r.onDidCreate(async (e)=>{
        const r = await (0, s.yeE)(e.fsPath);
        null !== r && t((e)=>e.handleCursorIgnoreCreated(r));
    }), r.onDidChange(async (e)=>{
        const r = await (0, s.yeE)(e.fsPath);
        null !== r && t((e)=>e.handleCursorIgnoreChanged(r));
    }), r.onDidDelete(async (e)=>{
        const r = await (0, s.yeE)(e.fsPath) ?? (0, s.gMI)(e.fsPath);
        t((e)=>e.handleCursorIgnoreDeleted(r));
    }), r;
}
