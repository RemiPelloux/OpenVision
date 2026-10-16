function lP(e){return["checkout-session","name"in e.paywall?`name:${e.paywall.name}`:`product:${e.paywall.productLine}`,e.country,[...e.platforms].sort().join(","),e.teamId??""]}
