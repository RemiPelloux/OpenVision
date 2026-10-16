import { nl } from "./index.ts";
import { sQn } from "./pull-request-review-links.ts";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var mlg, REi, glg, flg, vlg, Yol, _lg, blg, Xol, ylg, pss, Slg;
export { REi, Slg, Xol, Yol, _lg, blg, flg, glg, mlg, pss, vlg, ylg };
var __wakaru_klg_initialized = false;
export function klg() {
if (__wakaru_klg_initialized) return;
__wakaru_klg_initialized = true;
"use strict";
E(), nl(), Mk(), mlg = "cursor-subscriptions", REi = "https://cursor.com", [glg, flg] = sQn, vlg = new Map([
    [
        "cursor.com",
        REi
    ],
    [
        glg,
        REi
    ],
    [
        "staging.cursor.com",
        "https://staging.cursor.com"
    ],
    [
        flg,
        "https://staging.cursor.com"
    ]
]), Yol = [
    [
        "subscribe_slack_thread",
        {
            loading: "Subscribing to Slack thread",
            success: "Subscribed to Slack thread",
            error: "Failed to subscribe to Slack thread"
        }
    ],
    [
        "subscribe_slack_channel",
        {
            loading: "Subscribing to Slack channel",
            success: "Subscribed to Slack channel",
            error: "Failed to subscribe to Slack channel"
        }
    ],
    [
        "subscribe_slack_new_channels",
        {
            loading: "Subscribing to new Slack channels",
            success: "Subscribed to new Slack channels",
            error: "Failed to subscribe to new Slack channels"
        }
    ],
    [
        "subscribe_github_pr",
        {
            loading: "Subscribing to PR updates",
            success: "Subscribed to PR updates",
            error: "Failed to subscribe to PR updates"
        }
    ],
    [
        "subscribe_github_ci",
        {
            loading: "Subscribing to CI updates",
            success: "Subscribed to CI updates",
            error: "Failed to subscribe to CI updates"
        }
    ],
    [
        "subscribe_origin_pr",
        {
            loading: "Subscribing to PR updates",
            success: "Subscribed to PR updates",
            error: "Failed to subscribe to PR updates"
        }
    ],
    [
        "subscribe_origin_ci",
        {
            loading: "Subscribing to CI updates",
            success: "Subscribed to CI updates",
            error: "Failed to subscribe to CI updates"
        }
    ],
    [
        "subscribe_factory_issue",
        {
            loading: "Subscribing to Factory issue",
            success: "Subscribed to Factory issue",
            error: "Failed to subscribe to Factory issue"
        }
    ],
    [
        "subscribe_factory_rollout",
        {
            loading: "Subscribing to Factory rollout",
            success: "Subscribed to Factory rollout",
            error: "Failed to subscribe to Factory rollout"
        }
    ],
    [
        "subscribe_timer",
        {
            loading: "Scheduling reminder",
            success: "Scheduled reminder",
            error: "Failed to schedule reminder"
        }
    ],
    [
        "unsubscribe",
        {
            loading: "Unsubscribing",
            success: "Unsubscribed",
            error: "Failed to unsubscribe"
        }
    ]
], _lg = {
    serverName: "Subscriptions",
    toolDisplay: new Map([
        ...Yol,
        [
            "list_subscriptions",
            {
                loading: "Listing subscriptions",
                success: "Listed subscriptions",
                error: "Failed to list subscriptions"
            }
        ]
    ]),
    noMatchingSubscription: "No matching subscription found"
}, blg = {
    serverName: "Triggers",
    toolDisplay: new Map([
        ...Yol,
        [
            "list_subscriptions",
            {
                loading: "Listing triggers",
                success: "Listed triggers",
                error: "Failed to list triggers"
            }
        ]
    ]),
    noMatchingSubscription: "No matching trigger found"
}, Xol = 60, ylg = /^[A-Z][A-Z0-9]+$/, pss = /^[\w.-]+\/[\w.-]+$/, Slg = /^[\w-]+$/;

}
