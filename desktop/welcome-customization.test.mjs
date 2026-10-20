import { test } from 'node:test';
import assert from 'node:assert/strict';
import { customizeWelcome, customizeEarlyWelcome } from './welcome-customization.mjs';

test('welcome replacement preserves following runtime initializers and is idempotent', () => {
  const source = `function yHC() { return { "logged-out-glass-screen": true }; }
(initializeControls(), initializeServices());
function eGC() { return Xd.FIRST_LAUNCH_SPLASH_SHOWN; }
(initializeSplash());`;
  const result = customizeWelcome(source, 'glass');
  assert.ok(result.includes('(initializeControls(), initializeServices());'));
  assert.ok(result.includes('(initializeSplash());'));
  assert.equal(customizeWelcome(result, 'glass'), result);
  assert.equal(customizeWelcome(source, 'desktop'), source);
  assert.throws(() => customizeWelcome(source.replace('logged-out-glass-screen', 'different-owner'), 'glass'), /ownership changed/);
  assert.throws(() => customizeWelcome(source + '\nfunction yHC() {}', 'glass'), /ambiguous/);
});

test('early startup owner is retired without consuming the bootstrap invocation', () => {
  const source = `function showWelcomeSplashEarly(document) { ensureWelcomeSplashEarlyStylesheet(document); }
(bootstrap());`;
  const result = customizeEarlyWelcome(source);
  assert.ok(result.endsWith('(bootstrap());'));
  assert.equal(customizeEarlyWelcome(result), result);
  assert.throws(() => customizeEarlyWelcome(source.replace('ensureWelcomeSplashEarlyStylesheet', 'unknownOwner')), /ownership changed/);
});

test('Project Home Enter workspace opens the calling window project instead of an empty editor', async () => {
  const { openCallerProject } = await import('./welcome-customization.mjs');
  const source = `class Host {
          async cursorFocusOrOpenEditorWindow(e) {
            const t = this.windowsMainService.getWindows().find((i) => i.config?.glass !== !0);
            if (t) return (t.focus({ force: !0 }), !0);
            const { glass: n, classic: r, ...s } = this.environmentMainService.args;
            return (
              await this.windowsMainService.open({
                context: 5,
                contextWindowId: e,
                cli: { ...s, classic: !0, glass: !1 },
                forceNewWindow: !0,
                forceEmpty: !0,
              }),
              !0
            );
          }
}`;
  const after = openCallerProject(source);
  assert.equal(openCallerProject(after), after);
  const Host = new Function(`${after}; return Host;`)();
  const run = async (callerWorkspace, others = []) => {
    const opened = [], focused = [];
    const windows = [{ id: 1, config: { glass: true }, openedWorkspace: callerWorkspace },
      ...others.map(([id, workspace]) => ({ id, config: {}, openedWorkspace: workspace, focus: () => focused.push(id) }))];
    const host = Object.assign(new Host(), {
      environmentMainService: { args: { glass: true, _: [] } },
      windowsMainService: { getWindows: () => windows, getWindowById: id => windows.find(window => window.id === id),
        open: async options => { opened.push(options); } },
    });
    await host.cursorFocusOrOpenEditorWindow(1);
    return { opened, focused };
  };
  const folder = { id: 'a', uri: { path: '/projects/a' } };
  const fresh = await run(folder, [[2, { id: 'b', uri: { path: '/projects/b' } }]]);
  assert.deepEqual(fresh.focused, [], 'An editor on another project is not reused');
  assert.deepEqual(fresh.opened[0].urisToOpen, [{ folderUri: folder.uri }]);
  assert.equal(fresh.opened[0].forceEmpty, undefined);
  assert.deepEqual(fresh.opened[0].cli, { _: [], classic: true, glass: false });
  assert.deepEqual((await run(folder, [[3, folder]])).focused, [3], 'An editor on the same project is focused');
  const workspace = { id: 'w', configPath: { path: '/projects/w.code-workspace' } };
  assert.deepEqual((await run(workspace)).opened[0].urisToOpen, [{ workspaceUri: workspace.configPath }]);
  const empty = await run(undefined, [[4, folder]]);
  assert.deepEqual(empty.focused, [4], 'Without a project, any editor window is focused as before');
  assert.equal((await run(undefined)).opened[0].forceEmpty, true);
  assert.throws(() => openCallerProject(source.replace('forceEmpty: !0', 'forceEmpty: !1')), /owner changed/);
});
