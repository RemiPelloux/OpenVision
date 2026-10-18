// OV-702 required outcomes, evaluated from the verifier's recorded observations.
import { id, keptSetting, languagePack, protectedTarget, publisher, fixtureGroups } from './extension-lifecycle.mjs';

const step = (phase, label) => phase?.driver?.steps?.find(item => (item.label ?? item.op) === label)?.result;
const check = (condition, detail) => ({ status: condition ? 'pass' : 'fail', detail });
const message = value => value?.error?.message ?? '';
const byId = (state, full) => (state?.registry ?? []).filter(item => item.id?.toLowerCase() === full.toLowerCase());
const registered = (state, name) => byId(state, id(name));

export function evaluateLifecycle(result) {
  const [p1, p2, p3, p4, p5] = result.phases;
  const hostPid = p1?.driver?.pid;
  const cases = {};
  cases.install = check(step(p1, 'fresh profile') === null && step(p1, 'install lifecycle-1.0.0')?.ok === true &&
    step(p1, 'activate lifecycle')?.exports?.version === '1.0.0' && registered(p1?.after, 'lifecycle').length === 1,
    `installed ${step(p1, 'install lifecycle-1.0.0')?.registered?.version}; activated ${step(p1, 'activate lifecycle')?.exports?.version}`);
  const updated = registered(p2?.before, 'lifecycle');
  cases.update = check(step(p1, 'install lifecycle-2.0.0')?.ok === true && step(p2, 'activate lifecycle')?.exports?.version === '2.0.0' &&
    updated.length === 1 && updated[0].version === '2.0.0',
    `running ${step(p1, 'running version after update')?.version} until restart; after restart ${step(p2, 'activate lifecycle')?.exports?.version}; registry ${updated.map(item => item.version)}`);
  cases.downgrade = check(step(p2, 'downgrade lifecycle')?.ok === true && step(p3, 'activate lifecycle')?.exports?.version === '1.0.0',
    `after restart ${step(p3, 'activate lifecycle')?.exports?.version}`);
  const uninstall = step(p3, 'uninstall');
  const removed = [step(p4, 'files removed lifecycle'), step(p5, `files removed ${languagePack.name}`)];
  // A running extension may stay loaded until the extension host restarts; the
  // on-disk registry and the next startup are authoritative.
  cases.uninstall = check(uninstall?.ok === true && registered(p3?.after, 'lifecycle').length === 0 &&
    step(p4, 'after uninstall restart') === null && removed.every(value => value?.gone === true) &&
    registered(p5?.before, languagePack.name).length === 0,
    `registry entry removed at once (still loaded in the running host: ${!uninstall?.unregistered}); files removed on the next startup`);
  cases.settings_kept = check([step(p2, 'readSetting'), step(p3, 'readSetting'), step(p4, 'readSetting')]
    .every(value => value?.globalValue === keptSetting.value) && p4?.before?.setting === keptSetting.value,
    `settings.json value after uninstall: ${p4?.before?.setting}`);
  cases.reinstall = check(step(p4, 'reinstall lifecycle')?.ok === true && step(p4, 'activate lifecycle')?.exports?.version === '1.0.0' &&
    step(p5, 'activate lifecycle')?.exports?.version === '1.0.0', `after restart ${step(p5, 'activate lifecycle')?.exports?.version}`);
  cases.language_pack = check(step(p2, `install ${languagePack.name}`)?.ok === true && step(p3, 'environment')?.language === languagePack.locale &&
    p3?.ui?.translated_label_present === true && step(p4, 'environment')?.language === 'en' && p4?.ui?.translated_label_present === false &&
    step(p4, 'uninstall')?.ok === true && step(p5, 'present') === null,
    `language ${step(p3, 'environment')?.language} -> ${step(p4, 'environment')?.language}; label ${p3?.ui?.translated_label_present}/${p4?.ui?.translated_label_present}`);
  const napi = [step(p1, 'activate native-napi'), step(p2, 'activate native-napi')];
  cases.native_addon_supported = check(napi.every(value => value?.exports?.marker === 'openvision-napi-ok'), `marker ${napi[0]?.exports?.marker}`);
  const abi = [step(p1, 'activate native-wrong-abi'), step(p2, 'activate native-wrong-abi')];
  cases.native_addon_wrong_abi = check(abi.every(value => value?.activated === false && /NODE_MODULE_VERSION/.test(message(value))),
    message(abi[0]));
  const arch = [step(p1, 'activate native-wrong-arch'), step(p2, 'activate native-wrong-arch')];
  cases.native_addon_wrong_arch = check(arch.every(value => value?.activated === false &&
    message(value).includes(`built for arm64, but this extension host runs ${result.platform}-${result.arch}`)), message(arch[0]));
  const failures = ['throws', 'load-error'].flatMap(name => [step(p1, `activate ${name}`), step(p2, `activate ${name}`)]);
  cases.activation_isolation = check(failures.every(value => value?.activated === false && message(value)) &&
    [p1, p2].every(phase => step(phase, 'activate healthy')?.exports?.pid === phase.driver.pid && phase.driver.pid_after === phase.driver.pid) &&
    step(p1, 'host after failures')?.pid === hostPid && step(p5, 'activate healthy')?.activated === true,
    failures.map(message).join(' | '));
  const engine = step(p1, 'install engine-incompatible');
  cases.engine_incompatible = check(engine?.ok === false && /not compatible/i.test(message(engine)) && !registered(p1?.after, 'engine-incompatible').length,
    message(engine));
  const malformed = ['malformed-json', 'missing-manifest', 'missing-identity'].map(name => [name, step(p1, `install ${name}`)]);
  const leftovers = (p1?.after?.registry ?? []).filter(item => !item.id?.startsWith(`${publisher}.`) && item.id !== protectedTarget)
    .concat(fixtureGroups.rejected.flatMap(name => registered(p1?.after, name)));
  cases.malformed_manifest = check(malformed.every(([, value]) => value?.ok === false && /package\.json/i.test(message(value))) &&
    !leftovers.length && !(p1?.after?.entries ?? []).some(name => name.startsWith('undefined_publisher')),
    malformed.map(([name, value]) => `${name}: ${message(value)}`).join(' | ') + (leftovers.length ? `; left registered: ${leftovers.map(item => item.id)}` : ''));
  const attempts = [[step(p1, 'install protected replacement'), step(p2, 'protected after restart'), step(p2, 'activate protected')],
    [step(p2, 'install protected full copy'), step(p3, 'protected after full copy'), step(p3, 'activate protected full copy')]];
  cases.protected_replacement = check(attempts.every(([install, entry, run]) => install?.ok === false &&
    message(install).includes(protectedTarget) && entry && !entry.path.startsWith(result.directory) && run?.exports?.replaced !== true &&
    run?.activated === true) && ![p1, p2].some(phase => byId(phase?.after, protectedTarget).length),
    attempts.map(([install, entry, run]) => `install ${install?.ok ? 'accepted' : `rejected: ${message(install)}`}; ` +
      `runs ${entry?.version} from ${entry?.path}; ${run?.activated ? `activated${run.exports?.replaced ? ' REPLACEMENT' : ''}` : `failed: ${message(run)}`}`).join(' | '));
  // A protected copy already registered (seeded before launch 3) never displaces the bundled one.
  const seeded = byId(p3?.before, protectedTarget), skipped = (result.log_lines ?? []).filter(line =>
    line.includes(`${protectedTarget}-99.0.2: it would replace the protected bundled extension`));
  cases.protected_preexisting = check(seeded.length === 1 && step(p3, 'protected after full copy') &&
    !step(p3, 'protected after full copy').path.startsWith(result.directory) && step(p3, 'activate protected full copy')?.exports?.replaced !== true &&
    step(p3, 'activate protected full copy')?.activated === true && skipped.length > 0,
    `seeded ${seeded.map(item => item.version)}; runs from ${step(p3, 'protected after full copy')?.path}; warning lines ${skipped.length}`);
  cases.restart = check(result.phases.length === 5 && result.phases.every(phase => phase.driver?.success === true && phase.host_exit?.code === 0),
    `exits ${result.phases.map(phase => phase.host_exit?.code).join(',')}`);
  return cases;
}
