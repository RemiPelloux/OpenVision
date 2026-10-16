import { Fo, Se, ja, si, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cq, Jde } from "./authentication.js";
import { Wr_ } from "./ciParsingUtils.js";
import { Jh, aHt } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { ber, bxo, qMh, yer } from "./githubRpcClient.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { qa } from "./observable.js";
import { fu, zl } from "./pathService.js";
import { Xo, mn, vn } from "./qIc.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { $$, qbo } from "./xmo.js";
function $r_(e) {
    try {
        const n = new URL(e).pathname.split("/").filter((i)=>i);
        if (n.length >= 7 && n[2] === "actions" && n[3] === "runs" && (n[5] === "jobs" || n[5] === "job")) {
            const i = n[0], r = n[1], s = parseInt(n[4], 10), o = parseInt(n[6], 10);
            if (i && r && !isNaN(o)) return {
                owner: i,
                repo: r,
                jobId: o,
                runId: isNaN(s) ? void 0 : s
            };
        }
        if (n.length >= 4 && n[2] === "runs") {
            const i = n[0], r = n[1], s = parseInt(n[3], 10);
            if (i && r && !isNaN(s)) return {
                owner: i,
                repo: r,
                jobId: s
            };
        }
    } catch  {}
}
function mer(e) {
    try {
        const n = new URL(e).pathname.split("/").filter(Boolean);
        if (n.length >= 4 && n[2] === "pull") {
            const i = n[0], r = n[1], s = parseInt(n[3], 10);
            if (i && r && !isNaN(s)) return {
                owner: i,
                repo: r,
                prNumber: s
            };
        }
    } catch  {}
}
function Hr_(e) {
    return e.replace(/\x1b\[[0-9;]*m/g, "").replace(/\[[\d;]*m/g, "").replace(/##\[error\]/g, "\u274C ERROR:").replace(/##\[warning\]/g, "\u26A0\uFE0F WARNING:").replace(/##\[notice\]/g, "\u2139\uFE0F NOTICE:").replace(/##\[group\]/g, "\u25B6 ").replace(/##\[endgroup\]/g, "").replace(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z\s*/gm, "").replace(/\n{3,}/g, `

`).trim();
}
function ker(e, t) {
    return t.statusText !== "" ? `${e} error: ${t.status} ${t.statusText}` : `${e} error: ${t.status}`;
}
function zMh(e) {
    return aPh.some((t)=>t.test(e)) ? !1 : oPh.some((t)=>t.test(e));
}
function yxo(e, t) {
    return /\.vercel\.app/i.test(t) ? "Vercel Preview" : /\.netlify\.(app|com)/i.test(t) ? "Netlify Preview" : /\.railway\.app/i.test(t) || /\.up\.railway\.app/i.test(t) ? "Railway Preview" : /\.onrender\.com/i.test(t) ? "Render Preview" : /\.herokuapp\.com/i.test(t) ? "Heroku Preview" : /\.amplifyapp\.com/i.test(t) ? "Amplify Preview" : /\.pages\.dev/i.test(t) || /\.workers\.dev/i.test(t) ? "Cloudflare Preview" : /\.surge\.sh/i.test(t) ? "Surge Preview" : /\.fly\.dev/i.test(t) ? "Fly.io Preview" : /\.deno\.dev/i.test(t) ? "Deno Preview" : e.replace(/[-_]/g, " ").trim() || "Preview";
}
function Gr_(e, t) {
    const n = [];
    for (const s of e)s.__typename === "CheckRun" ? s.detailsUrl && zMh(s.detailsUrl) && n.push({
        name: yxo(s.name, s.detailsUrl),
        url: s.detailsUrl
    }) : s.__typename === "StatusContext" && s.targetUrl && zMh(s.targetUrl) && n.push({
        name: yxo(s.context, s.targetUrl),
        url: s.targetUrl
    });
    console.debug("[GithubPRService] Deployments received:", t.length);
    for (const s of t){
        const o = s.latestStatus?.environmentUrl;
        if (o) {
            const a = yxo(s.environment, o);
            n.push({
                name: a,
                url: o
            });
        }
    }
    const i = [], r = new Set;
    for (const s of n)r.has(s.url) || (r.add(s.url), i.push(s));
    return i;
}
var Sxo, Yjt, KMh, YMh, XMh, ZMh, QMh, JMh, ePh, tPh, nPh, iPh, rPh, sPh, oPh, aPh, _Bn, I8e, wer;
export { $r_, Gr_, Hr_, I8e, JMh, KMh, QMh, Sxo, XMh, YMh, Yjt, ZMh, _Bn, aPh, ePh, iPh, ker, mer, nPh, oPh, rPh, sPh, tPh, wer, yxo, zMh };
var __wakaru_Cer_initialized = false;
export function Cer() {
if (__wakaru_Cer_initialized) return;
__wakaru_Cer_initialized = true;
"use strict";
x(), Ml(), Jh(), Fo(), si(), Se(), qa(), Qt(), Fi(), Pn(), Ze(), Qn(), im(), ci(), Wr_(), qMh(), Jde(), fu(), NR(), r0(), Sxo = "ide-pr-service", Yjt = vn("githubPRService"), KMh = `
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
`, YMh = `
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
`, XMh = `
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
`, ZMh = `
mutation ResolveReviewThread($threadId: ID!) {
  resolveReviewThread(input: { threadId: $threadId }) {
    thread {
      id
      isResolved
    }
  }
}
`, QMh = `
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
`, JMh = `
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
`, ePh = `
${KMh}
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
`, tPh = `
query GetCurrentUser {
  viewer {
    login
  }
}
`, nPh = `
mutation MergePullRequest($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
  mergePullRequest(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
    pullRequest {
      merged
    }
  }
}
`, iPh = `
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
`, rPh = `
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
`, sPh = `
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
`, oPh = [
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
], aPh = [
    /vercel\.com\/integrations/i,
    /vercel\.com\/docs/i,
    /vercel\.com\/.*\/settings/i,
    /netlify\.com\/docs/i,
    /github\.com/i,
    /docs\./i
], _Bn = [
    "repo"
], I8e = "github", wer = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this.gitContextService = e, this.authenticationService = t, this.logService = n, this.fileService = i, this.workspaceContextService = r, this.pathService = s, this.structuredLogService = o, this.githubRpcClient = a, this._prDetailCache = Xo("githubPR.prDetailCache", {}), this.prDetailCache = this._prDetailCache, this.commitAvatarCache = new Map;
    }
    updatePRCacheEntry(e, t) {
        const n = this._prDetailCache.get(), i = n[e], s = {
            ...{
                prUrl: e,
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
            ...t,
            prUrl: e,
            lastUpdatedAt: Date.now()
        };
        this._prDetailCache.set({
            ...n,
            [e]: s
        }, void 0);
    }
    getPRCacheEntry(e) {
        return this._prDetailCache.get()[e];
    }
    async getOrFetchPRDetails(e, t = !1) {
        const n = this.getPRCacheEntry(e);
        if (n?.hasFetched && !t) return n;
        const i = this.parsePrUrl(e);
        if (!i) throw new Error(`Invalid PR URL: ${e}`);
        const { owner: r, repo: s, prNumber: o } = i, a = await this.getGitHubAccessToken();
        if (!a) throw new Error("No GitHub access token available");
        this.updatePRCacheEntry(e, {
            isCheckStatusLoading: !0,
            isCommentsLoading: !0,
            isMergeInfoLoading: !0
        });
        try {
            const l = (await this.graphqlRequest(ePh, {
                owner: r,
                repo: s,
                prNumber: o
            }, a)).repository?.pullRequest;
            if (!l) throw new Error(`PR not found: ${e}`);
            const u = this.convertToUserPullRequest(l, `${r}/${s}`), h = l.commits?.nodes?.[0]?.commit, p = h?.statusCheckRollup, g = h?.deployments?.nodes || [];
            let f = p?.contexts?.nodes || [];
            const v = p?.contexts?.pageInfo;
            if (v?.hasNextPage) {
                const A = await this.getAllPRCheckContexts(e, v.endCursor);
                f = [
                    ...f,
                    ...A
                ];
            }
            const b = this.processCheckStatusFromContextsAndDeployments(f, g), y = this.processMergeInfo(l);
            let T = this.processReviewThreads(l.reviewThreads?.nodes || []);
            if (l.reviewThreads?.pageInfo?.hasNextPage) {
                const A = await this.getAllPRComments(e, l.reviewThreads.pageInfo.endCursor);
                T = [
                    ...T,
                    ...A.threads
                ];
            }
            const E = this.processTopLevelComments(l.comments?.nodes || []);
            return this.updatePRCacheEntry(e, {
                pullRequest: u,
                checkStatus: b,
                isCheckStatusLoading: !1,
                comments: T,
                topLevelComments: E,
                isCommentsLoading: !1,
                mergeInfo: y,
                isMergeInfoLoading: !1,
                hasFetched: !0
            }), this.getPRCacheEntry(e);
        } catch (c) {
            throw this.updatePRCacheEntry(e, {
                isCheckStatusLoading: !1,
                isCommentsLoading: !1,
                isMergeInfoLoading: !1
            }), c;
        }
    }
    processCheckStatusFromContextsAndDeployments(e, t) {
        let n = 0, i = 0, r = 0, s = 0, o = 0;
        const a = [];
        for (const h of e)if (h.__typename === "CheckRun") {
            let p;
            h.status === "COMPLETED" ? h.conclusion === "SUCCESS" ? (n++, p = "success") : h.conclusion === "NEUTRAL" ? (s++, p = "neutral") : h.conclusion === "SKIPPED" ? (o++, p = "skipped") : h.conclusion === "FAILURE" || h.conclusion === "TIMED_OUT" || h.conclusion === "CANCELLED" || h.conclusion === "ACTION_REQUIRED" ? (i++, p = "failure") : (r++, p = "pending") : (r++, p = "pending");
            const g = [];
            if (h.annotations?.nodes) for (const f of h.annotations.nodes)g.push({
                path: f.path,
                startLine: f.location?.start?.line ?? 0,
                endLine: f.location?.end?.line ?? 0,
                level: f.annotationLevel,
                message: f.message,
                title: f.title || void 0
            });
            a.push({
                name: h.name,
                status: p,
                detailsUrl: h.detailsUrl || void 0,
                summary: h.summary || void 0,
                text: h.text || void 0,
                annotations: g.length > 0 ? g : void 0,
                databaseId: h.databaseId
            });
        } else if (h.__typename === "StatusContext") {
            let p;
            switch(h.state){
                case "SUCCESS":
                    n++, p = "success";
                    break;
                case "FAILURE":
                case "ERROR":
                    i++, p = "failure";
                    break;
                case "PENDING":
                default:
                    r++, p = "pending";
                    break;
            }
            a.push({
                name: h.context,
                status: p,
                detailsUrl: h.targetUrl || void 0,
                description: h.description || void 0
            });
        }
        const c = n + i + r + s + o;
        let l;
        c === 0 ? l = "unknown" : i > 0 ? l = "failure" : r > 0 ? l = "pending" : l = "success";
        const u = Gr_(e, t);
        return {
            overallStatus: l,
            successCount: n,
            failureCount: i,
            pendingCount: r,
            neutralCount: s,
            skippedCount: o,
            totalCount: c,
            previewLinks: u,
            checks: a
        };
    }
    processMergeInfo(e) {
        const t = e.mergeable === "MERGEABLE" && e.mergeStateStatus !== "BLOCKED" && e.state.toUpperCase() === "OPEN", n = e;
        return {
            id: e.id,
            mergeable: e.mergeable,
            mergeStateStatus: e.mergeStateStatus,
            canMerge: t,
            viewerCanEnableAutoMerge: n.viewerCanEnableAutoMerge ?? !1,
            autoMergeEnabled: n.autoMergeRequest != null
        };
    }
    processReviewThreads(e) {
        return e.filter((t)=>t.path).map((t)=>({
                id: t.id,
                path: t.path,
                line: t.line,
                startLine: t.startLine,
                originalLine: t.originalLine,
                originalStartLine: t.originalStartLine,
                diffSide: t.diffSide,
                isResolved: t.isResolved,
                isOutdated: t.isOutdated,
                comments: t.comments.nodes.map((n)=>({
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
    processTopLevelComments(e) {
        return e.map((t)=>({
                id: t.id,
                body: t.body,
                authorLogin: t.author?.login || "unknown",
                avatarUrl: t.author?.avatarUrl,
                createdAt: t.createdAt,
                updatedAt: t.updatedAt
            }));
    }
    async getGitHubAccessToken() {
        try {
            const e = await this.authenticationService.getSessions(I8e, _Bn, void 0, !0);
            if (e.length > 0) return this.structuredLogService.debug("github_auth", "Access token retrieved successfully", {
                sessionCount: e.length
            }), e[0].accessToken;
            this.structuredLogService.debug("github_auth", "No existing session found - user needs to connect");
            return;
        } catch (e) {
            this.structuredLogService.error("github_auth", "Failed to get access token", e, {
                providerId: I8e
            }), this.logService.error("[GithubPRService] Failed to get GitHub access token:", e);
            return;
        }
    }
    async triggerGitHubLogin() {
        this.structuredLogService.debug("github_auth", "Login flow triggered", {
            providerId: I8e,
            scopes: _Bn
        });
        try {
            this.logService.info("[GithubPRService] Triggering GitHub login flow");
            const e = await this.authenticationService.createSession(I8e, _Bn, {
                activateImmediate: !0
            });
            return e?.accessToken ? (this.structuredLogService.debug("github_auth", "Login successful", {
                providerId: I8e,
                hasToken: !0
            }), this.refreshCache(), !0) : (this.structuredLogService.warn("github_auth", "Login returned no token", {
                providerId: I8e,
                hasSession: !!e
            }), !1);
        } catch (e) {
            return ja(e) ? (this.structuredLogService.debug("github_auth", "Login cancelled by user"), this.logService.info("[GithubPRService] GitHub login was cancelled")) : (this.structuredLogService.error("github_auth", "Login failed", e, {
                providerId: I8e
            }), this.logService.error("[GithubPRService] Failed to authenticate with GitHub:", e)), !1;
        }
    }
    async getMergeBase(e, t, n, i, r) {
        const s = await this.restRequestThroughRpc("GET", `/repos/${e}/${t}/compare/${n}...${i}`, r, {
            pathTemplate: "/repos/{owner}/{repo}/compare/{basehead}"
        });
        if (s.status < 200 || s.status >= 300) throw new Error(ker("GitHub Compare API", s));
        return JSON.parse(s.body).merge_base_commit.sha;
    }
    async graphqlRequest(e, t, n, i) {
        const r = i ?? this.extractQueryName(e), s = {
            query: e,
            variables: t,
            operationName: i
        };
        let o;
        if (this.githubRpcClient.isEnabled()) try {
            o = await this.githubRpcClient.request({
                method: "POST",
                path: "/graphql",
                body: s,
                caller: Sxo,
                pathTemplate: "/graphql",
                tokenOverride: n
            });
        } catch (c) {
            if (!(c instanceof yer) && !(c instanceof ber)) throw c;
            o = await this.graphqlDirectFetch(s, n);
        }
        else o = await this.graphqlDirectFetch(s, n);
        if (this.logRateLimitInfoFromHeaders(o.headers, r), o.status < 200 || o.status >= 300) throw new Error(ker("GitHub API", o));
        const a = JSON.parse(o.body);
        if (a.errors && a.errors.length > 0) throw new Error(`GitHub GraphQL error: ${a.errors.map((c)=>c.message).join(", ")}`);
        return a.data;
    }
    async restRequestThroughRpc(e, t, n, i) {
        if (i.useRpc ?? this.githubRpcClient.isEnabled()) try {
            return await this.githubRpcClient.request({
                method: e,
                path: t,
                caller: Sxo,
                pathTemplate: i.pathTemplate,
                acceptHeader: i.accept,
                tokenOverride: n
            });
        } catch (s) {
            if (!(s instanceof yer) && !(s instanceof ber)) throw s;
        }
        return this.restDirectFetch(e, t, n, i.accept);
    }
    async restDirectFetch(e, t, n, i) {
        const r = await fetch(`https://api.github.com${t}`, {
            method: e,
            headers: {
                Authorization: `Bearer ${n}`,
                Accept: i ?? "application/vnd.github.v3+json",
                "User-Agent": "Cursor-IDE"
            }
        }), s = await r.text(), o = {};
        return r.headers.forEach((a, c)=>{
            o[c.toLowerCase()] = a;
        }), {
            status: r.status,
            statusText: r.statusText,
            headers: o,
            body: s
        };
    }
    async graphqlDirectFetch(e, t) {
        const n = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${t}`,
                "Content-Type": "application/json",
                "User-Agent": "Cursor-IDE"
            },
            body: JSON.stringify(e)
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
    logRateLimitInfoFromHeaders(e, t) {
        const n = e["x-ratelimit-used"], i = e["x-ratelimit-limit"], r = e["x-ratelimit-reset"], s = n ? parseInt(n, 10) : 0, o = i ? parseInt(i, 10) : 5e3, a = r ? parseInt(r, 10) : 0, c = Math.floor(Date.now() / 1e3), l = Math.max(0, a - c), u = Math.floor(l / 60), h = 3600, p = h - l;
        let g = "";
        if (p > 60 && s > 0) {
            const f = s / p, v = Math.round(f * h);
            v > o && (g = ` \u26A0\uFE0F PROJECTED: ${v} (${Math.round(v / o * 100)}% of limit)`);
        }
        this.logService.debug(`[GitHub API] ${t} - Used: ${s}/${o} | Resets in ${u}m${g}`);
    }
    extractQueryName(e) {
        return e.match(/(?:query|mutation)\s+(\w+)/)?.[1] ?? "UnknownQuery";
    }
    convertToUserPullRequest(e, t) {
        return new aHt({
            number: e.number,
            title: e.title,
            url: e.url,
            repository: e.repository?.nameWithOwner || t,
            isDraft: e.isDraft,
            description: e.bodyHTML || e.body || "",
            descriptionRaw: e.body || "",
            author: e.author?.login || "",
            headRef: e.headRefName,
            headSha: e.headRefOid || "",
            baseRef: e.baseRefName,
            state: e.state.toLowerCase(),
            mergedAt: e.mergedAt || void 0,
            closedAt: e.closedAt || void 0,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt
        });
    }
    async hasGitHubConnection() {
        try {
            const e = await this.authenticationService.getSessions(I8e, _Bn, void 0, !0), t = e.length > 0;
            return this.structuredLogService.debug("github_auth", "Connection check completed", {
                hasConnection: t,
                sessionCount: e.length
            }), t;
        } catch (e) {
            return this.structuredLogService.error("github_auth", "Connection check failed", e), !1;
        }
    }
    parsePrUrl(e) {
        try {
            const n = new URL(e).pathname.split("/").filter(Boolean);
            if (n.length >= 4 && n[2] === "pull") {
                const i = n[0], r = n[1], s = parseInt(n[3], 10);
                if (i && r && !isNaN(s)) return {
                    owner: i,
                    repo: r,
                    prNumber: s
                };
            }
        } catch (t) {
            this.logService.error("[GithubPRService] Failed to parse PR URL:", e, t);
        }
    }
    async getAllPRComments(e, t) {
        const n = {
            threads: [],
            hasMore: !1
        }, i = mer(e);
        if (!i) return this.logService.warn("[GithubPRService] Invalid PR URL for comments:", e), n;
        const { owner: r, repo: s, prNumber: o } = i, a = await this.getGitHubAccessToken();
        if (!a) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching comments"), n;
        try {
            const c = [];
            let l = !0, u = t ?? null;
            for(; l;){
                const p = (await this.graphqlRequest(YMh, {
                    owner: r,
                    repo: s,
                    prNumber: o,
                    first: 100,
                    after: u
                }, a)).repository?.pullRequest;
                if (!p) return this.logService.warn("[GithubPRService] PR not found for comments:", e), n;
                const g = p.reviewThreads;
                c.push(...this.processReviewThreads(g.nodes)), l = g.pageInfo.hasNextPage, u = g.pageInfo.endCursor;
            }
            return {
                threads: c,
                hasMore: !1
            };
        } catch (c) {
            return console.error("[GithubPRService] Error fetching PR comments:", c), n;
        }
    }
    async getAllPRCheckContexts(e, t) {
        const n = mer(e);
        if (!n) return this.logService.warn("[GithubPRService] Invalid PR URL for check contexts:", e), [];
        const { owner: i, repo: r, prNumber: s } = n, o = await this.getGitHubAccessToken();
        if (!o) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching check contexts"), [];
        try {
            const a = [];
            let c = !0, l = t ?? null;
            for(; c;){
                const h = (await this.graphqlRequest(XMh, {
                    owner: i,
                    repo: r,
                    prNumber: s,
                    first: 100,
                    after: l
                }, o)).repository?.pullRequest;
                if (!h) return this.logService.warn("[GithubPRService] PR not found for check contexts:", e), [];
                const g = h.commits?.nodes?.[0]?.commit?.statusCheckRollup?.contexts;
                if (!g) return a;
                a.push(...g.nodes || []), c = g.pageInfo.hasNextPage, l = g.pageInfo.endCursor;
            }
            return a;
        } catch (a) {
            return console.error("[GithubPRService] Error fetching PR check contexts:", a), [];
        }
    }
    async resolveReviewThread(e) {
        const t = await this.getGitHubAccessToken();
        if (!t) return this.logService.warn("[GithubPRService] No GitHub access token available for resolving thread"), !1;
        try {
            return (await this.graphqlRequest(ZMh, {
                threadId: e
            }, t)).resolveReviewThread?.thread?.isResolved === !0;
        } catch (n) {
            return console.error("[GithubPRService] Error resolving review thread:", n), !1;
        }
    }
    async addPullRequestReviewComment(e) {
        const { prUrl: t, path: n, body: i, line: r, startLine: s, side: o = "RIGHT" } = e, a = mer(t);
        if (!a) {
            this.logService.warn("[GithubPRService] Invalid PR URL for adding comment:", t);
            return;
        }
        const { owner: c, repo: l, prNumber: u } = a, h = await this.getGitHubAccessToken();
        if (!h) {
            this.logService.warn("[GithubPRService] No GitHub access token available for adding review comment");
            return;
        }
        try {
            const g = await this.graphqlRequest(`
				query GetPRId($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							id
							headRefOid
						}
					}
				}
			`, {
                owner: c,
                repo: l,
                prNumber: u
            }, h, "GetPRId"), f = g.repository?.pullRequest?.id, v = g.repository?.pullRequest?.headRefOid;
            if (!f || !v) {
                this.logService.warn("[GithubPRService] Could not get PR ID or head SHA for adding comment");
                return;
            }
            const b = {
                pullRequestId: f,
                commitOID: v,
                body: i,
                path: n,
                line: r,
                side: o
            };
            s !== void 0 && s !== r && (b.startLine = s, b.startSide = o);
            const T = (await this.graphqlRequest(QMh, b, h, "AddPullRequestReviewComment")).addPullRequestReview?.pullRequestReview?.pullRequest?.reviewThreads?.nodes, E = T?.[T.length - 1];
            if (!E) {
                this.logService.warn("[GithubPRService] No thread returned from add comment mutation");
                return;
            }
            const A = {
                id: E.id,
                path: E.path,
                line: E.line,
                startLine: E.startLine,
                originalLine: E.line,
                originalStartLine: E.startLine,
                diffSide: E.diffSide,
                isResolved: E.isResolved,
                isOutdated: E.isOutdated,
                comments: E.comments.nodes.map((D)=>({
                        id: D.id,
                        body: D.body,
                        authorLogin: D.author?.login ?? "unknown",
                        avatarUrl: D.author?.avatarUrl,
                        createdAt: D.createdAt,
                        updatedAt: D.updatedAt
                    }))
            }, R = this.getPRCacheEntry(t);
            if (R) {
                const D = [
                    ...R.comments || [],
                    A
                ];
                this.updatePRCacheEntry(t, {
                    comments: D
                });
            }
            return A;
        } catch (p) {
            throw console.error("[GithubPRService] Error adding review comment:", p), p;
        }
    }
    async replyToReviewThread(e) {
        const { prUrl: t, threadId: n, body: i } = e, r = await this.getGitHubAccessToken();
        if (!r) {
            this.logService.warn("[GithubPRService] No GitHub access token available for replying to thread");
            return;
        }
        try {
            const o = (await this.graphqlRequest(JMh, {
                threadId: n,
                body: i
            }, r, "ReplyToReviewThread")).addPullRequestReviewThreadReply?.comment;
            if (!o) {
                this.logService.warn("[GithubPRService] No comment returned from reply mutation");
                return;
            }
            const a = o.pullRequestReview?.pullRequest?.reviewThreads?.nodes ?? [], c = a.find((p)=>p.id === n);
            if (!c) {
                this.logService.warn("[GithubPRService] Could not find updated thread in response");
                return;
            }
            const l = this.getPRCacheEntry(t), u = l?.comments?.find((p)=>p.id === c.id), h = {
                id: c.id,
                path: c.path,
                line: c.line,
                startLine: c.startLine,
                originalLine: u?.originalLine ?? c.line,
                originalStartLine: u?.originalStartLine ?? c.startLine,
                diffSide: c.diffSide,
                isResolved: c.isResolved,
                isOutdated: c.isOutdated,
                comments: c.comments.nodes.map((p)=>({
                        id: p.id,
                        body: p.body,
                        authorLogin: p.author?.login ?? "unknown",
                        avatarUrl: p.author?.avatarUrl,
                        createdAt: p.createdAt,
                        updatedAt: p.updatedAt
                    }))
            };
            if (l) {
                const p = new Map((l.comments ?? []).map((f)=>[
                        f.id,
                        f
                    ])), g = a.map((f)=>{
                    const v = p.get(f.id);
                    return {
                        id: f.id,
                        path: f.path,
                        line: f.line,
                        startLine: f.startLine,
                        originalLine: v?.originalLine ?? f.line,
                        originalStartLine: v?.originalStartLine ?? f.startLine,
                        diffSide: f.diffSide,
                        isResolved: f.isResolved,
                        isOutdated: f.isOutdated,
                        comments: f.comments.nodes.map((b)=>({
                                id: b.id,
                                body: b.body,
                                authorLogin: b.author?.login ?? "unknown",
                                avatarUrl: b.author?.avatarUrl,
                                createdAt: b.createdAt,
                                updatedAt: b.updatedAt
                            }))
                    };
                });
                this.updatePRCacheEntry(t, {
                    comments: g
                });
            }
            return h;
        } catch (s) {
            console.error("[GithubPRService] Error replying to review thread:", s);
            return;
        }
    }
    async getPullRequestFiles(e) {
        const t = this.getPRCacheEntry(e);
        return t?.filesData ? t.filesData : this._fetchPullRequestFiles(e);
    }
    async _fetchPullRequestFiles(e) {
        const t = this.getPRCacheEntry(e), n = performance.now(), i = {
            files: [],
            baseSha: "",
            headSha: ""
        }, r = mer(e);
        if (!r) return this.logService.warn("[GithubPRService] Invalid PR URL for files:", e), i;
        const { owner: s, repo: o, prNumber: a } = r, c = await this.getGitHubAccessToken();
        if (!c) return this.logService.warn("[GithubPRService] No GitHub access token available for fetching PR files"), i;
        try {
            const l = performance.now(), p = (await this.graphqlRequest(`
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
            }, c, "GetPRShas")).repository?.pullRequest;
            if (!p) throw new Error(`PR #${a} not found`);
            const g = p.headRefOid, f = await this.getMergeBase(s, o, p.baseRefOid, g, c);
            f !== p.baseRefOid && console.debug(`[PR Diff API] Using merge base ${f.slice(0, 7)} instead of baseRefOid ${p.baseRefOid.slice(0, 7)}`);
            const v = await this.getPullRequestFilesREST(s, o, a, c);
            if (console.debug(`[PR Diff API] Fetch PR info + file list (${v.length} files): ${(performance.now() - l).toFixed(0)}ms (1 GraphQL + REST API)`), v.length === 0) {
                const N = (performance.now() - n).toFixed(0);
                return console.debug(`[PR Diff API] Total: ${N}ms for 0 files (1 GraphQL query, no content fetch needed)`), {
                    files: [],
                    baseSha: f,
                    headSha: g
                };
            }
            const b = performance.now(), y = [], T = new Map;
            for(let N = 0; N < v.length; N++){
                const O = v[N], F = this.mapRESTStatus(O.status), H = `f_${N}`, $ = O.previous_filename;
                if (T.set(O.filename, {
                    path: O.filename,
                    previousPath: $,
                    status: F,
                    alias: H
                }), F !== "added") {
                    const W = $ ?? O.filename;
                    y.push(`
						${H}_base: object(expression: "${f}:${W}") {
							... on Blob { text isBinary }
						}
					`);
                }
                F !== "deleted" && y.push(`
						${H}_head: object(expression: "${g}:${O.filename}") {
							... on Blob { text isBinary }
						}
					`);
            }
            const E = `
				query GetFileContents($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						${y.join(`
