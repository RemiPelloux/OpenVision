// OV-1002 application-storage work in the recovered reactive storage service.
//
// 1. Local catalog persistence (`localCatalogOwnKey`). OpenVision publishes the
// saved-provider catalog into `availableDefaultModels2` from its own
// `openvision.model-providers.v1` record, and in local mode the picker computes
// its catalog from that record (custom-models.mjs, "catalog from saved
// providers"). The recovered service still persisted the published copy inside
// the single application-user object, so every save of any application setting
// re-serialized, sent to the main process and rewrote the whole catalog: with
// 10,000 saved models a 13,700,088-byte item, 12,431,423 bytes of it the catalog
// (Linux x64, controlled fixture). The recovered service already has the
// owner-designed mode for this, the `cursor.modelCatalogOwnKey.gateEnabled`
// gate: the catalog is left out of the application-user object, kept in memory
// across external storage changes and set without a save. Local mode turns that
// mode on; hosted mode keeps reading the recovered gate.
//
// 2. Skip the model-catalog change check for this window's own
// application-storage save (`skipOwnStorageEcho`).
//
// The recovered reactive storage service saves the whole application-user
// object (`savePersistentStorage`, on every settings change and on each
// `onWillSaveState` flush) with a fresh `SPECIAL_KEY_id`, so every save changes
// the stored string and fires the service's own `onDidChangeValue` handler. That
// handler stringifies the saved model catalog (`availableDefaultModels2` and
// `privateInferenceCatalog`) before and after `updatePersistentStorage`. For the
// window's own save, `updatePersistentStorage` -> `getOldValue` recognizes the
// saved id (`lastIndexOf("SPECIAL_KEY_id":"<id>")`), throws "this is the same
// object that we just saved" and the catch ignores it, so nothing changes and
// both catalog strings are equal: two full catalog serializations (about 100 ms
// of renderer main thread with 10,000 saved models on Linux x64) are discarded.
//
// The customization returns early under exactly that recovered own-save
// condition, before the two serializations. Saves from other windows and
// external changes (different id) still run the recovered path unchanged.

export const marker = '/* OpenVision skip catalog checks for own application storage save v1 */';

const handler = /\)\(\(([\w$]+)\) => \{\n(\s+)const ([\w$]+) = this\.stringifyAvailableModelsCatalogForChangeCheck\(\);\n\s+\(this\.updatePersistentStorage\(\n\s+this\.applicationUserPersistentStorage,\n\s+this\._setApplicationUserPersistentStorage,\n\s+[\w$]+,\n\s+(-1),\n\s+0,\n\s+([\w$]+),\n\s+\1,\n/g;

const contracts = {
  save: /savePersistentStorage\(([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+)\) \{\n[^\n]*\n\s+const ([\w$]+) = [\w$]+\(\);\n\s+this\.saveIdsCache\.set\(`\$\{\4\}\$\{\2\}`, \6\);/g,
  read: /getOldValue\(([\w$]+), ([\w$]+), [^)]*\) \{\n\s+const ([\w$]+) = this\.storageService\.get\(\2, \1\),\n\s+([\w$]+) = this\.saveIdsCache\.get\(`\$\{\2\}\$\{\1\}`\);\n[^]{0,200}?\3\.lastIndexOf\(`"SPECIAL_KEY_id":"\$\{\4\}"`\) !== -1\n\s+\)\n\s+throw new Error\("this is the same object that we just saved! we should ignore it"\);/g,
  update: /updatePersistentStorage\(([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), ([\w$]+), [^)]*\) \{\n\s+if \(\7\.scope === \4 && \(\7\.target === void 0 \|\| \7\.target === \5\) && \7\.key === \6\)\n\s+try \{\n\s+let [\w$]+ = this\.getOldValue\(\4, \6, [^\n]*\{ throwIfSavedObjectIsTheSame: !0 \}\);/g,
};

export function skipOwnStorageEcho(text) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(handler)];
  if (matches.length !== 1) throw new Error('Application storage change handler owner changed');
  const [match, event, indent, , scope, key] = matches[0];
  // Drift guards: the recovered own-save contract this early return mirrors
  // (save id cached as `${key}${scope}`; getOldValue ignores a stored string
  // containing that id; updatePersistentStorage asks getOldValue to throw then).
  for (const [name, contract] of Object.entries(contracts))
    if ((text.match(contract) ?? []).length !== 1) throw new Error(`Application storage own-save contract changed: ${name}`);
  const guard = `${indent}${marker}
${indent}{
${indent}  const openvisionSaveId = this.saveIdsCache.get(\`\${${key}}\${${scope}}\`),
${indent}    openvisionStored = this.storageService.get(${key}, ${scope});
${indent}  if (${event}.key === ${key} && ${event}.scope === ${scope} && openvisionSaveId !== void 0 && openvisionStored !== void 0 &&
${indent}    openvisionStored.lastIndexOf(\`"SPECIAL_KEY_id":"\${openvisionSaveId}"\`) !== -1) return;
${indent}}
`;
  const insertAt = matches[0].index + match.indexOf('\n') + 1;
  return text.slice(0, insertAt) + guard + text.slice(insertAt);
}

export const catalogMarker = '/* OpenVision local catalog stays out of application storage v1 */';

export function localCatalogOwnKey(text, variant) {
  if (text.includes(catalogMarker)) return text;
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const getter = /\n(\s+)get isModelCatalogOwnKeyEnabled\(\) \{\n\s+return (this\.storageService\.getBoolean\(([\w$]+), -1, !1\));\n\s+\}/g;
  const matches = [...text.matchAll(getter)];
  if (matches.length !== 1) throw new Error('Model catalog own-key gate owner changed');
  const [match, indent, original, gate] = matches[0];
  // Drift guards: the gate must still be the persisted-catalog switch this relies on.
  if (!text.includes(`${gate} = "cursor.modelCatalogOwnKey.gateEnabled"`)) throw new Error('Model catalog own-key gate key changed');
  for (const [name, contract] of Object.entries({
    excluded: /this\.isModelCatalogOwnKeyEnabled &&\n\s+\([\w$]+ = [\w$]+\.concat\(\[\["availableDefaultModels2"\], \["privateInferenceCatalog"\]\]\)\)/g,
    kept: /[\w$]+ === [\w$]+ && this\.isModelCatalogOwnKeyEnabled\)\n\s+\) \{\n\s+const [\w$]+ = [\w$]+,\n\s+[\w$]+ = [\w$]+;\n\s+\(\([\w$]+\.availableDefaultModels2 = /g,
    unsaved: /if \([\w$]+ === "availableDefaultModels2" && this\.isModelCatalogOwnKeyEnabled\) \{/g,
  })) if ((text.match(contract) ?? []).length !== 1) throw new Error(`Model catalog own-key contract changed: ${name}`);
  const replacement = `\n${indent}get isModelCatalogOwnKeyEnabled() {\n${indent}  ${catalogMarker}\n${indent}  return ${flag}.localMode === !0 || ${original};\n${indent}}`;
  return text.slice(0, matches[0].index) + replacement + text.slice(matches[0].index + match.length);
}

export function customizeApplicationStorage(text, variant) {
  return skipOwnStorageEcho(localCatalogOwnKey(text, variant));
}
