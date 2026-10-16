require.d(exports, {
    VscodeFileChangeTracker: ()=>s
});
class s {
    constructor(e){
        this.onChange = e;
    }
    async trackChange(e, t, a, s) {
        const o = {
            path: e,
            before: t,
            after: a,
            metadata: s
        };
        this.onChange && await this.onChange(o);
    }
}