`)}
					}
				}
			`, A = await this.graphqlRequest(E, {
                owner: s,
                repo: o
            }, c, "GetFileContents");
            console.debug(`[PR Diff API] Fetch file contents (${y.length} blobs in 1 query): ${(performance.now() - b).toFixed(0)}ms`);
            const R = [];
            for (const [N, { previousPath: O, status: F, alias: H }] of T){
                const $ = A.repository[`${H}_base`], W = A.repository[`${H}_head`];
                if ($?.isBinary || W?.isBinary) continue;
                const G = $?.text ?? void 0, q = W?.text ?? void 0;
                R.push({
                    filename: N,
                    previousFilename: O,
                    status: F,
                    originalContents: G,
                    modifiedContents: q
                });
            }
            const D = (performance.now() - n).toFixed(0);
            console.debug(`[PR Diff API] Total: ${D}ms for ${R.length} files (2 GraphQL + 1 REST API queries)`);
            const P = {
                files: R,
                baseSha: f,
                headSha: g
            };
            return this.updatePRCacheEntry(e, {
                filesData: P
            }), P;
        } catch (l) {
            return console.error("[GithubPRService] Error fetching PR files:", l), t?.filesData ?? i;
        }
    }
    mapRESTStatus(e) {
        switch(e.toLowerCase()){
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
    async getPullRequestFilesREST(e, t, n, i) {
        const r = [];
        let s = 1;
        const o = 100, a = this.githubRpcClient.isEnabled();
        for(;;){
            const c = await this.restRequestThroughRpc("GET", `/repos/${e}/${t}/pulls/${n}/files?per_page=${o}&page=${s}`, i, {
                pathTemplate: "/repos/{owner}/{repo}/pulls/{pull_number}/files",
                useRpc: a
            });
            if (c.status < 200 || c.status >= 300) throw new Error(ker("GitHub REST API", c));
            const l = JSON.parse(c.body);
            if (r.push(...l), l.length < o) break;
            s++;
        }
        return r;
    }
    async getCurrentUserLogin() {
        if (this.cachedCurrentUserLogin) return this.cachedCurrentUserLogin;
        const e = await this.getGitHubAccessToken();
        if (!e) {
            this.logService.warn("[GithubPRService] No GitHub access token available for fetching current user");
            return;
        }
        try {
            const t = await this.graphqlRequest(tPh, {}, e);
            return this.cachedCurrentUserLogin = t.viewer.login, this.cachedCurrentUserLogin;
        } catch (t) {
            console.error("[GithubPRService] Error fetching current user:", t);
            return;
        }
    }
    async getCommitAuthorAvatar(e) {
        const t = this.commitAvatarCache.get(e);
        if (t !== void 0) return t ?? void 0;
        const n = await this.getGitHubAccessToken();
        if (n) try {
            const i = await this.gitContextService.getGitUpstreamURL();
            if (!i || !i.includes("github.com")) return;
            const r = i.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
            if (!r) return;
            const [, s, o] = r, l = (await this.graphqlRequest(`
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
                sha: e
            }, n)).repository.object?.author?.user;
            if (l?.avatarUrl) return this.commitAvatarCache.set(e, l.avatarUrl), l.avatarUrl;
            this.commitAvatarCache.set(e, null);
            return;
        } catch (i) {
            console.warn("[GithubPRService] Error fetching commit author avatar:", i), this.commitAvatarCache.set(e, null);
            return;
        }
    }
    async getJobStepInfo(e, t, n, i) {
        const r = await this.getGitHubAccessToken();
        if (r) try {
            const s = await this.restRequestThroughRpc("GET", `/repos/${e}/${t}/actions/jobs/${n}`, r, {
                pathTemplate: "/repos/{owner}/{repo}/actions/jobs/{job_id}"
            });
            if (s.status < 200 || s.status >= 300) return;
            const o = JSON.parse(s.body), a = [];
            if (a.push(`Job: ${o.name}`), a.push(`Status: ${o.conclusion || "unknown"}`), a.push(""), a.push("Steps:"), o.steps && o.steps.length > 0) for (const b of o.steps){
                const y = b.conclusion === "success" ? "\u2713" : b.conclusion === "failure" ? "\u2717" : b.conclusion === "skipped" ? "\u25CB" : "?";
                a.push(`  ${y} ${b.name} (${b.conclusion || b.status})`);
            }
            else a.push("  No step information available");
            a.push(""), a.push("Note: Full logs not available (runner may have lost connection)");
            const c = a.join(`
`), l = this.workspaceContextService.getWorkspace();
            if (!l.folders || l.folders.length === 0) return {
                preview: c,
                logsPath: ""
            };
            const u = await $$(l, this.pathService), h = qbo(u), p = Ee.joinPath(h, `pr-${i}`), g = Ee.joinPath(p, "checks");
            await this.fileService.createFolder(g);
            const f = `job-${n}-steps.log`, v = Ee.joinPath(g, f);
            return await this.fileService.writeFile(v, wi.fromString(c)), {
                preview: c,
                logsPath: v.fsPath
            };
        } catch (s) {
            console.error("[GithubPRService] Error fetching job step info:", s);
            return;
        }
    }
    async mergePullRequest(e) {
        const { prNodeId: t, prUrl: n, mergeMethod: i = "SQUASH" } = e, r = await this.getGitHubAccessToken();
        if (!r) throw this.logService.warn("[GithubPRService] No GitHub access token available for merging PR"), new Error("No GitHub access token available");
        const o = (await this.graphqlRequest(nPh, {
            pullRequestId: t,
            mergeMethod: i
        }, r)).mergePullRequest?.pullRequest?.merged === !0;
        if (o) {
            const a = this.getPRCacheEntry(n);
            if (a?.pullRequest) {
                const c = a.pullRequest, l = new aHt({
                    number: c.number,
                    title: c.title,
                    url: c.url,
                    repository: c.repository,
                    isDraft: c.isDraft,
                    description: c.description,
                    descriptionRaw: c.descriptionRaw,
                    author: c.author,
                    headRef: c.headRef,
                    headSha: c.headSha,
                    baseRef: c.baseRef,
                    state: "merged",
                    mergedAt: new Date().toISOString(),
                    closedAt: c.closedAt,
                    createdAt: c.createdAt,
                    updatedAt: new Date().toISOString()
                });
                this.updatePRCacheEntry(n, {
                    pullRequest: l
                });
            }
        }
        return o;
    }
    async closePullRequest(e) {
        const { prNodeId: t, prUrl: n } = e, i = await this.getGitHubAccessToken();
        if (!i) throw this.logService.warn("[GithubPRService] No GitHub access token available for closing PR"), new Error("No GitHub access token available");
        const s = (await this.graphqlRequest(iPh, {
            pullRequestId: t
        }, i)).closePullRequest?.pullRequest?.closed === !0;
        if (s) {
            const o = this.getPRCacheEntry(n);
            if (o?.pullRequest) {
                const a = o.pullRequest, c = new aHt({
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
                    pullRequest: c
                });
            }
        }
        return s;
    }
    async enableAutoMerge(e) {
        const { prNodeId: t, prUrl: n, mergeMethod: i = "SQUASH" } = e, r = await this.getGitHubAccessToken();
        if (!r) throw this.logService.warn("[GithubPRService] No GitHub access token available for enabling auto-merge"), new Error("No GitHub access token available");
        const o = (await this.graphqlRequest(rPh, {
            pullRequestId: t,
            mergeMethod: i
        }, r)).enablePullRequestAutoMerge?.pullRequest?.autoMergeRequest != null;
        if (o) {
            const c = this.getPRCacheEntry(n)?.mergeInfo, l = {
                id: c?.id ?? t,
                mergeable: c?.mergeable ?? "UNKNOWN",
                mergeStateStatus: c?.mergeStateStatus ?? "UNKNOWN",
                canMerge: c?.canMerge ?? !1,
                autoMergeEnabled: !0,
                viewerCanEnableAutoMerge: !1
            };
            this.updatePRCacheEntry(n, {
                mergeInfo: l
            });
        }
        return o;
    }
    async disableAutoMerge(e) {
        const { prNodeId: t, prUrl: n } = e, i = await this.getGitHubAccessToken();
        if (!i) throw this.logService.warn("[GithubPRService] No GitHub access token available for disabling auto-merge"), new Error("No GitHub access token available");
        const s = (await this.graphqlRequest(sPh, {
            pullRequestId: t
        }, i)).disablePullRequestAutoMerge?.pullRequest, o = s != null && s.autoMergeRequest === null;
        if (o) {
            const c = this.getPRCacheEntry(n)?.mergeInfo, l = {
                id: c?.id ?? t,
                mergeable: c?.mergeable ?? "UNKNOWN",
                mergeStateStatus: c?.mergeStateStatus ?? "UNKNOWN",
                canMerge: c?.canMerge ?? !1,
                autoMergeEnabled: !1,
                viewerCanEnableAutoMerge: c?.viewerCanEnableAutoMerge ?? !1
            };
            this.updatePRCacheEntry(n, {
                mergeInfo: l
            });
        }
        return o;
    }
    async getJobLogs(e, t, n, i) {
        const r = $r_(e);
        if (!r) {
            this.logService.warn("[GithubPRService] Could not parse job URL:", e);
            return;
        }
        const { owner: s, repo: o } = r, a = n ?? r.jobId, c = await this.getGitHubAccessToken();
        if (!c) {
            this.logService.warn("[GithubPRService] No GitHub access token available for fetching job logs");
            return;
        }
        try {
            const l = await this.restRequestThroughRpc("GET", `/repos/${s}/${o}/actions/jobs/${a}/logs`, c, {
                pathTemplate: "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
            });
            if (l.status < 200 || l.status >= 300) {
                if (l.status === 404) return this.getJobStepInfo(s, o, a, t);
                throw new Error(ker("GitHub REST API", l));
            }
            const u = l.body, h = Hr_(u), p = this.workspaceContextService.getWorkspace();
            if (!p.folders || p.folders.length === 0) {
                this.logService.warn("[GithubPRService] No workspace folder available for writing logs");
                return;
            }
            const g = await $$(p, this.pathService), f = qbo(g), v = Ee.joinPath(f, `pr-${t}`), b = Ee.joinPath(v, "checks");
            await this.fileService.createFolder(b);
            const y = i?.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, ""), T = y && y.length > 0 ? `${y}.log` : `job-${a}.log`, E = Ee.joinPath(b, T);
            await this.fileService.writeFile(E, wi.fromString(h));
            const A = 5e4;
            let R;
            if (h.length > A) {
                const D = h.length - A;
                let P = h.slice(D);
                const N = P.indexOf(`
`);
                if (N > 0 && (P = P.slice(N + 1)), !P.split(`
`)[0].startsWith("\u25B6 ")) {
                    const F = h.slice(0, D), H = F.lastIndexOf(`
\u25B6 `);
                    if (H !== -1) {
                        const $ = H + 1, W = F.indexOf(`
`, $);
                        P = `${W !== -1 ? F.slice($, W) : F.slice($)}
  ... (truncated) ...
${P}`;
                    }
                }
                R = `... (showing last ~${A} chars, full logs at ${E.fsPath}) ...

${P}`;
            } else R = h;
            return {
                preview: R,
                logsPath: E.fsPath
            };
        } catch (l) {
            console.error("[GithubPRService] Error fetching job logs:", l);
            return;
        }
    }
    refreshCache() {
        this.cachedCurrentUserLogin = void 0;
    }
}, wer = ie([
    C(0, kk),
    C(1, Cq),
    C(2, Wn),
    C(3, Ii),
    C(4, Jn),
    C(5, zl),
    C(6, Xh),
    C(7, bxo)
], wer), mn(Yjt, wer, 1);

}
