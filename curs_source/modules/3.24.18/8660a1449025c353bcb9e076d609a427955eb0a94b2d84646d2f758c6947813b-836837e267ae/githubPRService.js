import { Ei, Ga, Qe, Tr, Ya, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Q0k, X0k, Y0k, Yas, ils } from "./Ycg.js";
import { Ple, oMe } from "./authentication.js";
import { Z0k } from "./ciParsingUtils.js";
import { Du, pTn } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { mtl, wX } from "./gYa.js";
import { Jv, hy } from "./gitContextService.js";
import { Lyg, els, jdl, tls } from "./githubRpcClient.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Jc } from "./observable.js";
import { Rd, ih } from "./pathService.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { bc } from "./ze.js";
var Hdl, zAn, Fyg, Byg, Uyg, jyg, $yg, Hyg, Wyg, Gyg, qyg, zyg, Vyg, Kyg, Yyg, Xyg, YIi, Bat, rls;
export { $yg, Bat, Byg, Fyg, Gyg, Hdl, Hyg, Kyg, Uyg, Vyg, Wyg, Xyg, YIi, Yyg, jyg, qyg, rls, zAn, zyg };
var __wakaru_sls_initialized = false;
export function sls() {
if (__wakaru_sls_initialized) return;
__wakaru_sls_initialized = true;
"use strict";
E(), nl(), Du(), Ga(), Ei(), Qe(), Jc(), fn(), ms(), Rn(), It(), Ji(), Cm(), Sr(), Z0k(), Lyg(), oMe(), ih(), C2(), hy(), Hdl = "ide-pr-service", zAn = jn("githubPRService"), Fyg = `
fragment PullRequestFields on PullRequest {
  id
  number
  title
  url
  state
  isDraft
  body
  bodyHTML
  createdAt
  updatedAt
  author {
    login
  }
  repository {
    nameWithOwner
  }
  headRefName
  headRefOid
  baseRefName
  mergedAt
  closedAt
  mergeable
  mergeStateStatus
}
`, Byg = `
query GetPRComments($owner: String!, $repo: String!, $prNumber: Int!, $first: Int!, $after: String) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      reviewThreads(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          isResolved
          isOutdated
          path
          line
          startLine
          originalLine
          originalStartLine
          diffSide
          comments(first: 100) {
            nodes {
              id
              body
              diffHunk
              author {
                login
                avatarUrl(size: 32)
              }
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}
`, Uyg = `
query GetPRCheckContexts($owner: String!, $repo: String!, $prNumber: Int!, $first: Int!, $after: String) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      commits(last: 1) {
        nodes {
          commit {
            statusCheckRollup {
              contexts(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  __typename
                  ... on CheckRun {
                    databaseId
                    name
                    conclusion
                    status
                    detailsUrl
                    text
                    summary
                    annotations(first: 50) {
                      nodes {
                        path
                        location {
                          start { line }
                          end { line }
                        }
                        annotationLevel
                        message
                        title
                      }
                    }
                  }
                  ... on StatusContext {
                    context
                    state
                    targetUrl
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`, jyg = `
mutation ResolveReviewThread($threadId: ID!) {
  resolveReviewThread(input: { threadId: $threadId }) {
    thread {
      id
      isResolved
    }
  }
}
`, $yg = `
mutation AddPullRequestReviewComment($pullRequestId: ID!, $commitOID: GitObjectID!, $body: String!, $path: String!, $line: Int!, $side: DiffSide, $startLine: Int, $startSide: DiffSide) {
  addPullRequestReview(input: {
    pullRequestId: $pullRequestId
    commitOID: $commitOID
    event: COMMENT
    threads: [{
      body: $body
      path: $path
      line: $line
      side: $side
      startLine: $startLine
      startSide: $startSide
    }]
  }) {
    pullRequestReview {
      pullRequest {
        reviewThreads(last: 1) {
          nodes {
            id
            isResolved
            isOutdated
            path
            line
            startLine
            diffSide
            comments(first: 10) {
              nodes {
                id
                body
                author {
                  login
                  avatarUrl(size: 32)
                }
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
}
`, Hyg = `
mutation ReplyToReviewThread($threadId: ID!, $body: String!) {
  addPullRequestReviewThreadReply(input: {
    pullRequestReviewThreadId: $threadId
    body: $body
  }) {
    comment {
      id
      body
      author {
        login
        avatarUrl(size: 32)
      }
      createdAt
      updatedAt
      pullRequestReview {
        pullRequest {
          reviewThreads(first: 100) {
            nodes {
              id
              isResolved
              isOutdated
              path
              line
              startLine
              diffSide
              comments(first: 50) {
                nodes {
                  id
                  body
                  author {
                    login
                    avatarUrl(size: 32)
                  }
                  createdAt
                  updatedAt
                }
              }
            }
          }
        }
      }
    }
  }
}
`, Wyg = `
${Fyg}
query GetPRDetails($owner: String!, $repo: String!, $prNumber: Int!) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      # PR info + merge status
      ...PullRequestFields

      # Check/CI status
      commits(last: 1) {
        nodes {
          commit {
            statusCheckRollup {
              state
              contexts(first: 100) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  __typename
                  ... on CheckRun {
				  				  databaseId
				  				  name
				  				  conclusion
				  				  status
				  				  detailsUrl
				  				  text
				  				  summary
				  				  annotations(first: 50) {
				  				    nodes {
				  				      path
				  				      location {
				  				        start { line }
				  				        end { line }
				  				      }
				  				      annotationLevel
				  				      message
				  				      title
				  				    }
				  				  }
				  				}
                  ... on StatusContext {
                    context
                    state
                    targetUrl
                    description
                  }
                }
              }
            }
            deployments(first: 10) {
              nodes {
                environment
                state
                latestStatus {
                  environmentUrl
                  logUrl
                  state
                }
              }
            }
          }
        }
      }

      # First page of review comments
      reviewThreads(first: 100) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          isResolved
          isOutdated
          path
          line
          startLine
          diffSide
          comments(first: 100) {
            nodes {
              id
              body
              author {
                login
                avatarUrl(size: 32)
              }
              createdAt
              updatedAt
            }
          }
        }
      }

      # Top-level comments (not attached to any file)
      comments(first: 100) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          body
          author {
            login
            avatarUrl(size: 32)
          }
          createdAt
          updatedAt
        }
      }
    }
  }
}
`, Gyg = `
query GetCurrentUser {
  viewer {
    login
  }
}
`, qyg = `
mutation MergePullRequest($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
  mergePullRequest(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
    pullRequest {
      merged
    }
  }
}
`, zyg = `
mutation ClosePullRequest($pullRequestId: ID!) {
  closePullRequest(input: { pullRequestId: $pullRequestId }) {
    pullRequest {
      id
      state
      closed
      closedAt
    }
  }
}
`, Vyg = `
mutation EnableAutoMerge($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
  enablePullRequestAutoMerge(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
    pullRequest {
      id
      autoMergeRequest {
        enabledAt
      }
    }
  }
}
`, Kyg = `
mutation DisableAutoMerge($pullRequestId: ID!) {
  disablePullRequestAutoMerge(input: { pullRequestId: $pullRequestId }) {
    pullRequest {
      id
      autoMergeRequest {
        enabledAt
      }
    }
  }
}
`, Yyg = [
    /\.vercel\.app/i,
    /\.netlify\.app/i,
    /\.netlify\.com/i,
    /\.railway\.app/i,
    /\.onrender\.com/i,
    /\.herokuapp\.com/i,
    /\.amplifyapp\.com/i,
    /\.pages\.dev/i,
    /\.workers\.dev/i,
    /\.surge\.sh/i,
    /\.fly\.dev/i,
    /\.deno\.dev/i,
    /\.up\.railway\.app/i
], Xyg = [
    /vercel\.com\/integrations/i,
    /vercel\.com\/docs/i,
    /vercel\.com\/.*\/settings/i,
    /netlify\.com\/docs/i,
    /github\.com/i,
    /docs\./i
], YIi = [
    "repo"
], Bat = "github", rls = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.gitContextService = t, this.authenticationService = e, this.logService = n, this.fileService = i, this.workspaceContextService = r, this.pathService = s, this.structuredLogService = o, this.githubRpcClient = a, this._prDetailCache = bc("githubPR.prDetailCache", {}), this.prDetailCache = this._prDetailCache, this.commitAvatarCache = new Map;
    }
    updatePRCacheEntry(t, e) {
        const n = this._prDetailCache.get(), i = n[t], s = {
            ...{
                prUrl: t,
                pullRequest: void 0,
                checkStatus: void 0,
                isCheckStatusLoading: !1,
                comments: [],
                topLevelComments: [],
                isCommentsLoading: !1,
                mergeInfo: void 0,
                isMergeInfoLoading: !1,
                filesData: void 0,
                hasFetched: !1,
                lastUpdatedAt: Date.now()
            },
            ...i,
            ...e,
            prUrl: t,
            lastUpdatedAt: Date.now()
        };
        this._prDetailCache.set({
            ...n,
            [t]: s
        }, void 0);
    }
    getPRCacheEntry(t) {
        return this._prDetailCache.get()[t];
    }
    async getOrFetchPRDetails(t, e = !1) {
        const n = this.getPRCacheEntry(t);
        if (n?.hasFetched && !e) return n;
        const i = this.parsePrUrl(t);
        if (!i) throw new Error(`Invalid PR URL: ${t}`);
        const { owner: r, repo: s, prNumber: o } = i, a = await this.getGitHubAccessToken();
        if (!a) throw new Error("No GitHub access token available");
        this.updatePRCacheEntry(t, {
            isCheckStatusLoading: !0,
            isCommentsLoading: !0,
            isMergeInfoLoading: !0
        });
        try {
            const c = (await this.graphqlRequest(Wyg, {
                owner: r,
                repo: s,
                prNumber: o
            }, a)).repository?.pullRequest;
            if (!c) throw new Error(`PR not found: ${t}`);
            const u = this.convertToUserPullRequest(c, `${r}/${s}`), d = c.commits?.nodes?.[0]?.commit, h = d?.statusCheckRollup, p = d?.deployments?.nodes || [];
            let g = h?.contexts?.nodes || [];
            const f = h?.contexts?.pageInfo;
            if (f?.hasNextPage) {
                const k = await this.getAllPRCheckContexts(t, f.endCursor);
                g = [
                    ...g,
                    ...k
                ];
            }
            const _ = this.processCheckStatusFromContextsAndDeployments(g, p), b = this.processMergeInfo(c);
            let y = this.processReviewThreads(c.reviewThreads?.nodes || []);
            if (c.reviewThreads?.pageInfo?.hasNextPage) {
                const k = await this.getAllPRComments(t, c.reviewThreads.pageInfo.endCursor);
                y = [
                    ...y,
                    ...k.threads
                ];
            }
            const S = this.processTopLevelComments(c.comments?.nodes || []);
            return this.updatePRCacheEntry(t, {
                pullRequest: u,
                checkStatus: _,
                isCheckStatusLoading: !1,
                comments: y,
                topLevelComments: S,
                isCommentsLoading: !1,
                mergeInfo: b,
                isMergeInfoLoading: !1,
                hasFetched: !0
            }), this.getPRCacheEntry(t);
        } catch (l) {
            throw this.updatePRCacheEntry(t, {
                isCheckStatusLoading: !1,
                isCommentsLoading: !1,
                isMergeInfoLoading: !1
            }), l;
        }
    }
    processCheckStatusFromContextsAndDeployments(t, e) {
        let n = 0, i = 0, r = 0, s = 0, o = 0;
        const a = [];
        for (const d of t)if (d.__typename === "CheckRun") {
            let h;
            d.status === "COMPLETED" ? d.conclusion === "SUCCESS" ? (n++, h = "success") : d.conclusion === "NEUTRAL" ? (s++, h = "neutral") : d.conclusion === "SKIPPED" ? (o++, h = "skipped") : d.conclusion === "FAILURE" || d.conclusion === "TIMED_OUT" || d.conclusion === "CANCELLED" || d.conclusion === "ACTION_REQUIRED" ? (i++, h = "failure") : (r++, h = "pending") : (r++, h = "pending");
            const p = [];
            if (d.annotations?.nodes) for (const g of d.annotations.nodes)p.push({
                path: g.path,
                startLine: g.location?.start?.line ?? 0,
                endLine: g.location?.end?.line ?? 0,
                level: g.annotationLevel,
                message: g.message,
                title: g.title || void 0
            });
            a.push({
                name: d.name,
                status: h,
                detailsUrl: d.detailsUrl || void 0,
                summary: d.summary || void 0,
                text: d.text || void 0,
                annotations: p.length > 0 ? p : void 0,
                databaseId: d.databaseId
            });
        } else if (d.__typename === "StatusContext") {
            let h;
            switch(d.state){
                case "SUCCESS":
                    n++, h = "success";
                    break;
                case "FAILURE":
                case "ERROR":
                    i++, h = "failure";
                    break;
                case "PENDING":
                default:
                    r++, h = "pending";
                    break;
            }
            a.push({
                name: d.context,
                status: h,
                detailsUrl: d.targetUrl || void 0,
                description: d.description || void 0
            });
        }
        const l = n + i + r + s + o;
        let c;
        l === 0 ? c = "unknown" : i > 0 ? c = "failure" : r > 0 ? c = "pending" : c = "success";
        const u = Q0k(t, e);
        return {
            overallStatus: c,
            successCount: n,
            failureCount: i,
            pendingCount: r,
            neutralCount: s,
            skippedCount: o,
            totalCount: l,
            previewLinks: u,
            checks: a
        };
    }
    processMergeInfo(t) {
        const e = t.mergeable === "MERGEABLE" && t.mergeStateStatus !== "BLOCKED" && t.state.toUpperCase() === "OPEN", n = t;
        return {
            id: t.id,
            mergeable: t.mergeable,
            mergeStateStatus: t.mergeStateStatus,
            canMerge: e,
            viewerCanEnableAutoMerge: n.viewerCanEnableAutoMerge ?? !1,
            autoMergeEnabled: n.autoMergeRequest != null
        };
    }
    processReviewThreads(t) {
        return t.filter((e)=>e.path).map((e)=>({
                id: e.id,
                path: e.path,
                line: e.line,
                startLine: e.startLine,
                originalLine: e.originalLine,
                originalStartLine: e.originalStartLine,
                diffSide: e.diffSide,
                isResolved: e.isResolved,
                isOutdated: e.isOutdated,
                comments: e.comments.nodes.map((n)=>({
                        id: n.id,
                        body: n.body,
                        diffHunk: n.diffHunk ?? void 0,
                        authorLogin: n.author?.login || "unknown",
                        avatarUrl: n.author?.avatarUrl,
                        createdAt: n.createdAt,
                        updatedAt: n.updatedAt
                    }))
            }));
    }
    processTopLevelComments(t) {
        return t.map((e)=>({
                id: e.id,
                body: e.body,
                authorLogin: e.author?.login || "unknown",
                avatarUrl: e.author?.avatarUrl,
                createdAt: e.createdAt,
                updatedAt: e.updatedAt
            }));
    }
    async getGitHubAccessToken() {
        try {
            const t = await this.authenticationService.getSessions(Bat, YIi, void 0, !0);
            if (t.length > 0) return this.structuredLogService.debug("github_auth", "Access token retrieved successfully", {
                sessionCount: t.length
            }), t[0].accessToken;
            this.structuredLogService.debug("github_auth", "No existing session found - user needs to connect");
            return;
        } catch (t) {
            this.structuredLogService.error("github_auth", "Failed to get access token", t, {
                providerId: Bat
            }), this.logService.error("[GithubPRService] Failed to get GitHub access token:", t);
            return;
        }
    }
    async triggerGitHubLogin() {
        this.structuredLogService.debug("github_auth", "Login flow triggered", {
            providerId: Bat,
            scopes: YIi
        });
        try {
            this.logService.info("[GithubPRService] Triggering GitHub login flow");
            const t = await this.authenticationService.createSession(Bat, YIi, {
                activateImmediate: !0
            });
            return t?.accessToken ? (this.structuredLogService.debug("github_auth", "Login successful", {
                providerId: Bat,
                hasToken: !0
            }), this.refreshCache(), !0) : (this.structuredLogService.warn("github_auth", "Login returned no token", {
                providerId: Bat,
                hasSession: !!t
            }), !1);
        } catch (t) {
            return Ya(t) ? (this.structuredLogService.debug("github_auth", "Login cancelled by user"), this.logService.info("[GithubPRService] GitHub login was cancelled")) : (this.structuredLogService.error("github_auth", "Login failed", t, {
                providerId: Bat
            }), this.logService.error("[GithubPRService] Failed to authenticate with GitHub:", t)), !1;
        }
    }
    async getMergeBase(t, e, n, i, r) {
        const s = await this.restRequestThroughRpc("GET", `/repos/${t}/${e}/compare/${n}...${i}`, r, {
            pathTemplate: "/repos/{owner}/{repo}/compare/{basehead}"
        });
        if (s.status < 200 || s.status >= 300) throw new Error(ils("GitHub Compare API", s));
        return JSON.parse(s.body).merge_base_commit.sha;
    }
    async graphqlRequest(t, e, n, i) {
        const r = i ?? this.extractQueryName(t), s = {
            query: t,
            variables: e,
            operationName: i
        };
        let o;
        if (this.githubRpcClient.isEnabled()) try {
            o = await this.githubRpcClient.request({
                method: "POST",
                path: "/graphql",
                body: s,
                caller: Hdl,
                pathTemplate: "/graphql",
                tokenOverride: n
            });
        } catch (l) {
            if (!(l instanceof tls) && !(l instanceof els)) throw l;
            o = await this.graphqlDirectFetch(s, n);
        }
        else o = await this.graphqlDirectFetch(s, n);
        if (this.logRateLimitInfoFromHeaders(o.headers, r), o.status < 200 || o.status >= 300) throw new Error(ils("GitHub API", o));
        const a = JSON.parse(o.body);
        if (a.errors && a.errors.length > 0) throw new Error(`GitHub GraphQL error: ${a.errors.map((l)=>l.message).join(", ")}`);
        return a.data;
    }
    async restRequestThroughRpc(t, e, n, i) {
        if (i.useRpc ?? this.githubRpcClient.isEnabled()) try {
            return await this.githubRpcClient.request({
                method: t,
                path: e,
                caller: Hdl,
                pathTemplate: i.pathTemplate,
                acceptHeader: i.accept,
                tokenOverride: n
            });
        } catch (s) {
            if (!(s instanceof tls) && !(s instanceof els)) throw s;
        }
        return this.restDirectFetch(t, e, n, i.accept);
    }
    async restDirectFetch(t, e, n, i) {
        const r = await fetch(`https://api.github.com${e}`, {
            method: t,
            headers: {
                Authorization: `Bearer ${n}`,
                Accept: i ?? "application/vnd.github.v3+json",
                "User-Agent": "Cursor-IDE"
            }
        }), s = await r.text(), o = {};
        return r.headers.forEach((a, l)=>{
            o[l.toLowerCase()] = a;
        }), {
            status: r.status,
            statusText: r.statusText,
            headers: o,
            body: s
        };
    }
    async graphqlDirectFetch(t, e) {
        const n = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${e}`,
                "Content-Type": "application/json",
                "User-Agent": "Cursor-IDE"
            },
            body: JSON.stringify(t)
        }), i = await n.text(), r = {};
        return n.headers.forEach((s, o)=>{
            r[o.toLowerCase()] = s;
        }), {
            status: n.status,
            statusText: n.statusText,
            headers: r,
            body: i
        };
    }
    logRateLimitInfoFromHeaders(t, e) {
        const n = t["x-ratelimit-used"], i = t["x-ratelimit-limit"], r = t["x-ratelimit-reset"], s = n ? parseInt(n, 10) : 0, o = i ? parseInt(i, 10) : 5e3, a = r ? parseInt(r, 10) : 0, l = Math.floor(Date.now() / 1e3), c = Math.max(0, a - l), u = Math.floor(c / 60), d = 3600, h = d - c;
        let p = "";
        if (h > 60 && s > 0) {
            const g = s / h, f = Math.round(g * d);
            f > o && (p = ` \u26A0\uFE0F PROJECTED: ${f} (${Math.round(f / o * 100)}% of limit)`);
        }
        this.logService.debug(`[GitHub API] ${e} - Used: ${s}/${o} | Resets in ${u}m${p}`);
    }
    extractQueryName(t) {
        return t.match(/(?:query|mutation)\s+(\w+)/)?.[1] ?? "UnknownQuery";
    }
    convertToUserPullRequest(t, e) {
        return new pTn({
            number: t.number,
            title: t.title,
            url: t.url,
            repository: t.repository?.nameWithOwner || e,
            isDraft: t.isDraft,
            description: t.bodyHTML || t.body || "",
            descriptionRaw: t.body || "",
            author: t.author?.login || "",
            headRef: t.headRefName,
            headSha: t.headRefOid || "",
            baseRef: t.baseRefName,
            state: t.state.toLowerCase(),
            mergedAt: t.mergedAt || void 0,
            closedAt: t.closedAt || void 0,
            createdAt: t.createdAt,
            updatedAt: t.updatedAt
        });
    }
    async hasGitHubConnection() {
        try {
            const t = await this.authenticationService.getSessions(Bat, YIi, void 0, !0), e = t.length > 0;
            return this.structuredLogService.debug("github_auth", "Connection check completed", {
                hasConnection: e,
                sessionCount: t.length
            }), e;
        } catch (t) {
            return this.structuredLogService.error("github_auth", "Connection check failed", t), !1;
        }
    }
    parsePrUrl(t) {
        try {
            const n = new URL(t).pathname.split("/").filter(Boolean);
            if (n.length >= 4 && n[2] === "pull") {
                const i = n[0], r = n[1], s = parseInt(n[3], 10);
                if (i && r && !isNaN(s)) return {
                    owner: i,
                    repo: r,
                    prNumber: s
                };
            }
        } catch (e) {
            this.logService.error("[GithubPRService] Failed to parse PR URL:", t, e);
        }
    }
    async getAllPRComments(t, e) {
        const n = {
            threads: [],
            hasMore: !1
        }, i = Yas(t);
        if (!i) return this.logService.warn("[GithubPRService] Invalid PR URL for comments:", t), n;
        const { owner: r, repo: s, prNumber: o } = i, a = await this.getGitHubAccessToken();
        if (!a) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching comments"), n;
        try {
            const l = [];
            let c = !0, u = e ?? null;
            for(; c;){
                const h = (await this.graphqlRequest(Byg, {
                    owner: r,
                    repo: s,
                    prNumber: o,
                    first: 100,
                    after: u
                }, a)).repository?.pullRequest;
                if (!h) return this.logService.warn("[GithubPRService] PR not found for comments:", t), n;
                const p = h.reviewThreads;
                l.push(...this.processReviewThreads(p.nodes)), c = p.pageInfo.hasNextPage, u = p.pageInfo.endCursor;
            }
            return {
                threads: l,
                hasMore: !1
            };
        } catch (l) {
            return console.error("[GithubPRService] Error fetching PR comments:", l), n;
        }
    }
    async getAllPRCheckContexts(t, e) {
        const n = Yas(t);
        if (!n) return this.logService.warn("[GithubPRService] Invalid PR URL for check contexts:", t), [];
        const { owner: i, repo: r, prNumber: s } = n, o = await this.getGitHubAccessToken();
        if (!o) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching check contexts"), [];
        try {
            const a = [];
            let l = !0, c = e ?? null;
            for(; l;){
                const d = (await this.graphqlRequest(Uyg, {
                    owner: i,
                    repo: r,
                    prNumber: s,
                    first: 100,
                    after: c
                }, o)).repository?.pullRequest;
                if (!d) return this.logService.warn("[GithubPRService] PR not found for check contexts:", t), [];
                const p = d.commits?.nodes?.[0]?.commit?.statusCheckRollup?.contexts;
                if (!p) return a;
                a.push(...p.nodes || []), l = p.pageInfo.hasNextPage, c = p.pageInfo.endCursor;
            }
            return a;
        } catch (a) {
            return console.error("[GithubPRService] Error fetching PR check contexts:", a), [];
        }
    }
    async resolveReviewThread(t) {
        const e = await this.getGitHubAccessToken();
        if (!e) return this.logService.warn("[GithubPRService] No GitHub access token available for resolving thread"), !1;
        try {
            return (await this.graphqlRequest(jyg, {
                threadId: t
            }, e)).resolveReviewThread?.thread?.isResolved === !0;
        } catch (n) {
            return console.error("[GithubPRService] Error resolving review thread:", n), !1;
        }
    }
    async addPullRequestReviewComment(t) {
        const { prUrl: e, path: n, body: i, line: r, startLine: s, side: o = "RIGHT" } = t, a = Yas(e);
        if (!a) {
            this.logService.warn("[GithubPRService] Invalid PR URL for adding comment:", e);
            return;
        }
        const { owner: l, repo: c, prNumber: u } = a, d = await this.getGitHubAccessToken();
        if (!d) {
            this.logService.warn("[GithubPRService] No GitHub access token available for adding review comment");
            return;
        }
        try {
            const p = await this.graphqlRequest(`
				query GetPRId($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							id
							headRefOid
						}
					}
				}
			`, {
                owner: l,
                repo: c,
                prNumber: u
            }, d, "GetPRId"), g = p.repository?.pullRequest?.id, f = p.repository?.pullRequest?.headRefOid;
            if (!g || !f) {
                this.logService.warn("[GithubPRService] Could not get PR ID or head SHA for adding comment");
                return;
            }
            const _ = {
                pullRequestId: g,
                commitOID: f,
                body: i,
                path: n,
                line: r,
                side: o
            };
            s !== void 0 && s !== r && (_.startLine = s, _.startSide = o);
            const y = (await this.graphqlRequest($yg, _, d, "AddPullRequestReviewComment")).addPullRequestReview?.pullRequestReview?.pullRequest?.reviewThreads?.nodes, S = y?.[y.length - 1];
            if (!S) {
                this.logService.warn("[GithubPRService] No thread returned from add comment mutation");
                return;
            }
            const k = {
                id: S.id,
                path: S.path,
                line: S.line,
                startLine: S.startLine,
                originalLine: S.line,
                originalStartLine: S.startLine,
                diffSide: S.diffSide,
                isResolved: S.isResolved,
                isOutdated: S.isOutdated,
                comments: S.comments.nodes.map((T)=>({
                        id: T.id,
                        body: T.body,
                        authorLogin: T.author?.login ?? "unknown",
                        avatarUrl: T.author?.avatarUrl,
                        createdAt: T.createdAt,
                        updatedAt: T.updatedAt
                    }))
            }, C = this.getPRCacheEntry(e);
            if (C) {
                const T = [
                    ...C.comments || [],
                    k
                ];
                this.updatePRCacheEntry(e, {
                    comments: T
                });
            }
            return k;
        } catch (h) {
            throw console.error("[GithubPRService] Error adding review comment:", h), h;
        }
    }
    async replyToReviewThread(t) {
        const { prUrl: e, threadId: n, body: i } = t, r = await this.getGitHubAccessToken();
        if (!r) {
            this.logService.warn("[GithubPRService] No GitHub access token available for replying to thread");
            return;
        }
        try {
            const o = (await this.graphqlRequest(Hyg, {
                threadId: n,
                body: i
            }, r, "ReplyToReviewThread")).addPullRequestReviewThreadReply?.comment;
            if (!o) {
                this.logService.warn("[GithubPRService] No comment returned from reply mutation");
                return;
            }
            const a = o.pullRequestReview?.pullRequest?.reviewThreads?.nodes ?? [], l = a.find((h)=>h.id === n);
            if (!l) {
                this.logService.warn("[GithubPRService] Could not find updated thread in response");
                return;
            }
            const c = this.getPRCacheEntry(e), u = c?.comments?.find((h)=>h.id === l.id), d = {
                id: l.id,
                path: l.path,
                line: l.line,
                startLine: l.startLine,
                originalLine: u?.originalLine ?? l.line,
                originalStartLine: u?.originalStartLine ?? l.startLine,
                diffSide: l.diffSide,
                isResolved: l.isResolved,
                isOutdated: l.isOutdated,
                comments: l.comments.nodes.map((h)=>({
                        id: h.id,
                        body: h.body,
                        authorLogin: h.author?.login ?? "unknown",
                        avatarUrl: h.author?.avatarUrl,
                        createdAt: h.createdAt,
                        updatedAt: h.updatedAt
                    }))
            };
            if (c) {
                const h = new Map((c.comments ?? []).map((g)=>[
                        g.id,
                        g
                    ])), p = a.map((g)=>{
                    const f = h.get(g.id);
                    return {
                        id: g.id,
                        path: g.path,
                        line: g.line,
                        startLine: g.startLine,
                        originalLine: f?.originalLine ?? g.line,
                        originalStartLine: f?.originalStartLine ?? g.startLine,
                        diffSide: g.diffSide,
                        isResolved: g.isResolved,
                        isOutdated: g.isOutdated,
                        comments: g.comments.nodes.map((_)=>({
                                id: _.id,
                                body: _.body,
                                authorLogin: _.author?.login ?? "unknown",
                                avatarUrl: _.author?.avatarUrl,
                                createdAt: _.createdAt,
                                updatedAt: _.updatedAt
                            }))
                    };
                });
                this.updatePRCacheEntry(e, {
                    comments: p
                });
            }
            return d;
        } catch (s) {
            console.error("[GithubPRService] Error replying to review thread:", s);
            return;
        }
    }
    async getPullRequestFiles(t) {
        const e = this.getPRCacheEntry(t);
        return e?.filesData ? e.filesData : this._fetchPullRequestFiles(t);
    }
    async _fetchPullRequestFiles(t) {
        const e = this.getPRCacheEntry(t), n = performance.now(), i = {
            files: [],
            baseSha: "",
            headSha: ""
        }, r = Yas(t);
        if (!r) return this.logService.warn("[GithubPRService] Invalid PR URL for files:", t), i;
        const { owner: s, repo: o, prNumber: a } = r, l = await this.getGitHubAccessToken();
        if (!l) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching PR files"), i;
        try {
            const c = performance.now(), h = (await this.graphqlRequest(`
				query GetPRShas($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							baseRefOid
							headRefOid
						}
					}
				}
			`, {
                owner: s,
                repo: o,
                prNumber: a
            }, l, "GetPRShas")).repository?.pullRequest;
            if (!h) throw new Error(`PR #${a} not found`);
            const p = h.headRefOid, g = await this.getMergeBase(s, o, h.baseRefOid, p, l);
            g !== h.baseRefOid && console.debug(`[PR Diff API] Using merge base ${g.slice(0, 7)} instead of baseRefOid ${h.baseRefOid.slice(0, 7)}`);
            const f = await this.getPullRequestFilesREST(s, o, a, l);
            if (console.debug(`[PR Diff API] Fetch PR info + file list (${f.length} files): ${(performance.now() - c).toFixed(0)}ms (1 GraphQL + REST API)`), f.length === 0) {
                const A = (performance.now() - n).toFixed(0);
                return console.debug(`[PR Diff API] Total: ${A}ms for 0 files (1 GraphQL query, no content fetch needed)`), {
                    files: [],
                    baseSha: g,
                    headSha: p
                };
            }
            const _ = performance.now(), b = [], y = new Map;
            for(let A = 0; A < f.length; A++){
                const P = f[A], M = this.mapRESTStatus(P.status), O = `f_${A}`, N = P.previous_filename;
                if (y.set(P.filename, {
                    path: P.filename,
                    previousPath: N,
                    status: M,
                    alias: O
                }), M !== "added") {
                    const U = N ?? P.filename;
                    b.push(`
						${O}_base: object(expression: "${g}:${U}") {
							... on Blob { text isBinary }
						}
					`);
                }
                M !== "deleted" && b.push(`
						${O}_head: object(expression: "${p}:${P.filename}") {
							... on Blob { text isBinary }
						}
					`);
            }
            const S = `
				query GetFileContents($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						${b.join(`
