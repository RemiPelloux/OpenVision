// Startup traversal attribution and budget for verify:startup-traversal (OV-1003).

// Owner of a traced execve, from its program and argv (strace -s 512 strings).
export function classifyScanner(program, argv) {
  if (program === 'cursorsandbox') return argv.includes('--preflight-only') ? 'sandbox-preflight' : 'sandbox-run';
  if (program === 'rg') {
    const text = argv.join(' ');
    if (/\.cursorignore/.test(text)) return 'rg:cursorignore';
    if (/CLAUDE\.md|AGENTS\.md|\.cursor\/rules|\.mdc\b|\.claude\//.test(text)) return 'rg:rules';
    if (/tsconfig/.test(text)) return 'rg:tsconfig';
    if (argv.includes('--files')) return 'rg:files';
    return 'rg:other';
  }
  return undefined;
}

// Declared for the two-root fixture (2 roots × 33 directories), from the
// baseline run before deduplication (logs/startup-traversal-C8uQIG: 5
// preflights, 6 rule walks, 4 .cursorignore walks, 2 file lists, 1,520 listings).
// - Rule discovery: one walk per root (the 3 discovering services share it).
// - Sandbox preflight: one per extension host process, plus one per extra root
//   in the host that re-probes per root (5). The verdict is cached per process
//   only; a cross-process share is not implemented (remaining gap, target 2).
// - .cursorignore: one walk per root by the workbench file-search owner and one
//   by the agent ignore mapping (4; two processes, remaining gap, target 2).
// - File lists: one per root (the workbench file index).
// - Listings: everything above plus Git; 1,520 - 264 (4 rule walks) = 1,256.
export const startupBudget = Object.freeze({
  scanners: { 'sandbox-preflight': 5, 'rg:cursorignore': 4, 'rg:rules': 2, 'rg:tsconfig': 2, 'rg:files': 2, 'rg:other': 0, 'sandbox-run': 0 },
  // Fixture directory listings by all owned processes before shutdown.
  listings: { total: 1300 },
});

export function evaluateStartup(budget, measured) {
  const checks = [];
  const check = (name, value, limit) => checks.push({ name, value, limit,
    pass: typeof value === 'number' && value <= limit, reason: typeof value !== 'number' ? 'unmeasured' : value <= limit ? 'within' : 'exceeded' });
  if (!measured?.scanners) check('scanners', undefined, 0);
  else for (const [kind, limit] of Object.entries(budget.scanners)) check(`scanners.${kind}`, measured.scanners[kind] ?? 0, limit);
  check('listings.total', measured?.listings?.total, budget.listings.total);
  return { pass: checks.every(item => item.pass), checks, failures: checks.filter(item => !item.pass) };
}
