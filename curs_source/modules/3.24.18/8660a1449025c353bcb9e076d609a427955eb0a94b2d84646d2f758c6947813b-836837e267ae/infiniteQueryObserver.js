import { Sqk, Uvs, yqk } from "./Ycg.js";
import { gpf } from "./infiniteQueryBehavior.js";
import { _pf, jxl } from "./queryObserver.js";
import { E } from "./tslib.es6.js";
var bpf;
export { bpf };
var __wakaru_Tqk_initialized = false;
export function Tqk() {
if (__wakaru_Tqk_initialized) return;
__wakaru_Tqk_initialized = true;
E(), _pf(), gpf(), bpf = class extends jxl {
    constructor(t, e){
        super(t, e);
    }
    bindMethods() {
        super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(t) {
        super.setOptions({
            ...t,
            behavior: Uvs()
        });
    }
    getOptimisticResult(t) {
        return t.behavior = Uvs(), super.getOptimisticResult(t);
    }
    fetchNextPage(t) {
        return this.fetch({
            ...t,
            meta: {
                fetchMore: {
                    direction: "forward"
                }
            }
        });
    }
    fetchPreviousPage(t) {
        return this.fetch({
            ...t,
            meta: {
                fetchMore: {
                    direction: "backward"
                }
            }
        });
    }
    createResult(t, e) {
        const { state: n } = t, i = super.createResult(t, e), { isFetching: r, isRefetching: s, isError: o, isRefetchError: a } = i, l = n.fetchMeta?.fetchMore?.direction, c = o && l === "forward", u = r && l === "forward", d = o && l === "backward", h = r && l === "backward";
        return {
            ...i,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: yqk(e, n.data),
            hasPreviousPage: Sqk(e, n.data),
            isFetchNextPageError: c,
            isFetchingNextPage: u,
            isFetchPreviousPageError: d,
            isFetchingPreviousPage: h,
            isRefetchError: a && !c && !d,
            isRefetching: s && !u && !h
        };
    }
};

}
