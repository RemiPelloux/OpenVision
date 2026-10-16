"use strict";
((exports.id = 55),
  (exports.ids = [55]),
  (exports.modules = {
    8041: (t, e, s) => {
      s.d(e, { A: () => c });
      var o = s(65835),
        r = s(42757);
      const n = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
        i = ["__proto__", "profile __proto__"],
        c = (t) => {
          const e = {};
          let s, c;
          for (const a of t.split(/\r?\n/)) {
            const t = a.split(/(^|\s)[;#]/)[0].trim();
            if ("[" === t[0] && "]" === t[t.length - 1]) {
              ((s = void 0), (c = void 0));
              const e = t.substring(1, t.length - 1),
                a = n.exec(e);
              if (a) {
                const [, t, , e] = a;
                Object.values(o.I).includes(t) && (s = [t, e].join(r.Q));
              } else s = e;
              if (i.includes(e)) throw new Error(`Found invalid profile name "${e}"`);
            } else if (s) {
              const o = t.indexOf("=");
              if (![0, -1].includes(o)) {
                const [n, i] = [t.substring(0, o).trim(), t.substring(o + 1).trim()];
                if ("" === i) c = n;
                else {
                  (c && a.trimStart() === a && (c = void 0), (e[s] = e[s] || {}));
                  const t = c ? [c, n].join(r.Q) : n;
                  e[s][t] = i;
                }
              }
            }
          }
          return e;
        };
    },
    42757: (t, e, s) => {
      s.d(e, { Q: () => o });
      const o = ".";
    },
    50333: (t, e, s) => {
      s.d(e, { K: () => o });
      class o {
        method;
        protocol;
        hostname;
        port;
        path;
        query;
        headers;
        username;
        password;
        fragment;
        body;
        constructor(t) {
          ((this.method = t.method || "GET"),
            (this.hostname = t.hostname || "localhost"),
            (this.port = t.port),
            (this.query = t.query || {}),
            (this.headers = t.headers || {}),
            (this.body = t.body),
            (this.protocol = t.protocol
              ? ":" !== t.protocol.slice(-1)
                ? `${t.protocol}:`
                : t.protocol
              : "https:"),
            (this.path = t.path ? ("/" !== t.path.charAt(0) ? `/${t.path}` : t.path) : "/"),
            (this.username = t.username),
            (this.password = t.password),
            (this.fragment = t.fragment));
        }
        static clone(t) {
          const e = new o({ ...t, headers: { ...t.headers } });
          var s;
          return (
            e.query &&
              (e.query =
                ((s = e.query),
                Object.keys(s).reduce((t, e) => {
                  const o = s[e];
                  return { ...t, [e]: Array.isArray(o) ? [...o] : o };
                }, {}))),
            e
          );
        }
        static isInstance(t) {
          if (!t) return !1;
          const e = t;
          return (
            "method" in e &&
            "protocol" in e &&
            "hostname" in e &&
            "path" in e &&
            "object" == typeof e.query &&
            "object" == typeof e.headers
          );
        }
        clone() {
          return o.clone(this);
        }
      }
    },
    53835: (t, e, s) => {
      s.d(e, { g: () => n });
      var o = s(16928),
        r = s(43344);
      const n = () => process.env.AWS_CONFIG_FILE || (0, o.join)((0, r.R)(), ".aws", "config");
    },
    68395: (t, e, s) => {
      s.d(e, { p: () => p });
      var o = s(16928),
        r = s(65835),
        n = s(42757);
      const i = (t) =>
        Object.entries(t)
          .filter(([t]) => {
            const e = t.indexOf(n.Q);
            return -1 !== e && Object.values(r.I).includes(t.substring(0, e));
          })
          .reduce(
            (t, [e, s]) => {
              const o = e.indexOf(n.Q);
              return ((t[e.substring(0, o) === r.I.PROFILE ? e.substring(o + 1) : e] = s), t);
            },
            { ...(t.default && { default: t.default }) },
          );
      var c = s(53835),
        a = s(43344);
      const h = () =>
        process.env.AWS_SHARED_CREDENTIALS_FILE || (0, o.join)((0, a.R)(), ".aws", "credentials");
      var l = s(8041),
        d = s(65600);
      const u = () => ({}),
        p = async (t = {}) => {
          const { filepath: e = h(), configFilepath: s = (0, c.g)() } = t,
            r = (0, a.R)();
          let n = e;
          e.startsWith("~/") && (n = (0, o.join)(r, e.slice(2)));
          let p = s;
          s.startsWith("~/") && (p = (0, o.join)(r, s.slice(2)));
          const f = await Promise.all([
            (0, d.TA)(p, { ignoreCache: t.ignoreCache }).then(l.A).then(i).catch(u),
            (0, d.TA)(n, { ignoreCache: t.ignoreCache }).then(l.A).catch(u),
          ]);
          return { configFile: f[0], credentialsFile: f[1] };
        };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/55.js.map
