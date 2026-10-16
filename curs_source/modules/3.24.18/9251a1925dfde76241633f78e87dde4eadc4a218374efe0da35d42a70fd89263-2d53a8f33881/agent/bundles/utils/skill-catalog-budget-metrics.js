import { createCounter, createHistogram } from "../../../dist_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
var skillCatalogBudgetApplied, skillCatalogBudgetRenderedTokens, skillCatalogBudgetUncappedTokens, skillCatalogBudgetOmittedCount;
export { skillCatalogBudgetApplied, skillCatalogBudgetOmittedCount, skillCatalogBudgetRenderedTokens, skillCatalogBudgetUncappedTokens };
var __wakaru_init_skill_catalog_budget_metrics_initialized = false;
export function init_skill_catalog_budget_metrics() {
if (__wakaru_init_skill_catalog_budget_metrics_initialized) return;
__wakaru_init_skill_catalog_budget_metrics_initialized = true;
"use strict";
init_dist4();
skillCatalogBudgetApplied = createCounter("skill_catalog_budget.applied", {
    description: "Model invocations that ran the skill-catalog budget pipeline, tagged by which strategy was selected",
    labelNames: [
        "strategy",
        "path_aliases"
    ]
});
skillCatalogBudgetRenderedTokens = createHistogram("skill_catalog_budget.rendered_tokens", {
    description: "Estimated tokens rendered for the skill catalog after budgeting, tagged by strategy",
    labelNames: [
        "strategy",
        "path_aliases"
    ]
});
skillCatalogBudgetUncappedTokens = createHistogram("skill_catalog_budget.uncapped_tokens", {
    description: "Estimated tokens the skill catalog would have rendered with no budget applied, tagged by the strategy that ran",
    labelNames: [
        "strategy",
        "path_aliases"
    ]
});
skillCatalogBudgetOmittedCount = createHistogram("skill_catalog_budget.omitted_count", {
    description: "Number of skills omitted from the rendered catalog, tagged by strategy",
    labelNames: [
        "strategy",
        "path_aliases"
    ]
});

}
