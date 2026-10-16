(() => {
  var t = {
      613: (t) => {
        function e(t) {
          return Array.isArray(t) ? t : [t];
        }
        const r = /^\s+$/,
          i = /(?:[^\\]|^)\\$/,
          n = /^\\!/,
          o = /^\\#/,
          s = /\r?\n/g,
          a = /^\.{0,2}\/|^\.{1,2}$/,
          c = /\/$/,
          h = "/";
        let l = "node-ignore";
        "undefined" != typeof Symbol && (l = Symbol.for("node-ignore"));
        const d = l,
          u = (t, e, r) => (Object.defineProperty(t, e, { value: r }), r),
          f = /([0-z])-([0-z])/g,
          p = () => !1,
          g = [
            [/^\uFEFF/, () => ""],
            [/((?:\\\\)*?)(\\?\s+)$/, (t, e, r) => e + (0 === r.indexOf("\\") ? " " : "")],
            [
              /(\\+?)\s/g,
              (t, e) => {
                const { length: r } = e;
                return e.slice(0, r - (r % 2)) + " ";
              },
            ],
            [/[\\$.|*+(){^]/g, (t) => `\\${t}`],
            [/(?!\\)\?/g, () => "[^/]"],
            [/^\//, () => "^"],
            [/\//g, () => "\\/"],
            [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
            [
              /^(?=[^^])/,
              function () {
                return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
              },
            ],
            [
              /\\\/\\\*\\\*(?=\\\/|$)/g,
              (t, e, r) => (e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"),
            ],
            [/(^|[^\\]+)(\\\*)+(?=.+)/g, (t, e, r) => e + r.replace(/\\\*/g, "[^\\/]*")],
            [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"],
            [/\\\\/g, () => "\\"],
            [
              /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
              (t, e, r, i, n) =>
                "\\" === e
                  ? `\\[${r}${((t) => {
                      const { length: e } = t;
                      return t.slice(0, e - (e % 2));
                    })(i)}${n}`
                  : "]" === n && i.length % 2 == 0
                    ? `[${((t) => t.replace(f, (t, e, r) => (e.charCodeAt(0) <= r.charCodeAt(0) ? t : "")))(r)}${i}]`
                    : "[]",
            ],
            [/(?:[^*])$/, (t) => (/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`)],
          ],
          m = /(^|\\\/)?\\\*$/,
          v = "regex",
          y = "checkRegex",
          b = {
            [v]: (t, e) => `${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`,
            [y]: (t, e) => `${e ? `${e}[^/]*` : "[^/]*"}(?=$|\\/$)`,
          },
          w = (t) => "string" == typeof t;
        class P {
          constructor(t, e, r, i, n, o) {
            ((this.pattern = t),
              (this.mark = e),
              (this.negative = n),
              u(this, "body", r),
              u(this, "ignoreCase", i),
              u(this, "regexPrefix", o));
          }
          get regex() {
            const t = "_" + v;
            return this[t] ? this[t] : this._make(v, t);
          }
          get checkRegex() {
            const t = "_" + y;
            return this[t] ? this[t] : this._make(y, t);
          }
          _make(t, e) {
            const r = this.regexPrefix.replace(m, b[t]),
              i = this.ignoreCase ? new RegExp(r, "i") : new RegExp(r);
            return u(this, e, i);
          }
        }
        const _ = ({ pattern: t, mark: e }, r) => {
          let i = !1,
            s = t;
          (0 === s.indexOf("!") && ((i = !0), (s = s.substr(1))),
            (s = s.replace(n, "!").replace(o, "#")));
          const a = ((t) => g.reduce((e, [r, i]) => e.replace(r, i.bind(t)), t))(s);
          return new P(t, e, s, r, i, a);
        };
        class k {
          constructor(t) {
            ((this._ignoreCase = t), (this._rules = []));
          }
          _add(t) {
            if (t && t[d])
              return ((this._rules = this._rules.concat(t._rules._rules)), void (this._added = !0));
            if (
              (w(t) && (t = { pattern: t }),
              ((t) => t && w(t) && !r.test(t) && !i.test(t) && 0 !== t.indexOf("#"))(t.pattern))
            ) {
              const e = _(t, this._ignoreCase);
              ((this._added = !0), this._rules.push(e));
            }
          }
          add(t) {
            return (
              (this._added = !1),
              e(w(t) ? ((t) => t.split(s).filter(Boolean))(t) : t).forEach(this._add, this),
              this._added
            );
          }
          test(t, e, r) {
            let i,
              n = !1,
              o = !1;
            this._rules.forEach((s) => {
              const { negative: a } = s;
              if ((o === a && n !== o) || (a && !n && !o && !e)) return;
              s[r].test(t) && ((n = !a), (o = a), (i = a ? void 0 : s));
            });
            const s = { ignored: n, unignored: o };
            return (i && (s.rule = i), s);
          }
        }
        const $ = (t, e) => {
            throw new e(t);
          },
          x = (t, e, r) => {
            if (!w(t)) return r(`path must be a string, but got \`${e}\``, TypeError);
            if (!t) return r("path must not be empty", TypeError);
            if (x.isNotRelative(t)) {
              return r(
                `path should be a ${"`path.relative()`d"} string, but got "${e}"`,
                RangeError,
              );
            }
            return !0;
          },
          S = (t) => a.test(t);
        ((x.isNotRelative = S), (x.convert = (t) => t));
        class E {
          constructor({ ignorecase: t = !0, ignoreCase: e = t, allowRelativePaths: r = !1 } = {}) {
            (u(this, d, !0),
              (this._rules = new k(e)),
              (this._strictPathCheck = !r),
              this._initCache());
          }
          _initCache() {
            ((this._ignoreCache = Object.create(null)), (this._testCache = Object.create(null)));
          }
          add(t) {
            return (this._rules.add(t) && this._initCache(), this);
          }
          addPattern(t) {
            return this.add(t);
          }
          _test(t, e, r, i) {
            const n = t && x.convert(t);
            return (x(n, t, this._strictPathCheck ? $ : p), this._t(n, e, r, i));
          }
          checkIgnore(t) {
            if (!c.test(t)) return this.test(t);
            const e = t.split(h).filter(Boolean);
            if ((e.pop(), e.length)) {
              const t = this._t(e.join(h) + h, this._testCache, !0, e);
              if (t.ignored) return t;
            }
            return this._rules.test(t, !1, y);
          }
          _t(t, e, r, i) {
            if (t in e) return e[t];
            if ((i || (i = t.split(h).filter(Boolean)), i.pop(), !i.length))
              return (e[t] = this._rules.test(t, r, v));
            const n = this._t(i.join(h) + h, e, r, i);
            return (e[t] = n.ignored ? n : this._rules.test(t, r, v));
          }
          ignores(t) {
            return this._test(t, this._ignoreCache, !1).ignored;
          }
          createFilter() {
            return (t) => !this.ignores(t);
          }
          filter(t) {
            return e(t).filter(this.createFilter());
          }
          test(t) {
            return this._test(t, this._testCache, !0);
          }
        }
        const C = (t) => new E(t),
          D = () => {
            x.convert = (t) =>
              /^\\\\\?\\/.test(t) || /["<>|\u0000-\u001F]+/u.test(t) ? t : t.replace(/\\/g, "/");
            const t = /^[a-z]:\//i;
            x.isNotRelative = (e) => t.test(e) || S(e);
          };
        ("undefined" != typeof process && "win32" === process.platform && D(),
          (t.exports = C),
          (C.default = C),
          (t.exports.isPathValid = (t) => x(t && x.convert(t), t, p)),
          u(t.exports, Symbol.for("setupWindows"), D));
      },
    },
    e = {};
  function r(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var o = (e[i] = { exports: {} });
    return (t[i](o, o.exports, r), o.exports);
  }
  ((r.d = (t, e) => {
    for (var i in e)
      r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
  }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }));
  var i = {};
  (() => {
    "use strict";
    (r.r(i), r.d(i, { activate: () => M, deactivate: () => j }));
    const t = require("node:fs/promises"),
      e = require("node:os"),
      n = require("node:path");
    var o = r(613);
    const s = 32,
      a = 256,
      c = new Set([".git", "node_modules", "venv", ".venv"]),
      h = new Set(["EACCES", "ETIMEDOUT", "ELOOP", "ENOENT", "ENOTDIR", "EPERM"]),
      l = [
        ["Desktop"],
        ["Documents"],
        ["Downloads"],
        ["Library", "Application Support", "CloudDocs"],
        ["Library", "CloudStorage"],
        ["Library", "Containers"],
        ["Library", "Mobile Documents"],
        ["Movies"],
        ["Music"],
        ["Pictures"],
      ];
    const d = [...l, ["Library"]],
      u = [["go", "pkg", "mod"], ["OrbStack"]],
      f = { win32: [["AppData"]], linux: [], darwin: [] };
    class p {
      constructor() {
        ((this.bufferedValues = []),
          (this.pendingNext = []),
          (this.done = !1),
          (this.failure = void 0));
      }
      push(t) {
        if (this.done || void 0 !== this.failure) return;
        const e = this.pendingNext.shift();
        void 0 === e ? this.bufferedValues.push(t) : e.resolve({ value: t, done: !1 });
      }
      close() {
        if (!this.done && void 0 === this.failure)
          for (this.done = !0; this.pendingNext.length > 0;) {
            const t = this.pendingNext.shift();
            t?.resolve({ value: void 0, done: !0 });
          }
      }
      fail(t) {
        if (!this.done && void 0 === this.failure)
          for (this.failure = t; this.pendingNext.length > 0;) {
            const e = this.pendingNext.shift();
            e?.reject(t);
          }
      }
      async next() {
        if (this.bufferedValues.length > 0) {
          return { value: this.bufferedValues.shift(), done: !1 };
        }
        if (void 0 !== this.failure) throw this.failure;
        return this.done
          ? { value: void 0, done: !0 }
          : new Promise((t, e) => {
              this.pendingNext.push({ resolve: t, reject: e });
            });
      }
    }
    function g(t) {
      return t.isDirectory()
        ? "directory"
        : t.isFile()
          ? "file"
          : t.isSymbolicLink()
            ? "symlink"
            : "other";
    }
    const m = {
      readDir: async (e) =>
        (await (0, t.readdir)(e, { withFileTypes: !0 })).map((t) => ({ name: t.name, kind: g(t) })),
      readFile: (e) => (0, t.readFile)(e, "utf8"),
    };
    function v(t) {
      if (!t?.aborted) return;
      const e = t.reason;
      if (e instanceof Error) throw e;
      throw new Error(void 0 === e ? "Workspace explorer aborted" : String(e));
    }
    function y(t) {
      const e = t?.code;
      return "string" == typeof e && h.has(e);
    }
    async function b(t) {
      const { fileSystem: e, filePath: r } = t;
      try {
        return await e.readFile(r);
      } catch (t) {
        if (y(t)) return;
        throw t;
      }
    }
    function w(t, e) {
      if (t === e) return !0;
      const r = e.endsWith(n.sep) ? e : `${e}${n.sep}`;
      return t.startsWith(r);
    }
    function P(t, e) {
      return e.some((e) => w(t, e));
    }
    function _(t) {
      return t.replaceAll("\\", "/");
    }
    function k(t, e) {
      const r = t.test(e),
        i = t.test(`${e}/`);
      if (r.ignored || r.unignored || i.ignored || i.unignored)
        return !i.unignored && (i.ignored || r.ignored);
    }
    function $(t) {
      const { directoryPath: e, ignoreMatchers: r } = t;
      let i;
      for (const t of r) {
        if (!w(e, t.basePath)) continue;
        const r = _((0, n.relative)(t.basePath, e));
        if (0 === r.length) continue;
        const o = k(t.matcher, r);
        void 0 !== o && (i = o);
      }
      return !0 === i;
    }
    function x(t) {
      const e = t.match(/^\s*gitdir:\s*(.+)\s*$/im);
      if (null === e) return;
      const r = e[1]?.trim();
      return void 0 !== r && r.length > 0 ? r : void 0;
    }
    async function S(t) {
      const e = await (async function (t) {
        const { directoryPath: e, repositoryKind: r, fileSystem: i } = t;
        switch (r) {
          case "git-directory":
            return b({ fileSystem: i, filePath: (0, n.join)(e, ".git", "config") });
          case "bare":
            return b({ fileSystem: i, filePath: (0, n.join)(e, "config") });
          case "git-file": {
            const t = (0, n.join)(e, ".git"),
              r = await b({ fileSystem: i, filePath: t });
            if (void 0 === r) return;
            const o = x(r);
            if (void 0 === o) return;
            const s = (0, n.resolve)(e, o),
              a = await b({ fileSystem: i, filePath: (0, n.join)(s, "config") });
            if (void 0 !== a) return a;
            const c = await b({ fileSystem: i, filePath: (0, n.join)(s, "commondir") });
            if (void 0 === c) return;
            const h = c.trim();
            if (0 === h.length) return;
            return b({ fileSystem: i, filePath: (0, n.join)((0, n.resolve)(s, h), "config") });
          }
          default:
            throw new Error(`Unhandled repository kind: ${String(r)}`);
        }
      })(t);
      return void 0 === e
        ? []
        : (function (t) {
            const e = new Map();
            let r;
            for (const i of t.split(/\r?\n/u)) {
              const t = i.trim();
              if (0 === t.length || t.startsWith("#") || t.startsWith(";")) continue;
              const n = t.match(/^\[\s*remote\s+"([^"]+)"\s*\]$/i);
              if (null !== n) {
                ((r = n[1]), e.has(r) || e.set(r, { name: r }));
                continue;
              }
              if (t.startsWith("[") && t.endsWith("]")) {
                r = void 0;
                continue;
              }
              if (void 0 === r) continue;
              const o = t.match(/^([A-Za-z0-9.-]+)\s*=\s*(.*)$/u);
              if (null === o) continue;
              const s = o[1].toLowerCase(),
                a = o[2].trim();
              if (0 === a.length) continue;
              const c = e.get(r);
              void 0 !== c &&
                ("url" !== s || void 0 !== c.fetchUrl
                  ? "pushurl" === s && void 0 === c.pushUrl && (c.pushUrl = a)
                  : (c.fetchUrl = a));
            }
            return Array.from(e.values())
              .filter((t) => void 0 !== t.fetchUrl || void 0 !== t.pushUrl)
              .sort((t, e) => t.name.localeCompare(e.name))
              .map((t) => {
                const e = { name: t.name };
                return (
                  void 0 !== t.fetchUrl && (e.fetchUrl = t.fetchUrl),
                  void 0 !== t.pushUrl && (e.pushUrl = t.pushUrl),
                  e
                );
              });
          })(e);
    }
    async function E(t) {
      const r = t.signal;
      v(r);
      const i = t.platform ?? process.platform,
        h = (0, n.resolve)(t.homeDirectory ?? (0, e.homedir)()),
        l = (0, n.resolve)(t.rootDirectory ?? h),
        p = (function (t) {
          if (void 0 === t) return s;
          if (!Number.isFinite(t) || t < 1)
            throw new Error("maxConcurrency must be a positive finite number");
          return Math.min(Math.floor(t), a);
        })(t.maxConcurrency),
        g = (function (t) {
          if (void 0 === t) return Number.POSITIVE_INFINITY;
          if (!Number.isFinite(t) || t < 0)
            throw new Error("maxDepth must be a non-negative finite number");
          return Math.floor(t);
        })(t.maxDepth),
        _ = t.scanNestedRepositories ?? !1,
        k = t.includeBareRepositories ?? !0,
        E = t.includeWorktrees ?? !1,
        C = t.skipMacOsProtectedDirectories ?? !0,
        D = t.fileSystem ?? m,
        O = (function (t) {
          const e = new Set(c);
          for (const r of t ?? []) r.length > 0 && e.add(r);
          return e;
        })(t.additionalSkipDirectoryNames),
        M = (function (t) {
          const {
              platform: e,
              homeDirectory: r,
              rootDirectory: i,
              skipMacOsProtectedDirectories: o,
              macOsTccPermissions: s,
            } = t,
            a = [],
            c = [...u, ...(f[e] ?? [])];
          for (const t of c) {
            const e = (0, n.resolve)(r, ...t);
            w(i, e) || a.push(e);
          }
          if ("darwin" !== e || !o) return a;
          const h =
            void 0 !== s
              ? new Set(s.filter((t) => "authorized" === t.state).map((t) => t.path))
              : void 0;
          for (const t of d) {
            const e = (0, n.resolve)(r, ...t);
            w(i, e) || h?.has(e) || a.push(e);
          }
          return a;
        })({
          platform: i,
          homeDirectory: h,
          rootDirectory: l,
          skipMacOsProtectedDirectories: C,
          macOsTccPermissions: t.macOsTccPermissions,
        }),
        j = new Set(),
        N = new Set([l]),
        W = [{ directoryPath: l, depth: 0, isWithinRepository: !1, ignoreMatchers: [] }],
        R = async (e) => {
          v(r);
          const { directoryPath: i, depth: s } = e;
          let a;
          try {
            a = await D.readDir(i);
          } catch (t) {
            if (y(t)) return [];
            throw t;
          }
          v(r);
          const c = a.find((t) => ".git" === t.name);
          let h;
          (void 0 !== c &&
            (h = await (async function (t) {
              const { directoryPath: e, gitMarkerEntry: r, fileSystem: i } = t;
              if ("directory" === r.kind) return "git-directory";
              const o = (0, n.join)(e, ".git");
              if ("symlink" === r.kind)
                try {
                  return (await i.readDir(o), "git-directory");
                } catch (t) {
                  if (!y(t)) throw t;
                }
              if ("file" !== r.kind && "symlink" !== r.kind) return;
              const s = await b({ fileSystem: i, filePath: o });
              return void 0 !== s && void 0 !== x(s) ? "git-file" : void 0;
            })({ directoryPath: i, gitMarkerEntry: c, fileSystem: D })),
            void 0 === h &&
              void 0 === c &&
              k &&
              (function (t) {
                let e = !1,
                  r = !1,
                  i = !1;
                for (const n of t)
                  ("HEAD" !== n.name || ("file" !== n.kind && "symlink" !== n.kind) || (e = !0),
                    "objects" === n.name && "directory" === n.kind && (r = !0),
                    "refs" === n.name && "directory" === n.kind && (i = !0));
                return e && r && i;
              })(a) &&
              (h = "bare"));
          const l = "git-file" === h && !E,
            d = e.isWithinRepository || void 0 !== h;
          let u = e.ignoreMatchers;
          if (d) {
            const t = (0, n.join)(i, ".gitignore"),
              e = await b({ fileSystem: D, filePath: t });
            if (void 0 !== e) {
              const t = (function (t) {
                const e = [];
                for (const r of t.split(/\r?\n/u)) {
                  const t = r.trimStart();
                  0 === t.length || t.startsWith("#") || e.push(r);
                }
                return e;
              })(e);
              t.length > 0 && (u = [...u, { basePath: i, matcher: o().add(t) }]);
            }
          }
          if (void 0 !== h && !l && !j.has(i)) {
            j.add(i);
            const e = await S({ directoryPath: i, repositoryKind: h, fileSystem: D });
            t.onRepositoryDiscovered({ path: i, kind: h, remotes: e });
          }
          if (s >= g) return [];
          if (void 0 !== h && (l || !_)) return [];
          const f = [];
          for (const t of a) {
            if ("directory" !== t.kind) continue;
            if (t.name.startsWith(".")) continue;
            if (O.has(t.name)) continue;
            const e = (0, n.resolve)((0, n.join)(i, t.name));
            P(e, M) ||
              $({ directoryPath: e, ignoreMatchers: u }) ||
              f.push({ directoryPath: e, depth: s + 1, isWithinRepository: d, ignoreMatchers: u });
          }
          return f;
        };
      let U = 0,
        F = !1;
      await new Promise((t, e) => {
        let i;
        const n = () => {
            void 0 !== r && void 0 !== i && (r.removeEventListener("abort", i), (i = void 0));
          },
          o = () => {
            F || ((F = !0), n(), t());
          },
          s = (t) => {
            F || ((F = !0), n(), e(t));
          };
        ((i = () => {
          var t;
          s(
            ((t = r?.reason),
            t instanceof Error
              ? t
              : new Error(void 0 === t ? "Workspace explorer aborted" : String(t))),
          );
        }),
          void 0 !== r && r.addEventListener("abort", i, { once: !0 }));
        const a = () => {
          if (!F) {
            try {
              v(r);
            } catch (t) {
              return void s(t);
            }
            for (; U < p && W.length > 0;) {
              const t = W.pop();
              if (void 0 === t) break;
              ((U += 1),
                R(t)
                  .then((t) => {
                    for (const e of t)
                      N.has(e.directoryPath) || (N.add(e.directoryPath), W.push(e));
                  })
                  .catch((t) => {
                    s(t);
                  })
                  .finally(() => {
                    ((U -= 1), F || (0 !== W.length || 0 !== U ? a() : o()));
                  }));
            }
            0 === W.length && 0 === U && o();
          }
        };
        a();
      });
    }
    async function* C(t = {}) {
      const e = new AbortController(),
        { signal: r, dispose: i } = (function (t) {
          const e = new AbortController(),
            r = [],
            i = (t) => {
              e.signal.aborted ||
                (void 0 !== t ? e.abort(t) : e.abort(new Error("Workspace explorer aborted")));
            };
          for (const e of t) {
            if (void 0 === e) continue;
            if (e.aborted) {
              i(e.reason);
              break;
            }
            const t = () => {
              i(e.reason);
            };
            (e.addEventListener("abort", t, { once: !0 }),
              r.push(() => {
                e.removeEventListener("abort", t);
              }));
          }
          return {
            signal: e.signal,
            dispose: () => {
              for (const t of r) t();
            },
          };
        })([t.signal, e.signal]),
        n = new p(),
        o = E({
          ...t,
          signal: r,
          onRepositoryDiscovered: (t) => {
            n.push(t);
          },
        })
          .then(() => {
            n.close();
          })
          .catch((t) => {
            n.fail(t);
          })
          .finally(() => {
            i();
          });
      try {
        for (;;) {
          const t = await n.next();
          if (t.done) break;
          yield t.value;
        }
        await o;
      } finally {
        (e.signal.aborted || e.abort(new Error("Workspace explorer iteration stopped")),
          i(),
          await o.catch(() => {}));
      }
    }
    const D = require("vscode");
    function O(t, e) {
      if (t === e) return "~";
      const r = "win32" === process.platform,
        i = r ? t.toLowerCase() : t,
        o = r ? e.toLowerCase() : e,
        s = o.endsWith(n.sep) ? o : `${o}${n.sep}`;
      if (!i.startsWith(s)) return t;
      const a = (0, n.relative)(e, t);
      return 0 === a.length || "." === a ? "~" : `~${n.sep}${a}`;
    }
    function M(t) {
      const r = (0, e.homedir)(),
        i = D.cursor.registerExplorerProvider(async (t) => {
          const e = [];
          for await (const i of C(t))
            e.push({
              path: i.path,
              displayPath: O(i.path, r),
              kind: i.kind,
              remotes: i.remotes.map((t) => ({
                name: t.name,
                fetchUrl: t.fetchUrl,
                pushUrl: t.pushUrl,
              })),
            });
          return e;
        });
      t.subscriptions.push(i);
    }
    function j() {}
  })();
  var n = exports;
  for (var o in i) n[o] = i[o];
  i.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-explorer/dist/main.js.map
