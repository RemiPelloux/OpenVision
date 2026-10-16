import { Ml } from "./index.ts";
import { Pbn } from "./pull-request-review-links.ts";
import { eG } from "./pullRequestIdentity.js";
import { x } from "./tslib.es6.js";
var nwh, _3n, iwh, rwh, swh, QCo, owh, awh, JCo, cwh, FZi, lwh;
export { FZi, JCo, QCo, _3n, awh, cwh, iwh, lwh, nwh, owh, rwh, swh };
var __wakaru_uwh_initialized = false;
export function uwh() {
if (__wakaru_uwh_initialized) return;
__wakaru_uwh_initialized = true;
"use strict";
x(), Ml(), eG(), nwh = "cursor-subscriptions", _3n = "https://cursor.com", [iwh, rwh] = Pbn, swh = new Map([
    [
        "cursor.com",
        _3n
    ],
    [
        iwh,
        _3n
    ],
    [
        "staging.cursor.com",
        "https://staging.cursor.com"
    ],
    [
        rwh,
        "https://staging.cursor.com"
    ]
]), QCo = [
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
], owh = {
    serverName: "Subscriptions",
    toolDisplay: new Map([
        ...QCo,
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
}, awh = {
    serverName: "Triggers",
    toolDisplay: new Map([
        ...QCo,
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
}, JCo = 60, cwh = /^[A-Z][A-Z0-9]+$/, FZi = /^[\w.-]+\/[\w.-]+$/, lwh = /^[\w-]+$/;

}
