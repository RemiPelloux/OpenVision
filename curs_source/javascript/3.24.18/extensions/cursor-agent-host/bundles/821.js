"use strict";
((exports.id = 821),
  (exports.ids = [746, 821]),
  (exports.modules = {
    12746: (e, t, s) => {
      s.d(t, { FD: () => l, dn: () => h, resolveSandboxHelperPath: () => u });
      var i = s(79896),
        o = s(16928),
        r = s(25925),
        n = s(91398),
        a = s(30306);
      function l() {
        let e = n.env.shell ?? "";
        try {
          const t = n.workspace.getConfiguration("terminal.integrated"),
            s =
              "win32" === process.platform
                ? "windows"
                : "darwin" === process.platform
                  ? "osx"
                  : "linux",
            i = t.get(`defaultProfile.${s}`);
          if (i) {
            const o = t.get(`profiles.${s}`),
              r = o?.[i]?.path;
            r && (e = r);
          }
        } catch (e) {
          a.gW.warn(`Failed to read terminal config: ${e}`);
        }
        return e;
      }
      function u(e) {
        if (
          "linux" !== process.platform &&
          "win32" !== process.platform &&
          "darwin" !== process.platform
        )
          return;
        const t = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox",
          s = process.resourcesPath,
          r = o.dirname(process.execPath),
          n = [o.join(e, "../../resources/helpers", t)];
        (s &&
          (n.push(o.join(s, "app", "resources", "helpers", t)),
          n.push(o.join(s, "resources", "helpers", t))),
          n.push(o.join(r, "resources", "helpers", t)),
          n.push(o.join(r, "resources", "app", "resources", "helpers", t)),
          "1" === process.env.VSCODE_DEV &&
            n.push(o.join(e, "../../node_modules/@anysphere/sandbox-helper/bin", t)));
        for (const e of n)
          try {
            if (i.existsSync(e)) return e;
          } catch {}
      }
      function h(e) {
        return (
          void 0 !== e.helperPath &&
          !!(0, r.yo)() &&
          ((0, r.St)({
            sandboxBinaryPath: e.helperPath,
            workspaceReadEnabled: e.workspaceReadEnabled,
          }),
          !0)
        );
      }
    },
    29534: (e, t, s) => {
      s.d(t, { Qf: () => o, ic: () => i });
      const i = "sandbox_read_control_portal";
      function o(e) {
        let t = !1,
          s = 0;
        const o = () => {
          const i = ++s;
          Promise.resolve(e.checkFeatureGate()).then(
            (e) => {
              i === s && (t = e);
            },
            () => {
              i === s && (t = !1);
            },
          );
        };
        o();
        const r = e.onDidChangeGates((e) => {
          var t;
          (void 0 === (t = e.changedGates) || t.includes(i)) && o();
        });
        return { getEnabled: () => t, dispose: () => r.dispose() };
      }
    },
    92821: (e, t, s) => {
      s.d(t, { createIdeShellActivate: () => q });
      var i = s(70857),
        o = s(69413),
        r = s(13920),
        n = s(91105),
        a = s(25925),
        l = s(91398),
        u = s(30306),
        h = s(77273),
        d = s(73024),
        c = s(76760);
      const p = { type: "insecure_none" };
      function m(e) {
        try {
          const t = (0, d.readFileSync)(e.filePath, "utf-8"),
            s = JSON.parse(t),
            i = (0, a.$6)(s);
          return (0, a.l7)(i, e.baseDir);
        } catch {
          return;
        }
      }
      function f(e) {
        return (0, c.join)(e, ".cursor", "sandbox.json");
      }
      function g(e) {
        if (void 0 === e) return [];
        const t = new Set(),
          s = [];
        for (const i of e) "" === i || t.has(i) || (t.add(i), s.push(i));
        return s;
      }
      function w(e) {
        const t = m({
          filePath: ((s = e.homeDir), (0, c.join)(s, ".cursor", "sandbox.json")),
          baseDir: e.homeDir,
        });
        var s;
        const i = [];
        for (const t of g(e.workspacePaths)) {
          const e = m({ filePath: f(t), baseDir: t });
          void 0 !== e && i.push(e);
        }
        const o = (function (e) {
          const t = e[0];
          if (void 0 === t) return;
          const s = e.filter((e) => e.type === t.type && "insecure_none" !== e.type);
          if (s.length <= 1) return s[0] ?? t;
          const i = (0, a.fZ)(...s.map((e) => e.networkPolicy)),
            o = (0, a.s9)(...s.map((e) => e.additionalReadonlyPaths)),
            r = (0, a.s9)(...s.map((e) => e.additionalReadPaths)),
            n = {
              ...t,
              ...(void 0 === i ? {} : { networkPolicy: i }),
              ...(0 === o.length ? {} : { additionalReadonlyPaths: o }),
              ...(0 === r.length ? {} : { additionalReadPaths: r }),
            };
          if ("workspace_readwrite" !== t.type) return n;
          const l = (0, a.s9)(
            ...s.map((e) =>
              "workspace_readwrite" === e.type ? e.additionalReadwritePaths : void 0,
            ),
          );
          return { ...n, ...(0 === l.length ? {} : { additionalReadwritePaths: l }) };
        })(i);
        if (void 0 !== t || void 0 !== o)
          return {
            ...(void 0 === t ? {} : { perUser: t }),
            ...(void 0 === o ? {} : { perRepo: o }),
          };
      }
      var S = s(12746),
        v = s(16928);
      function k(e) {
        const t = new Set(),
          s = [];
        for (const i of e) "" === i || t.has(i) || (t.add(i), s.push(i));
        return s;
      }
      function y(e, t) {
        const s = [],
          i = k(t),
          o = [];
        let r,
          a,
          h = 0,
          d = [],
          c = i,
          p = 0,
          m = !1;
        const f = () => {
            if (void 0 === r) return i;
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const t = o[e];
              if (t?.sessionKey === r) return t.repoPaths;
            }
            return i;
          },
          g = async () => {
            if (m) return;
            const t = ++p,
              s = f();
            try {
              const i =
                0 === s.length
                  ? [await (0, n.myO)(e)]
                  : await Promise.all(s.map((t) => (0, n.myO)(e, t)));
              if (m || t !== p) return;
              l.cursor.pushSandboxNetworkFileEntries([...new Set(i.flat())]);
            } catch (e) {
              if (m || t !== p) return;
              u.gW.warn(`Failed to read sandbox network file entries: ${e}`);
            }
          },
          w = () => {
            m ||
              (void 0 !== a && clearTimeout(a),
              (a = setTimeout(() => {
                ((a = void 0), g());
              }, 500)));
          },
          S = (e) => {
            const t = l.workspace.createFileSystemWatcher(
              new l.RelativePattern(l.Uri.file((0, v.join)(e, ".cursor")), "sandbox.json"),
            );
            return (t.onDidChange(w), t.onDidCreate(w), t.onDidDelete(w), t);
          },
          y = () => {
            m ||
              ((() => {
                const e = f();
                if (((s = c), (t = e).length !== s.length || !t.every((e, t) => e === s[t]))) {
                  var t, s;
                  c = e;
                  for (const e of d) e.dispose();
                  d = c.map((e) => S(e));
                }
              })(),
              g());
          };
        return (
          s.push(S(e)),
          (d = c.map((e) => S(e))),
          g(),
          {
            acquireSessionRepo(e) {
              const t = k(e.repoPaths),
                { sessionId: s } = e;
              if (m) return { dispose() {} };
              const i = ++h,
                n = s ?? `lease:${i}`;
              return (
                o.push({ id: i, sessionKey: n, repoPaths: t }),
                (void 0 !== r && r !== n) || ((r = n), y()),
                {
                  dispose() {
                    const e = o.findIndex((e) => e.id === i);
                    if (-1 === e) return;
                    if ((o.splice(e, 1), r !== n)) return;
                    (o.some((e) => e.sessionKey === n) || (r = o.at(-1)?.sessionKey), y());
                  },
                }
              );
            },
            dispose() {
              ((m = !0), (p += 1), void 0 !== a && (clearTimeout(a), (a = void 0)));
              for (const e of d) e.dispose();
              ((d = []), (o.length = 0), (r = void 0));
              for (const e of s) e.dispose();
            },
          }
        );
      }
      var b = s(29534),
        C = s(42358);
      const E = "shell_exec_output_backpressure",
        I = "shell_exec_output_backpressure_config";
      var x = s(9639);
      const O = new WeakSet();
      function P(e) {
        if (e instanceof x.R10) return e.getWakeupRevision();
      }
      class D {
        constructor() {
          ((this._isDisposed = !1), (this._disposables = []));
        }
        dispose() {
          this._isDisposed ||
            ((this._isDisposed = !0),
            (function (e) {
              for (; e.length;) {
                const t = e.pop();
                t?.dispose();
              }
            })(this._disposables));
        }
        _register(e) {
          return (this._isDisposed ? e.dispose() : this._disposables.push(e), e);
        }
        get isDisposed() {
          return this._isDisposed;
        }
      }
      class _ extends D {
        constructor() {
          (super(...arguments),
            (this.writeEmitter = this._register(new l.EventEmitter())),
            (this.onDidWrite = this.writeEmitter.event),
            (this.writeBufferEmitter = this._register(new l.EventEmitter())),
            (this.onDidWriteBuffer = this.writeBufferEmitter.event),
            (this.closeEmitter = this._register(new l.EventEmitter())),
            (this.onDidClose = this.closeEmitter.event),
            (this.isStarted = !1),
            (this.isFirstCommand = !0),
            (this.outputQueue = []),
            (this.isOutputPaused = !1),
            (this.pauseWaiters = []));
        }
        open(e) {
          this.isStarted ||
            ((this.isStarted = !0),
            this.writeBufferEmitter.fire(
              Buffer.from(this.osc633("P", "HasRichCommandDetection=True")),
            ),
            this.ensureOutputDrained());
        }
        pause() {
          this.isOutputPaused = !0;
        }
        resume() {
          if (this.isOutputPaused) {
            this.isOutputPaused = !1;
            const e = this.pauseWaiters;
            this.pauseWaiters = [];
            for (const t of e) t();
          }
          this.outputQueue.length > 0 && this.ensureOutputDrained();
        }
        async awaitUnpaused() {
          for (; this.isOutputPaused;) await new Promise((e) => this.pauseWaiters.push(e));
        }
        close() {
          (this.resume(), this.closeEmitter.fire());
        }
        dispose() {
          (this.resume(), super.dispose());
        }
        async showCommand(e, t) {
          const s = [];
          (this.isFirstCommand || s.push("\r\n"),
            (this.isFirstCommand = !1),
            s.push(this.osc633("A")));
          const i = t ? "🔒 " : "";
          (s.push(`${i}$ `), s.push(this.osc633("B")));
          const o = e.split("\n")[0];
          (s.push(this.osc633("E", this.escapeOscValue(o))),
            s.push(`${o}\r\n`),
            s.push(this.osc633("C")),
            await this.emitBufferedData(Buffer.from(s.join(""))));
        }
        async handleEvent(e) {
          switch (e.type) {
            case "stdout":
            case "stderr":
              await this.handleShellOutput(e.data);
              break;
            case "exit":
              await this.handleExit(e.code ?? 0);
              break;
            case "stdin_ready":
            case "sandbox_denies":
              break;
            case "suppressed_output":
              await this.handleShellOutput(Buffer.from(a.Ls));
              break;
            default:
              throw new Error(`Unhandled event type: ${e.type}`);
          }
        }
        async handleShellOutput(e) {
          await this.emitBufferedData(e);
        }
        async handleExit(e) {
          await this.showCommandCompleted(e);
        }
        async showCommandCompleted(e) {
          await this.emitBufferedData(Buffer.from(this.osc633("D", e.toString())));
        }
        async emitBufferedData(e) {
          (this.outputQueue.push(e), this.isStarted && (await this.ensureOutputDrained()));
        }
        async ensureOutputDrained() {
          if (this.isStarted)
            for (;;) {
              if (this.outputDrainPromise) {
                await this.outputDrainPromise;
                continue;
              }
              if (0 === this.outputQueue.length || this.isOutputPaused) return;
              const e = this.runOutputDrain();
              this.outputDrainPromise = e;
              try {
                await e;
              } finally {
                this.outputDrainPromise === e && (this.outputDrainPromise = void 0);
              }
            }
        }
        async runOutputDrain() {
          for (; !this.isOutputPaused && this.outputQueue.length > 0;) {
            const e = this.outputQueue.shift();
            (this.writeBufferEmitter.fire(e), await new Promise((e) => setImmediate(e)));
          }
        }
        escapeOscValue(e) {
          return e
            .replace(/\\/g, "\\\\")
            .replace(/;/g, "\\x3b")
            .replace(/[\x00-\x1f]/g, (e) => `\\x${e.charCodeAt(0).toString(16).padStart(2, "0")}`);
        }
        osc633(e, ...t) {
          return `]633;${[e, ...t].filter((e) => void 0 !== e).join(";")}`;
        }
      }
      class B extends D {
        constructor(e, t = {}) {
          (super(),
            (this.inner = e),
            (this.shouldSuppressTerminalUiStreaming =
              t.shouldSuppressTerminalUiStreaming ?? (async () => !1)),
            (this.shellExecOutputBackpressureEnabled = t.shellExecOutputBackpressureEnabled ?? !1),
            (this.shellExecOutputSuppressionOptions = t.shellExecOutputSuppressionOptions),
            (this.pty = this._register(new _())));
        }
        ensureTerminal(e) {
          this.terminal ||
            this.isDisposed ||
            (this.terminal = l.window.createTerminal({
              name: "Agent Terminal",
              pty: this.pty,
              convertEol: !0,
              iconPath: new l.ThemeIcon("infinity"),
              hideFromUser: !0,
              metadata: { conversationId: e, agentOwned: !0 },
            }));
        }
        getTerminal() {
          return this.terminal;
        }
        async *execute(e, t, s) {
          if (this.isDisposed) return;
          if (await this.shouldSuppressTerminalUiStreaming()) {
            for await (const i of this.inner.execute(e, t, s)) yield i;
            return;
          }
          const i = (0, h.L)(e, e.get(r.zN)?.conversationId);
          if (void 0 === i) {
            for await (const i of this.inner.execute(e, t, s)) yield i;
            return;
          }
          const o =
              s?.sandboxPolicy?.perRepo?.type ??
              s?.sandboxPolicy?.perUser?.type ??
              s?.sandboxPolicy?.teamAdmin?.type,
            n = "workspace_readonly" === o || "workspace_readwrite" === o;
          (this.ensureTerminal(i), await this.pty.showCommand(t, n));
          const l = this.shellExecOutputBackpressureEnabled
            ? new a.vu({ ...this.shellExecOutputSuppressionOptions })
            : void 0;
          try {
            for await (const i of this.inner.execute(e, t, s)) {
              if (void 0 !== l && ("stdout" === i.type || "stderr" === i.type)) {
                const e = l.record(i.data.length);
                if (e.noticeJustTriggered) {
                  const e = { type: "stdout", data: Buffer.from(a.Ls) };
                  (await this.pty.awaitUnpaused(),
                    await this.pty.handleEvent(e),
                    yield { type: "suppressed_output" });
                }
                if (!e.shouldForward) {
                  yield i;
                  continue;
                }
              }
              (await this.pty.awaitUnpaused(), await this.pty.handleEvent(i), yield i);
            }
          } finally {
            l?.dispose();
          }
        }
        async getCwd() {
          return this.inner.getCwd();
        }
        clone(e) {
          return this.inner.clone(e);
        }
        dispose() {
          this.isDisposed ||
            (this.terminal && (this.terminal.dispose(), (this.terminal = void 0)), super.dispose());
        }
      }
      function T(e, t) {
        return e ? (0, c.join)(e, "terminals", `${t}.txt`) : void 0;
      }
      class W {
        constructor() {
          this.tail = Promise.resolve();
        }
        queue(e) {
          const t = this.tail.then(async () => {
            await e();
          });
          this.tail = t.catch(() => {});
        }
      }
      class F extends D {
        constructor(e, t, s, i, o = () => !1, r = () => {}) {
          (super(),
            (this.command = e),
            (this.cwd = t),
            (this.abortShell = s),
            (this.onExit = i),
            (this.isShellExecOutputBackpressureEnabled = o),
            (this.getShellExecOutputSuppressionOptions = r),
            (this.writeEmitter = this._register(new l.EventEmitter())),
            (this.onDidWrite = this.writeEmitter.event),
            (this.writeBufferEmitter = this._register(new l.EventEmitter())),
            (this.onDidWriteBuffer = this.writeBufferEmitter.event),
            (this.closeEmitter = this._register(new l.EventEmitter())),
            (this.onDidClose = this.closeEmitter.event),
            (this.isStarted = !1),
            (this.hasExited = !1),
            (this.hasClosed = !1),
            (this.abortRequestedByUser = !1),
            (this.pendingOutput = []),
            (this.isOutputPaused = !1),
            (this.pauseWaiters = []));
        }
        handleInput(e) {
          "" !== e || this.hasExited || ((this.abortRequestedByUser = !0), this.abortShell());
        }
        getEventHandler() {
          return {
            onStdout: (e) => this.handleShellOutput(e),
            onStderr: (e) => this.handleShellOutput(e),
            onExit: (e) => this.handleExit(e),
            onStart: () => this.handleStart(),
          };
        }
        open(e) {
          if (!(this.isStarted || this.hasExited || this.isDisposed)) {
            ((this.isStarted = !0),
              this.emitImmediate(this.osc633("P", `Cwd=${this.escapeOscValue(this.cwd)}`)),
              this.emitImmediate(this.osc633("P", "HasRichCommandDetection=True")),
              this.showPrompt(),
              this.showCommand(this.command));
            for (const e of this.pendingOutput) this.writeBufferEmitter.fire(e);
            this.pendingOutput = [];
          }
        }
        pause() {
          this.isOutputPaused = !0;
        }
        resume(e) {
          if (!this.isOutputPaused && !e?.force) return;
          this.isOutputPaused = !1;
          const t = this.pauseWaiters;
          this.pauseWaiters = [];
          for (const e of t) e();
        }
        async awaitUnpaused() {
          for (; this.isOutputPaused;) await new Promise((e) => this.pauseWaiters.push(e));
        }
        close() {
          (this.resume(),
            this.hasClosed ||
              ((this.hasClosed = !0),
              this.hasExited || this.emitImmediate("\r\n[Terminal closing]\r\n"),
              this.closeEmitter.fire()));
        }
        dispose() {
          (this.resume(), super.dispose());
        }
        handleStart() {}
        async handleShellOutput(e) {
          this.isTerminalClosed() ||
            this.isDisposed ||
            (await this.awaitUnpaused(),
            this.isTerminalClosed() || this.isDisposed || this.writeShellStreamOutput(e));
        }
        writeShellStreamOutput(e) {
          if (!this.isShellExecOutputBackpressureEnabled()) return void this.emitShellOutput(e);
          if (this.isDisposed) return;
          void 0 === this.outputSuppressor &&
            (this.outputSuppressor = this._register(
              new a.vu(this.getShellExecOutputSuppressionOptions()),
            ));
          const t = this.outputSuppressor.record(Buffer.byteLength(e, "utf8"));
          (t.noticeJustTriggered && this.emitShellOutput(a.Ls),
            t.shouldForward && this.emitShellOutput(e));
        }
        emitShellOutput(e) {
          const t = Buffer.from(e);
          this.isStarted ? this.writeBufferEmitter.fire(t) : this.pendingOutput.push(t);
        }
        emitImmediate(e) {
          this.emitShellOutput(e);
        }
        handleExit(e) {
          if (!this.hasExited && !this.isDisposed) {
            if ((this.resume({ force: !0 }), !this.isStarted))
              return (
                (this.hasExited = !0),
                void this.onExit({ code: e, aborted: this.abortRequestedByUser || null === e })
              );
            this._completeExit(e);
          }
        }
        _completeExit(e) {
          ((this.hasExited = !0),
            this.showCommandCompleted(e ?? 0),
            this.emitImmediate("\r\n"),
            this.hasClosed || ((this.hasClosed = !0), this.closeEmitter.fire(e ?? 0)),
            this.onExit({ code: e, aborted: this.abortRequestedByUser || null === e }));
        }
        hasExitOccurred() {
          return this.hasExited;
        }
        acknowledgeExternalTeardown() {
          ((this.hasExited = !0), this.resume({ force: !0 }));
        }
        isTerminalClosed() {
          return this.hasExited || this.hasClosed;
        }
        showPrompt() {
          (this.emitImmediate(this.osc633("A")),
            this.emitImmediate("$ "),
            this.emitImmediate(this.osc633("B")));
        }
        showCommand(e) {
          (this.emitImmediate(this.osc633("E", this.escapeOscValue(e))),
            this.emitImmediate(`${e}\r\n`),
            this.emitImmediate(this.osc633("C")));
        }
        showCommandCompleted(e) {
          this.emitImmediate(this.osc633("D", e.toString()));
        }
        escapeOscValue(e) {
          return e
            .replace(/\\/g, "\\\\")
            .replace(/;/g, "\\x3b")
            .replace(/[\x00-\x1f]/g, (e) => `\\x${e.charCodeAt(0).toString(16).padStart(2, "0")}`);
        }
        osc633(e, ...t) {
          return `]633;${[e, ...t].filter((e) => void 0 !== e).join(";")}`;
        }
      }
      class R extends D {
        constructor(e) {
          (super(),
            (this.projectDir = e),
            (this.terminals = new Map()),
            (this.pseudoTerminals = new Map()),
            (this.abortFunctions = new Map()),
            (this.closeListeners = new Map()),
            (this.trackedWork = new Map()),
            (this.headlessShells = new Map()),
            (this.completionPublishedShellIds = new Set()),
            (this.completionConversationIds = new Map()),
            (this.shellWorkNotificationQueue = new W()));
        }
        async createTerminal(e) {
          const {
              shellId: t,
              command: s,
              cwd: i,
              registerEventHandler: o,
              conversationId: r,
              completionConversationId: n,
              abortShell: a,
              description: u,
              toolCallId: h,
              isShellExecOutputBackpressureEnabled: d = () => !1,
              getShellExecOutputSuppressionOptions: c = () => {},
            } = e,
            p = `Cursor (${this.extractCommandDescription(s)})`;
          let m;
          const f = new F(
            s,
            i,
            a,
            (e) => {
              const s = e.aborted ? "aborted" : 0 === e.code ? "success" : "error",
                i = e.aborted || 0 === e.code || null === e.code ? void 0 : `exit_code=${e.code}`;
              (this.enqueueShellCompletion(t, s, i), this.disposeShellTerminal(t));
            },
            d,
            c,
          );
          (this.pseudoTerminals.set(t, f),
            (m = l.window.createTerminal({
              name: p,
              pty: f,
              convertEol: !0,
              iconPath: new l.ThemeIcon("infinity"),
              hideFromUser: !1,
              metadata: { backgroundShellId: t, conversationId: r, agentOwned: !0 },
            })),
            this.terminals.set(t, m),
            this.abortFunctions.set(t, a));
          const g = this.createShellWorkItem({
            shellId: t,
            command: s,
            conversationId: r,
            description: u,
            toolCallId: h,
          });
          (this.trackedWork.set(t, g),
            this.rememberCompletionConversationId(t, n),
            this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(g)),
            o(f.getEventHandler()));
          const w = l.window.onDidCloseTerminal((e) => {
            if (e === m) {
              f.hasExitOccurred() ||
                this.enqueueShellCompletion(t, "aborted", "terminated_by_user");
              const e = this.abortFunctions.get(t);
              (e && e(), this.cleanupShell(t));
            }
          });
          this.closeListeners.set(t, w);
        }
        async trackHeadlessShell(e) {
          const {
            shellId: t,
            command: s,
            conversationId: i,
            completionConversationId: o,
            abortShell: r,
            description: n,
            toolCallId: a,
            onCleanup: l,
          } = e;
          (this.abortFunctions.set(t, r), this.headlessShells.set(t, l));
          const u = this.createShellWorkItem({
            shellId: t,
            command: s,
            conversationId: i,
            description: n,
            toolCallId: a,
          });
          (this.trackedWork.set(t, u),
            this.rememberCompletionConversationId(t, o),
            this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(u)));
        }
        shouldForwardShellOutputCompletion(e) {
          if ("task_progress" === e.reason) return !0;
          if ("task_finished" !== e.reason) return !1;
          const t = this.getShellIdFromCompletionTaskId(e.taskId);
          return void 0 !== t && (this.headlessShells.has(t) || this.terminals.has(t));
        }
        enqueueShellOutputCompletion(e, t) {
          if ("shell" !== e.kind) return;
          const s = this.getShellIdFromCompletionTaskId(e.taskId);
          if (void 0 === s) return;
          const i = this.trackedWork.get(s),
            o = t?.trim(),
            r = o || this.completionConversationIdFor(s, i?.composerId);
          if ("task_finished" === e.reason)
            return (
              this.completionPublishedShellIds.has(s) ||
                !r ||
                (this.completionPublishedShellIds.add(s),
                this.forwardShellOutputCompletion(s, r, e.toolCallId ?? i?.toolCallId, e)),
              void this.backupDisposeShellTerminal(s)
            );
          r && this.forwardShellOutputCompletion(s, r, e.toolCallId ?? i?.toolCallId, e);
        }
        backupDisposeShellTerminal(e) {
          if (this.headlessShells.has(e)) return void this.cleanupShell(e);
          const t = this.pseudoTerminals.get(e);
          t?.hasExitOccurred() || (t?.acknowledgeExternalTeardown(), this.disposeShellTerminal(e));
        }
        disposeShellTerminal(e) {
          const t = this.terminals.get(e),
            s = this.pseudoTerminals.get(e);
          (this.cleanupShell(e, { disposePty: !1 }),
            (t || s) &&
              queueMicrotask(() => {
                (s?.dispose(), this.pseudoTerminals.delete(e), t?.dispose());
              }));
        }
        rememberCompletionConversationId(e, t) {
          const s = t?.trim();
          s && this.completionConversationIds.set(e, s);
        }
        completionConversationIdFor(e, t) {
          return this.completionConversationIds.get(e) || t;
        }
        createShellWorkItem(e) {
          return {
            id: String(e.shellId),
            kind: "shell",
            composerId: e.conversationId ?? "",
            title: e.description || e.command,
            startTimeMs: Date.now(),
            ...(void 0 !== e.toolCallId ? { toolCallId: e.toolCallId } : {}),
          };
        }
        async notifyShellUpserted(e) {
          try {
            await l.cursor.upsertBackgroundShellWork(e);
          } catch {}
        }
        async notifyShellCleared(e) {
          try {
            await l.cursor.clearBackgroundShellWork(String(e));
          } catch {}
        }
        async notifyBackgroundTaskCompletion(e) {
          try {
            await l.cursor.enqueueBackgroundWakeup({
              conversationId: e.composerId,
              id: e.taskId,
              source: "shell",
              payload: e,
            });
          } catch {}
        }
        async getLongRunningJobsEnabled() {
          return void 0 !== this.longRunningJobsEnabled
            ? this.longRunningJobsEnabled
            : (this.longRunningJobsEnabledPromise ||
                (this.longRunningJobsEnabledPromise = Promise.resolve(
                  l.cursor.checkFeatureGate("long_running_jobs"),
                ).then(
                  (e) => ((this.longRunningJobsEnabled = e), e),
                  () => ((this.longRunningJobsEnabled = !1), !1),
                )),
              this.longRunningJobsEnabledPromise);
        }
        enqueueShellCompletion(e, t, s) {
          if (this.completionPublishedShellIds.has(e)) return;
          const i = this.trackedWork.get(e),
            o = this.completionConversationIdFor(e, i?.composerId);
          o &&
            (this.completionPublishedShellIds.add(e),
            this.shellWorkNotificationQueue.queue(() =>
              this.getLongRunningJobsEnabled().then((r) => {
                if (r)
                  return this.notifyBackgroundTaskCompletion(
                    (function (e) {
                      const t = T(e.projectDir, e.shellId);
                      return {
                        composerId: e.composerId,
                        taskId: String(e.shellId),
                        ...(void 0 !== e.toolCallId ? { toolCallId: e.toolCallId } : {}),
                        kind: "shell",
                        status: e.status,
                        title: e.title,
                        ...(e.detail ? { detail: e.detail } : {}),
                        ...(t ? { outputPath: t } : {}),
                        reason: "task_finished",
                      };
                    })({
                      projectDir: this.projectDir,
                      shellId: e,
                      composerId: o,
                      toolCallId: i?.toolCallId,
                      title: i?.title ?? "",
                      status: t,
                      ...(s ? { detail: s } : {}),
                    }),
                  );
              }),
            ));
        }
        forwardShellOutputCompletion(e, t, s, i) {
          this.shellWorkNotificationQueue.queue(() =>
            this.getLongRunningJobsEnabled().then((o) => {
              if (!o) return;
              const r = i.outputPath ?? T(this.projectDir, e);
              return this.notifyBackgroundTaskCompletion({
                composerId: t,
                taskId: i.taskId,
                ...(void 0 !== s ? { toolCallId: s } : {}),
                kind: i.kind,
                status: i.status,
                title: i.title,
                ...(i.detail ? { detail: i.detail } : {}),
                ...(r ? { outputPath: r } : {}),
                ...(i.reason ? { reason: i.reason } : {}),
              });
            }),
          );
        }
        getShellIdFromCompletionTaskId(e) {
          const t = e.trim().split(":", 1)[0];
          if (!t) return;
          const s = Number(t);
          return Number.isInteger(s) ? s : void 0;
        }
        cleanupShell(e, t) {
          const s = t?.disposePty ?? !0;
          (this.terminals.delete(e),
            s && (this.pseudoTerminals.get(e)?.dispose(), this.pseudoTerminals.delete(e)),
            this.abortFunctions.delete(e),
            this.headlessShells.get(e)?.(),
            this.headlessShells.delete(e),
            this.completionConversationIds.delete(e),
            this.disposeCloseListener(e),
            this.trackedWork.has(e) &&
              (this.trackedWork.delete(e),
              this.shellWorkNotificationQueue.queue(() => this.notifyShellCleared(e))));
        }
        disposeCloseListener(e) {
          const t = this.closeListeners.get(e);
          t && (t.dispose(), this.closeListeners.delete(e));
        }
        async listBackgroundShellWork(e) {
          const t = [...this.trackedWork.values()];
          return e ? t.filter((t) => t.composerId === e) : t;
        }
        async killBackgroundShell(e) {
          const t = Number(e);
          if (!Number.isInteger(t)) return !1;
          const s = this.abortFunctions.get(t);
          return (
            !!s &&
            (this.disposeCloseListener(t),
            this.terminals.get(t)?.dispose(),
            this.enqueueShellCompletion(t, "aborted", "terminated_by_user"),
            s(),
            this.cleanupShell(t),
            !0)
          );
        }
        async showBackgroundShell(e) {
          const t = Number(e);
          if (!Number.isInteger(t)) return !1;
          const s = this.terminals.get(t);
          if (s) return (s.show(!1), !0);
          if (this.headlessShells.has(t) && this.projectDir) {
            const e = T(this.projectDir, t);
            if (void 0 === e) return !1;
            const s = l.Uri.file(e);
            return l.cursor.isGlass
              ? (await l.commands.executeCommand("glass.openFileInStableTab", {
                  uri: { scheme: s.scheme, path: s.path },
                }),
                !0)
              : (await l.commands.executeCommand("vscode.open", s, { preview: !1 }), !0);
          }
          return !1;
        }
        extractCommandDescription(e) {
          const t = e.split("\n")[0];
          return (t.length > 50 ? t.substring(0, 47) + "..." : t) || "Shell";
        }
        getTerminal(e) {
          return this.terminals.get(e);
        }
        dispose() {
          if (!this.isDisposed) {
            for (const e of this.abortFunctions.values()) e();
            for (const e of this.terminals.values()) e.dispose();
            for (const e of [...this.trackedWork.keys()]) this.cleanupShell(e);
            for (const e of this.pseudoTerminals.values()) e.dispose();
            (this.terminals.clear(),
              this.pseudoTerminals.clear(),
              this.abortFunctions.clear(),
              this.closeListeners.clear(),
              this.trackedWork.clear(),
              super.dispose());
          }
        }
      }
      var U = s(46862);
      const j = "disable_terminal_output_ui_streaming";
      async function q(e) {
        const t = e.homeDir ?? i.homedir(),
          s = [],
          d = (0, S.resolveSandboxHelperPath)(e.extensionPath);
        let c = !1;
        const m = await (async function (e) {
            const t = e?.checkFeatureGate ?? ((e) => l.cursor.checkFeatureGate(e)),
              s = e?.getDynamicConfigValue ?? ((e) => l.cursor.getDynamicConfigValue(e));
            try {
              if (await t(E)) {
                const e = await s(I);
                if (e)
                  return {
                    shellOutputBackpressureOptions: {
                      bufferOutputEvents: !0,
                      outputLimiterOptions: {
                        flushIntervalMs: e.outputLimiterFlushIntervalMs,
                        maxBufferedBytes: e.outputLimiterMaxBufferedBytes,
                      },
                    },
                    shellExecOutputSuppressionOptions: {
                      windowMs: e.outputSuppressionWindowMs,
                      minimumThresholdCharsPerSecond: e.outputSuppressionThresholdCharsPerSecond,
                      minChars: e.outputSuppressionMinChars,
                    },
                  };
              }
            } catch {}
            return {
              shellOutputBackpressureOptions: void 0,
              shellExecOutputSuppressionOptions: void 0,
            };
          })(),
          f = m.shellOutputBackpressureOptions,
          v = m.shellExecOutputSuppressionOptions;
        let k = !1;
        try {
          k = await l.cursor.checkFeatureGate("shell_exec_powershell_utf8_console");
        } catch {}
        const x = y(t, e.workspacePaths ?? []);
        s.push(() => x.dispose());
        const D = (0, S.FD)();
        let _ = !1;
        l.cursor.getUseLegacyTerminalTool().then((e) => {
          _ = e;
        });
        const T = l.cursor.onDidChangeUseLegacyTerminalTool((e) => {
          _ = e;
        });
        s.push(() => T.dispose());
        const W = { env: { CURSOR_AGENT: "1" } },
          F = (0, a.Fn)({ ...W, userTerminalHint: D }),
          q = (0, a.fi)({ ...W, shell: (0, a.WE)((0, a.G6)(D)) }),
          L = new R(e.projectDir);
        s.push(() => L.dispose());
        const $ = new Map();
        s.push(() => {
          for (const e of $.values()) e.value.dispose();
          $.clear();
        });
        const N = l.cursor.registerBackgroundShellProvider({
          listBackgroundShellWork: async (e) => L.listBackgroundShellWork(e),
          killBackgroundShell: async (e) => L.killBackgroundShell(e),
          showBackgroundShell: async (e) => L.showBackgroundShell(e),
        });
        s.push(() => N.dispose());
        return {
          get helperConfigured() {
            return c;
          },
          networkWatcherRegistered: !0,
          backgroundShellProviderRegistered: !0,
          defaultPolicyType: "insecure_none",
          shellOutputBackpressureEnabled: void 0 !== f,
          configureSandboxHelper: () => {
            if (c) return !0;
            if (void 0 === d)
              return (
                u.gW.warn("Sandbox helper path not found, sandboxing will be unavailable"), !1
              );
            let e;
            try {
              e = (0, b.Qf)({
                checkFeatureGate: () => l.cursor.checkFeatureGate("sandbox_read_control_portal"),
                onDidChangeGates: (e) => l.cursor.onDidChangeGates(e),
              });
              const t = e;
              ((c = (0, S.dn)({ helperPath: d, workspaceReadEnabled: () => t.getEnabled() })),
                c
                  ? (s.push(() => t.dispose()), (e = void 0))
                  : (t.dispose(),
                    (e = void 0),
                    u.gW.warn("Sandbox helper not configured: ripgrep is not ready yet")));
            } catch (t) {
              (e?.dispose(), u.gW.error("Failed to configure sandbox", t));
            }
            return c;
          },
          createSessionOverrides({
            sessionId: s,
            rootSessionId: i,
            workspacePaths: a,
            backgroundWorkRegistry: d,
          }) {
            const c = (0, U.x3)(a, t),
              m = c[0] ?? t,
              S = x.acquireSessionRepo({ repoPaths: c, sessionId: s });
            let y;
            try {
              const a = w({ homeDir: t, workspacePaths: c }),
                b = (function () {
                  let e, t;
                  const s = () => (
                    void 0 === e &&
                      (e = (async () => {
                        try {
                          return await l.cursor.checkFeatureGate(j);
                        } catch {
                          return !1;
                        }
                      })().then((e) => ((t = e), e))),
                    e
                  );
                  return ((s.getResolvedValue = () => t), s);
                })();
              b();
              const E = (function () {
                  if (l.cursor.isGlass && void 0 === l.env.remoteName)
                    return (e) => {
                      l.commands.executeCommand(o.t, e).then(void 0, (e) => {
                        u.gW.warn(`Failed to report a headless shell event to Glass: ${String(e)}`);
                      });
                    };
                })(),
                I = {
                  onShellCreated: ({
                    shellId: e,
                    command: t,
                    cwd: s,
                    registerEventHandler: o,
                    conversationId: r,
                    abortShell: a,
                    description: l,
                    toolCallId: u,
                  }) =>
                    !0 === b.getResolvedValue()
                      ? (E && o((0, n.BQk)(e, E)),
                        L.trackHeadlessShell({
                          shellId: e,
                          command: t,
                          conversationId: r,
                          completionConversationId: i,
                          abortShell: a,
                          description: l,
                          toolCallId: u,
                          onCleanup: E && (() => E({ kind: "exit", shellId: e })),
                        }))
                      : L.createTerminal({
                          shellId: e,
                          command: t,
                          cwd: s,
                          registerEventHandler: o,
                          conversationId: r,
                          completionConversationId: i,
                          abortShell: a,
                          description: l,
                          isShellExecOutputBackpressureEnabled: () => void 0 !== f,
                          getShellExecOutputSuppressionOptions: () => v,
                          toolCallId: u,
                        }),
                },
                x = (0, n.hQM)(e.projectDir, I, (e) => (0, h.L)(e, e.get(r.zN)?.conversationId));
              !(function (e, t) {
                if (O.has(e)) return e;
                O.add(e);
                const s = e.enqueue.bind(e);
                e.enqueue = (i) => {
                  const o = P(e);
                  s(i);
                  const r = P(e),
                    n = void 0 === o || void 0 === r || r > o,
                    a = i.payload;
                  n &&
                    "shell" === a.kind &&
                    t.shouldForwardShellOutputCompletion(a) &&
                    ("task_progress" === a.reason && e.suppress(i.conversationId, a.taskId),
                    t.enqueueShellOutputCompletion(a, i.conversationId));
                };
              })(d, L);
              const T = (0, C.B4)($, s, () => {
                const e = (_ ? q : F).clone(m);
                return new B(e, {
                  shouldSuppressTerminalUiStreaming: b,
                  shellExecOutputBackpressureEnabled: void 0 !== f,
                  shellExecOutputSuppressionOptions: v,
                });
              });
              y = T;
              const W = T.value,
                R = e.teamSettingsService,
                U = c;
              return {
                overrides: {
                  _defaultSandboxPolicy: p,
                  _defaultSandboxPolicySources: a,
                  terminalExecutor: W,
                  backgroundShellFactory: x,
                  userTerminalHint: D,
                  shellOutputBackpressureOptions: f,
                  powershellUtf8Console: k,
                  ...(void 0 === R
                    ? {}
                    : {
                        getNetworkAllowlistInfo: () =>
                          (async function (e, t, s) {
                            const i = g(s);
                            if (0 === i.length) return (0, n.mAh)(e, t);
                            const o = await Promise.all(i.map((s) => (0, n.mAh)(e, t, s))),
                              r = [...new Set(o.flatMap((e) => e.explicitEntries))];
                            return {
                              hasDefaults: o.some((e) => e.hasDefaults),
                              explicitEntries: r,
                            };
                          })(R, t, U),
                      }),
                },
                dispose: () => {
                  (S.dispose(), T.release());
                },
              };
            } catch (e) {
              throw (y?.release(), S.dispose(), e);
            }
          },
          dispose: () => {
            for (const e of s.splice(0).reverse()) e();
          },
        };
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/821.js.map
