"use strict";
((exports.id = 165),
  (exports.ids = [165]),
  (exports.modules = {
    95165: (e, t, a) => {
      a.d(t, { VscodeFileChangeTracker: () => s });
      class s {
        constructor(e) {
          this.onChange = e;
        }
        async trackChange(e, t, a, s) {
          const o = { path: e, before: t, after: a, metadata: s };
          this.onChange && (await this.onChange(o));
        }
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/165.js.map
