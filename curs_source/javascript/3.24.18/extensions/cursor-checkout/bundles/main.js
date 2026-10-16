(() => {
  "use strict";
  var t = {
      d: (e, r) => {
        for (var i in r)
          t.o(r, i) && !t.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: r[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 }));
      },
    },
    e = {};
  (t.r(e), t.d(e, { activate: () => x, deactivate: () => k }));
  const r = require("vscode"),
    i = require("node:fs/promises"),
    a = require("node:os"),
    n = require("node:path"),
    s = 2,
    o = 29;
  function c(t) {
    const e = t?.trim().toLowerCase();
    if (e) return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/.test(e) ? e : void 0;
  }
  const h = /https?:\/\/\S+/gi,
    l = /[)"'<>,.;:\]}]$/;
  function u(t) {
    const { url: e, wrappers: r } = (function (t) {
        let e = t.length;
        for (; e > 0 && l.test(t.slice(e - 1, e));) e -= 1;
        return { url: t.slice(0, e), wrappers: t.slice(e) };
      })(t),
      i = e.search(/[?#]/),
      a = -1 === i ? e : e.slice(0, i),
      n = a.indexOf("//") + 2,
      s = a.slice(n).search(/[/?#]/),
      o = -1 === s ? a.length : n + s,
      c = a.lastIndexOf("@", o - 1);
    return c < n ? a + r : a.slice(0, n) + a.slice(c + 1) + r;
  }
  function d(t) {
    return t.replace(h, u);
  }
  function m(t) {
    return `git ${t.map(d).join(" ")}`;
  }
  const f = require("node:child_process"),
    w = require("node:util"),
    g = [["safe.bareRepository", "explicit"]],
    C = [
      ["core.fsmonitor", "false"],
      ["core.hooksPath", a.devNull],
      ["core.attributesFile", a.devNull],
    ];
  function b(t, e) {
    const r = (function (t) {
        const e = t.GIT_CONFIG_COUNT;
        if (void 0 === e || "" === e) return 0;
        const r = Number.parseInt(String(e), 10);
        return !Number.isFinite(r) || r < 0 ? 0 : r;
      })(t),
      i = { ...t },
      a = new Set();
    for (let t = 0; t < r; t++) {
      const r = i[`GIT_CONFIG_KEY_${t}`];
      for (const [n, s] of e) r === n && ((i[`GIT_CONFIG_VALUE_${t}`] = s), a.add(n));
    }
    let n = r;
    for (const [t, r] of e)
      a.has(t) || ((i[`GIT_CONFIG_KEY_${n}`] = t), (i[`GIT_CONFIG_VALUE_${n}`] = r), n++);
    return (n !== r && (i.GIT_CONFIG_COUNT = String(n)), i);
  }
  function p(t) {
    const e = {
      ...process.env,
      ...t.spawnerEnv,
      LC_ALL: "en_US.UTF-8",
      LANG: "en_US.UTF-8",
      GIT_PAGER: "cat",
      ...t.optionsEnv,
    };
    return (
      void 0 !== t.command ? (e.VSCODE_GIT_COMMAND = t.command) : delete e.VSCODE_GIT_COMMAND,
      b(
        e,
        (function (t) {
          const e = "allow-hooks" === t ? C.filter(([t]) => "core.hooksPath" !== t) : C;
          return [...g, ...e];
        })(t.repoConfigExecution ?? "block"),
      )
    );
  }
  const y = (0, w.promisify)(f.execFile);
  function v(t) {
    const e = new Set(["-c", "-C", "--git-dir", "--work-tree"]);
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (e.has(i)) r++;
      else if (!i.startsWith("-")) return i;
    }
  }
  function S(t, e) {
    return p({ command: v(t), optionsEnv: e });
  }
  const G = ["--no-optional-locks", "status", "--porcelain"];
  class E {
    constructor(t) {
      ((this.workspacePaths = t), (this.recentlyWarmedBranches = new Map()));
    }
    getCwd() {
      return this.workspacePaths[0] ?? r.workspace.workspaceFolders?.[0]?.uri.fsPath ?? a.homedir();
    }
    normalizeRemoteName(t) {
      const e = t?.trim() || "origin";
      if (e.startsWith("-")) throw new Error(`Invalid remote name: ${e}`);
      return e;
    }
    gitLocaleEnv(t) {
      return { ...process.env, LC_ALL: "en_US.UTF-8", LANG: "en_US.UTF-8", ...t };
    }
    formatGitCommandError(t, e) {
      const r = e instanceof Error ? e.message : String(e),
        i = new Error(`${m(t)}: ${r}`);
      if (e && "object" == typeof e) {
        const t = e;
        ("string" == typeof t.stderr && Object.assign(i, { stderr: t.stderr }),
          "string" == typeof t.stdout && Object.assign(i, { stdout: t.stdout }),
          void 0 !== t.code && Object.assign(i, { code: t.code }));
      }
      return i;
    }
    async executeGitCommandStable(t, e, r, i) {
      try {
        const { stdout: a } = await (async function (t, e, r) {
          const { env: i, encoding: a = "utf8", ...n } = r ?? {},
            s = await y(t, e, { ...n, encoding: a, env: S(e, i) });
          return { stdout: String(s.stdout), stderr: String(s.stderr) };
        })("git", e, { cwd: t, env: this.gitLocaleEnv(i), maxBuffer: 67108864, signal: r });
        return a ?? "";
      } catch (t) {
        throw this.formatGitCommandError(e, t);
      }
    }
    async workingTreeIsDirty(t, e) {
      const r = [...G];
      return await new Promise((i, a) => {
        const n = (function (t, e, r) {
          const { env: i, ...a } = r ?? {};
          return (0, f.spawn)(t, e, { ...a, env: S(e, i) });
        })("git", r, { cwd: t, env: this.gitLocaleEnv() });
        let s = !1,
          o = !1,
          c = "";
        const h = (t) => {
            s || ((s = !0), e?.removeEventListener("abort", l), t());
          },
          l = () => {
            n.kill("SIGTERM");
          };
        e?.aborted ? n.kill("SIGTERM") : e?.addEventListener("abort", l);
        const u = (t) => ("string" == typeof t ? t : t.toString("utf8"));
        (n.stderr.on("data", (t) => {
          c.length >= 65536 || ((c += u(t)), c.length > 65536 && (c = c.slice(0, 65536)));
        }),
          n.stdout.on("data", (t) => {
            o || ("" !== u(t).trim() && ((o = !0), n.stdout.destroy(), n.kill("SIGTERM")));
          }),
          n.on("error", (t) => {
            h(o ? () => i(!0) : () => a(this.formatGitCommandError(r, t)));
          }),
          n.on("close", (t, n) => {
            if (o) return void h(() => i(!0));
            if (e?.aborted) return void h(() => a(new Error("Aborting checkout")));
            if (0 === t) return void h(() => i(!1));
            const s = c.trim() || `exited ${t ?? n ?? "unknown"}`;
            h(() =>
              a(this.formatGitCommandError(r, Object.assign(new Error(s), { stderr: c, code: t }))),
            );
          }));
      });
    }
    isNonFastForwardPushError(t) {
      if (!(t instanceof Error && "stderr" in t && "string" == typeof t.stderr)) return !1;
      const e = t.stderr;
      return (
        e.includes("[rejected]") &&
        (e.includes("(non-fast-forward)") || e.includes("(fetch first)"))
      );
    }
    normalizeBranchName(t) {
      let e = t.trim();
      if (
        (e.startsWith("refs/heads/")
          ? (e = e.slice(11))
          : e.startsWith("heads/")
            ? (e = e.slice(6))
            : e.startsWith("remotes/") && (e = e.slice(8)),
        e.startsWith("origin/") && (e = e.slice(7)),
        e.startsWith("-"))
      )
        throw new Error(`Invalid branch name: ${e}`);
      if (0 === e.length) throw new Error("Invalid branch name: empty");
      return e;
    }
    throwIfCancelled(t) {
      if (t?.isCancellationRequested) throw new Error("Aborting checkout");
    }
    resolveCurrentBranchName(t) {
      const e = t.trim();
      if (!e || "HEAD" === e)
        throw new Error("Current checkout is detached; cannot push without a branch");
      return this.normalizeBranchName(e);
    }
    normalizeCurrentBranchRef(t) {
      let e = t.trim();
      return (e.startsWith("refs/remotes/") && (e = e.slice(13)), e);
    }
    setBranchWarmTimestamp(t) {
      this.recentlyWarmedBranches.set(t, Date.now());
    }
    wasBranchWarmedRecently(t) {
      const e = this.recentlyWarmedBranches.get(t);
      return (
        void 0 !== e && (!(Date.now() - e >= 3e4) || (this.recentlyWarmedBranches.delete(t), !1))
      );
    }
    async commitExistsLocally(t, e, r) {
      try {
        return (await this.executeGitCommandStable(t, ["cat-file", "-e", `${e}^{commit}`], r), !0);
      } catch (t) {
        if (r.aborted) throw t;
        return !1;
      }
    }
    async resolveGitSupportsNoWriteFetchHead(t, e) {
      if (void 0 !== this.gitSupportsNoWriteFetchHeadCached)
        return this.gitSupportsNoWriteFetchHeadCached;
      try {
        const r = await this.executeGitCommandStable(t, ["--version"], e);
        return (
          (this.gitSupportsNoWriteFetchHeadCached = (function (t) {
            if (!t) return !1;
            const e = /git version (\d+)\.(\d+)/.exec(t);
            if (!e) return !1;
            const r = Number(e[1]),
              i = Number(e[2]);
            return r > s || (r === s && i >= o);
          })(r)),
          this.gitSupportsNoWriteFetchHeadCached
        );
      } catch (t) {
        if (e?.aborted) throw t;
        return !1;
      }
    }
    async gitFetchArgs(t, e, r) {
      return (await this.resolveGitSupportsNoWriteFetchHead(t, r))
        ? [...e, "--no-write-fetch-head"]
        : [...e];
    }
    async fetchCommitSha(t, e, r) {
      if (await this.commitExistsLocally(t, e, r)) return !0;
      try {
        return (
          await this.executeGitCommandStable(
            t,
            await this.gitFetchArgs(
              t,
              ["fetch", "origin", e, "--no-tags", "--recurse-submodules=no"],
              r,
            ),
            r,
          ),
          !0
        );
      } catch (t) {
        if (r.aborted) throw t;
        return !1;
      }
    }
    async getLocalBranchSha(t, e, r) {
      try {
        return c(
          await this.executeGitCommandStable(t, ["rev-parse", "--verify", `refs/heads/${e}`], r),
        );
      } catch (t) {
        if (r.aborted) throw t;
        return;
      }
    }
    async isCommitAncestor(t, e, r, i) {
      try {
        return (
          await this.executeGitCommandStable(t, ["merge-base", "--is-ancestor", e, r], i), !0
        );
      } catch (t) {
        if (i.aborted) throw t;
        return !1;
      }
    }
    async checkoutFetchedCommit(t, e, r, i) {
      const a = await this.getLocalBranchSha(t, e, i);
      if (a !== r)
        return a
          ? (await this.isCommitAncestor(t, a, r, i))
            ? void (await this.executeGitCommandStable(t, ["checkout", "--quiet", "-B", e, r], i))
            : void (await this.executeGitCommandStable(
                t,
                ["checkout", "--quiet", "--detach", r],
                i,
              ))
          : void (await this.executeGitCommandStable(t, ["checkout", "--quiet", "-b", e, r], i));
      await this.executeGitCommandStable(t, ["checkout", "--quiet", e], i);
    }
    async warmCheckoutBranch(t, e) {
      const r = this.getCwd(),
        i = this.normalizeBranchName(t);
      this.throwIfCancelled(e);
      const a = new AbortController(),
        n = e?.onCancellationRequested(() => {
          a.abort();
        });
      e?.isCancellationRequested && a.abort();
      try {
        (await this.executeGitCommandStable(
          r,
          await this.gitFetchArgs(
            r,
            [
              "fetch",
              "origin",
              `+refs/heads/${i}:refs/remotes/origin/${i}`,
              "--no-tags",
              "--recurse-submodules=no",
            ],
            a.signal,
          ),
          a.signal,
        ),
          this.setBranchWarmTimestamp(i));
      } finally {
        n?.dispose();
      }
    }
    async checkoutBranch(t, e, r, i) {
      const a = this.getCwd(),
        n = this.normalizeBranchName(e),
        s = c(r?.commitSha),
        o = new AbortController(),
        h = i?.onCancellationRequested(() => {
          o.abort();
        });
      i?.isCancellationRequested && o.abort();
      try {
        if ((this.throwIfCancelled(i), await this.workingTreeIsDirty(a, o.signal))) {
          const r = await t.resolveConflict();
          if ((this.throwIfCancelled(i), "stash" === r))
            await this.executeGitCommandStable(a, ["stash", "--include-untracked"], o.signal);
          else if ("commit" === r)
            (await this.executeGitCommandStable(a, ["add", "-A"], o.signal),
              await this.executeGitCommandStable(
                a,
                ["commit", "-m", `checkpoint before checking out ${e}`],
                o.signal,
              ));
          else {
            if ("discard" !== r) throw new Error("Aborting checkout");
            (await this.executeGitCommandStable(
              a,
              ["reset", "--quiet", "--hard", "HEAD"],
              o.signal,
            ),
              await this.executeGitCommandStable(a, ["clean", "--quiet", "-fd"], o.signal));
          }
        }
        if (r?.localOnly) {
          const t = `refs/heads/${n}`;
          return (
            await this.executeGitCommandStable(a, ["rev-parse", "--verify", t], o.signal),
            void (await this.executeGitCommandStable(a, ["checkout", "--quiet", n], o.signal))
          );
        }
        if (s && (await this.fetchCommitSha(a, s, o.signal)))
          return void (await this.checkoutFetchedCommit(a, n, s, o.signal));
        this.wasBranchWarmedRecently(n) ||
          (await this.executeGitCommandStable(
            a,
            await this.gitFetchArgs(
              a,
              [
                "fetch",
                "origin",
                `+refs/heads/${n}:refs/remotes/origin/${n}`,
                "--no-tags",
                "--recurse-submodules=no",
              ],
              o.signal,
            ),
            o.signal,
          ),
          this.setBranchWarmTimestamp(n));
        let c = !1;
        const h = `refs/heads/${n}`,
          l = `refs/remotes/origin/${n}`;
        try {
          (await this.executeGitCommandStable(a, ["rev-parse", "--verify", h], o.signal), (c = !0));
        } catch {
          c = !1;
        }
        if (c) await this.executeGitCommandStable(a, ["checkout", "--quiet", n], o.signal);
        else {
          let t = !1;
          try {
            (await this.executeGitCommandStable(a, ["rev-parse", "--verify", l], o.signal),
              (t = !0));
          } catch {
            t = !1;
          }
          if (!t) throw new Error(`Remote branch not found on origin: ${n}`);
          await this.executeGitCommandStable(
            a,
            ["checkout", "--quiet", "-b", n, `origin/${n}`],
            o.signal,
          );
        }
        await this.executeGitCommandStable(
          a,
          ["merge", "--ff-only", "--quiet", `origin/${n}`],
          o.signal,
        );
      } finally {
        h?.dispose();
      }
    }
    async ensureCurrentBranchPushed(t, e) {
      const r = t?.cwd?.trim() || this.getCwd(),
        i = this.normalizeRemoteName(t?.remoteName),
        a = new AbortController(),
        n = e?.onCancellationRequested(() => {
          a.abort();
        });
      e?.isCancellationRequested && a.abort();
      try {
        this.throwIfCancelled(e);
        const n = t?.branchName?.trim(),
          s =
            n ||
            this.resolveCurrentBranchName(
              this.normalizeCurrentBranchRef(
                await this.executeGitCommandStable(
                  r,
                  ["rev-parse", "--abbrev-ref", "HEAD"],
                  a.signal,
                ),
              ),
            ),
          o = ["push", i, `${n ? `refs/heads/${s}` : "HEAD"}:refs/heads/${s}`];
        if ((!0 === t?.forcePush && o.push("--force-with-lease"), !n)) {
          const t = `refs/remotes/${i}/${s}`;
          let e = !1;
          try {
            const i = await this.executeGitCommandStable(
              r,
              ["rev-list", "--count", `${t}..HEAD`],
              a.signal,
            );
            e = Number(i.trim()) > 0;
          } catch {
            e = !0;
          }
          if (!e) return;
        }
        try {
          await this.executeGitCommandStable(r, o, a.signal, { LC_ALL: "C" });
        } catch (t) {
          if (this.isNonFastForwardPushError(t))
            throw new Error(
              `Your branch "${s}" is behind ${i}. Pull the latest changes, then try moving to cloud again.`,
            );
          throw t;
        }
      } finally {
        n?.dispose();
      }
    }
    async snapshotAndPushCurrentBranch(t, e) {
      const r = t?.cwd?.trim() || this.getCwd(),
        s = this.normalizeRemoteName(t?.remoteName),
        o = t?.commitMessage ?? "Cursor: Apply local changes for cloud agent",
        c = new AbortController(),
        h = e?.onCancellationRequested(() => {
          c.abort();
        });
      e?.isCancellationRequested && c.abort();
      try {
        this.throwIfCancelled(e);
        const h = await this.executeGitCommandStable(
            r,
            ["rev-parse", "--abbrev-ref", "HEAD"],
            c.signal,
          ),
          l = (this.resolveCurrentBranchName(this.normalizeCurrentBranchRef(h)), Date.now()),
          u = Math.random().toString(36).substring(2, 7),
          d = `${t?.branchPrefix?.trim() || "cursor/"}cloud-agent-${l}-${u}`,
          m = n.join(a.tmpdir(), `cursor-index-${d.replace(/\//g, "-")}-${process.pid}-${u}`),
          f = { GIT_INDEX_FILE: m };
        try {
          (await this.executeGitCommandStable(r, ["read-tree", "HEAD"], c.signal, f),
            await this.executeGitCommandStable(r, ["add", "-A", "--", "."], c.signal, f));
          const t = (await this.executeGitCommandStable(r, ["write-tree"], c.signal, f)).trim();
          if (
            t ===
            (await this.executeGitCommandStable(r, ["rev-parse", "HEAD^{tree}"], c.signal)).trim()
          )
            throw new Error("No changes were captured in the snapshot worktree");
          const e = (
            await this.executeGitCommandStable(
              r,
              ["commit-tree", t, "-p", "HEAD", "-m", o],
              c.signal,
            )
          ).trim();
          (await this.executeGitCommandStable(r, ["update-ref", `refs/heads/${d}`, e], c.signal),
            await this.executeGitCommandStable(r, ["push", "--set-upstream", s, d], c.signal));
        } finally {
          try {
            await (0, i.unlink)(m);
          } catch {}
        }
        if (t?.stashLocalChangesAfterPush)
          try {
            const e = t.stashMessage ?? "Cursor: moved local changes to cloud agent";
            await this.executeGitCommandStable(
              r,
              ["stash", "push", "--include-untracked", "-m", e],
              c.signal,
            );
          } catch {}
        return d;
      } finally {
        h?.dispose();
      }
    }
    async hasDirtyWorkingTree(t) {
      const e = this.getCwd();
      return (this.throwIfCancelled(t), this.workingTreeIsDirty(e));
    }
  }
  function x(t) {
    const e = (r.workspace.workspaceFolders ?? []).map((t) => t.uri.fsPath),
      i = new E(e),
      a = r.cursor.registerCheckoutProvider(i);
    t.subscriptions.push(a);
  }
  function k() {}
  var N = exports;
  for (var $ in e) N[$] = e[$];
  e.__esModule && Object.defineProperty(N, "__esModule", { value: !0 });
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-checkout/dist/main.js.map