`)}
					}
				}
			`, k = await this.graphqlRequest(S, {
                owner: s,
                repo: o
            }, l, "GetFileContents");
            console.debug(`[PR Diff API] Fetch file contents (${b.length} blobs in 1 query): ${(performance.now() - _).toFixed(0)}ms`);
            const C = [];
            for (const [A, { previousPath: P, status: M, alias: O }] of y){
                const N = k.repository[`${O}_base`], U = k.repository[`${O}_head`];
                if (N?.isBinary || U?.isBinary) continue;
                const j = N?.text ?? void 0, $ = U?.text ?? void 0;
                C.push({
                    filename: A,
                    previousFilename: P,
                    status: M,
                    originalContents: j,
                    modifiedContents: $
                });
            }
            const T = (performance.now() - n).toFixed(0);
            console.debug(`[PR Diff API] Total: ${T}ms for ${C.length} files (2 GraphQL + 1 REST API queries)`);
            const I = {
                files: C,
                baseSha: g,
                headSha: p
            };
            return this.updatePRCacheEntry(t, {
                filesData: I
            }), I;
        } catch (c) {
            return console.error("[GithubPRService] Error fetching PR files:", c), e?.filesData ?? i;
        }
    }
    mapRESTStatus(t) {
        switch(t.toLowerCase()){
            case "added":
                return "added";
            case "removed":
                return "deleted";
            case "renamed":
                return "renamed";
            case "modified":
            case "changed":
            default:
                return "modified";
        }
    }
    async getPullRequestFilesREST(t, e, n, i) {
        const r = [];
        let s = 1;
        const o = 100, a = this.githubRpcClient.isEnabled();
        for(;;){
            const l = await this.restRequestThroughRpc("GET", `/repos/${t}/${e}/pulls/${n}/files?per_page=${o}&page=${s}`, i, {
                pathTemplate: "/repos/{owner}/{repo}/pulls/{pull_number}/files",
                useRpc: a
            });
            if (l.status < 200 || l.status >= 300) throw new Error(ils("GitHub REST API", l));
            const c = JSON.parse(l.body);
            if (r.push(...c), c.length < o) break;
            s++;
        }
        return r;
    }
    async getCurrentUserLogin() {
        if (this.cachedCurrentUserLogin) return this.cachedCurrentUserLogin;
        const t = await this.getGitHubAccessToken();
        if (!t) {
            this.logService.warn("[GithubPRService] No GitHub access token available for fetching current user");
            return;
        }
        try {
            const e = await this.graphqlRequest(Gyg, {}, t);
            return this.cachedCurrentUserLogin = e.viewer.login, this.cachedCurrentUserLogin;
        } catch (e) {
            console.error("[GithubPRService] Error fetching current user:", e);
            return;
        }
    }
    async getCommitAuthorAvatar(t) {
        const e = this.commitAvatarCache.get(t);
        if (e !== void 0) return e ?? void 0;
        const n = await this.getGitHubAccessToken();
        if (n) try {
            const i = await this.gitContextService.getGitUpstreamURL();
            if (!i || !i.includes("github.com")) return;
            const r = i.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
            if (!r) return;
            const [, s, o] = r, c = (await this.graphqlRequest(`
				query GetCommitAuthor($owner: String!, $repo: String!, $sha: GitObjectID!) {
					repository(owner: $owner, name: $repo) {
						object(oid: $sha) {
							... on Commit {
								author {
									user {
										login
										avatarUrl(size: 64)
									}
								}
							}
						}
					}
				}
			`, {
                owner: s,
                repo: o,
                sha: t
            }, n)).repository.object?.author?.user;
            if (c?.avatarUrl) return this.commitAvatarCache.set(t, c.avatarUrl), c.avatarUrl;
            this.commitAvatarCache.set(t, null);
            return;
        } catch (i) {
            console.warn("[GithubPRService] Error fetching commit author avatar:", i), this.commitAvatarCache.set(t, null);
            return;
        }
    }
    async getJobStepInfo(t, e, n, i) {
        const r = await this.getGitHubAccessToken();
        if (r) try {
            const s = await this.restRequestThroughRpc("GET", `/repos/${t}/${e}/actions/jobs/${n}`, r, {
                pathTemplate: "/repos/{owner}/{repo}/actions/jobs/{job_id}"
            });
            if (s.status < 200 || s.status >= 300) return;
            const o = JSON.parse(s.body), a = [];
            if (a.push(`Job: ${o.name}`), a.push(`Status: ${o.conclusion || "unknown"}`), a.push(""), a.push("Steps:"), o.steps && o.steps.length > 0) for (const _ of o.steps){
                const b = _.conclusion === "success" ? "\u2713" : _.conclusion === "failure" ? "\u2717" : _.conclusion === "skipped" ? "\u25CB" : "?";
                a.push(`  ${b} ${_.name} (${_.conclusion || _.status})`);
            }
            else a.push("  No step information available");
            a.push(""), a.push("Note: Full logs not available (runner may have lost connection)");
            const l = a.join(`
`), c = this.workspaceContextService.getWorkspace();
            if (!c.folders || c.folders.length === 0) return {
                preview: l,
                logsPath: ""
            };
            const u = await wX(c, this.pathService), d = mtl(u), h = rt.joinPath(d, `pr-${i}`), p = rt.joinPath(h, "checks");
            await this.fileService.createFolder(p);
            const g = `job-${n}-steps.log`, f = rt.joinPath(p, g);
            return await this.fileService.writeFile(f, Tr.fromString(l)), {
                preview: l,
                logsPath: f.fsPath
            };
        } catch (s) {
            console.error("[GithubPRService] Error fetching job step info:", s);
            return;
        }
    }
    async mergePullRequest(t) {
        const { prNodeId: e, prUrl: n, mergeMethod: i = "SQUASH" } = t, r = await this.getGitHubAccessToken();
        if (!r) throw this.logService.warn("[GithubPRService] No GitHub access token available for merging PR"), new Error("No GitHub access token available");
        const o = (await this.graphqlRequest(qyg, {
            pullRequestId: e,
            mergeMethod: i
        }, r)).mergePullRequest?.pullRequest?.merged === !0;
        if (o) {
            const a = this.getPRCacheEntry(n);
            if (a?.pullRequest) {
                const l = a.pullRequest, c = new pTn({
                    number: l.number,
                    title: l.title,
                    url: l.url,
                    repository: l.repository,
                    isDraft: l.isDraft,
                    description: l.description,
                    descriptionRaw: l.descriptionRaw,
                    author: l.author,
                    headRef: l.headRef,
                    headSha: l.headSha,
                    baseRef: l.baseRef,
                    state: "merged",
                    mergedAt: new Date().toISOString(),
                    closedAt: l.closedAt,
                    createdAt: l.createdAt,
                    updatedAt: new Date().toISOString()
                });
                this.updatePRCacheEntry(n, {
                    pullRequest: c
                });
            }
        }
        return o;
    }
    async closePullRequest(t) {
        const { prNodeId: e, prUrl: n } = t, i = await this.getGitHubAccessToken();
        if (!i) throw this.logService.warn("[GithubPRService] No GitHub access token available for closing PR"), new Error("No GitHub access token available");
        const s = (await this.graphqlRequest(zyg, {
            pullRequestId: e
        }, i)).closePullRequest?.pullRequest?.closed === !0;
        if (s) {
            const o = this.getPRCacheEntry(n);
            if (o?.pullRequest) {
                const a = o.pullRequest, l = new pTn({
                    number: a.number,
                    title: a.title,
                    url: a.url,
                    repository: a.repository,
                    isDraft: a.isDraft,
                    description: a.description,
                    descriptionRaw: a.descriptionRaw,
                    author: a.author,
                    headRef: a.headRef,
                    headSha: a.headSha,
                    baseRef: a.baseRef,
                    state: "closed",
                    mergedAt: a.mergedAt,
                    closedAt: new Date().toISOString(),
                    createdAt: a.createdAt,
                    updatedAt: new Date().toISOString()
                });
                this.updatePRCacheEntry(n, {
                    pullRequest: l
                });
            }
        }
        return s;
    }
    async enableAutoMerge(t) {
        const { prNodeId: e, prUrl: n, mergeMethod: i = "SQUASH" } = t, r = await this.getGitHubAccessToken();
        if (!r) throw this.logService.warn("[GithubPRService] No GitHub access token available for enabling auto-merge"), new Error("No GitHub access token available");
        const o = (await this.graphqlRequest(Vyg, {
            pullRequestId: e,
            mergeMethod: i
        }, r)).enablePullRequestAutoMerge?.pullRequest?.autoMergeRequest != null;
        if (o) {
            const l = this.getPRCacheEntry(n)?.mergeInfo, c = {
                id: l?.id ?? e,
                mergeable: l?.mergeable ?? "UNKNOWN",
                mergeStateStatus: l?.mergeStateStatus ?? "UNKNOWN",
                canMerge: l?.canMerge ?? !1,
                autoMergeEnabled: !0,
                viewerCanEnableAutoMerge: !1
            };
            this.updatePRCacheEntry(n, {
                mergeInfo: c
            });
        }
        return o;
    }
    async disableAutoMerge(t) {
        const { prNodeId: e, prUrl: n } = t, i = await this.getGitHubAccessToken();
        if (!i) throw this.logService.warn("[GithubPRService] No GitHub access token available for disabling auto-merge"), new Error("No GitHub access token available");
        const s = (await this.graphqlRequest(Kyg, {
            pullRequestId: e
        }, i)).disablePullRequestAutoMerge?.pullRequest, o = s != null && s.autoMergeRequest === null;
        if (o) {
            const l = this.getPRCacheEntry(n)?.mergeInfo, c = {
                id: l?.id ?? e,
                mergeable: l?.mergeable ?? "UNKNOWN",
                mergeStateStatus: l?.mergeStateStatus ?? "UNKNOWN",
                canMerge: l?.canMerge ?? !1,
                autoMergeEnabled: !1,
                viewerCanEnableAutoMerge: l?.viewerCanEnableAutoMerge ?? !1
            };
            this.updatePRCacheEntry(n, {
                mergeInfo: c
            });
        }
        return o;
    }
    async getJobLogs(t, e, n, i) {
        const r = Y0k(t);
        if (!r) {
            this.logService.warn("[GithubPRService] Could not parse job URL:", t);
            return;
        }
        const { owner: s, repo: o } = r, a = n ?? r.jobId, l = await this.getGitHubAccessToken();
        if (!l) {
            this.logService.warn("[GithubPRService] No GitHub access token available for fetching job logs");
            return;
        }
        try {
            const c = await this.restRequestThroughRpc("GET", `/repos/${s}/${o}/actions/jobs/${a}/logs`, l, {
                pathTemplate: "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
            });
            if (c.status < 200 || c.status >= 300) {
                if (c.status === 404) return this.getJobStepInfo(s, o, a, e);
                throw new Error(ils("GitHub REST API", c));
            }
            const u = c.body, d = X0k(u), h = this.workspaceContextService.getWorkspace();
            if (!h.folders || h.folders.length === 0) {
                this.logService.warn("[GithubPRService] No workspace folder available for writing logs");
                return;
            }
            const p = await wX(h, this.pathService), g = mtl(p), f = rt.joinPath(g, `pr-${e}`), _ = rt.joinPath(f, "checks");
            await this.fileService.createFolder(_);
            const b = i?.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, ""), y = b && b.length > 0 ? `${b}.log` : `job-${a}.log`, S = rt.joinPath(_, y);
            await this.fileService.writeFile(S, Tr.fromString(d));
            const k = 5e4;
            let C;
            if (d.length > k) {
                const T = d.length - k;
                let I = d.slice(T);
                const A = I.indexOf(`
`);
                if (A > 0 && (I = I.slice(A + 1)), !I.split(`
`)[0].startsWith("\u25B6 ")) {
                    const M = d.slice(0, T), O = M.lastIndexOf(`
\u25B6 `);
                    if (O !== -1) {
                        const N = O + 1, U = M.indexOf(`
`, N);
                        I = `${U !== -1 ? M.slice(N, U) : M.slice(N)}
  ... (truncated) ...
${I}`;
                    }
                }
                C = `... (showing last ~${k} chars, full logs at ${S.fsPath}) ...

${I}`;
            } else C = d;
            return {
                preview: C,
                logsPath: S.fsPath
            };
        } catch (c) {
            console.error("[GithubPRService] Error fetching job logs:", c);
            return;
        }
    }
    refreshCache() {
        this.cachedCurrentUserLogin = void 0;
    }
}, rls = Re([
    F(0, Jv),
    F(1, Ple),
    F(2, Li),
    F(3, is),
    F(4, yr),
    F(5, Rd),
    F(6, wh),
    F(7, jdl)
], rls), bn(zAn, rls, 1);

}
