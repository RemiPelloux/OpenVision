import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

export interface FlagDefinition {
  enabled: boolean;
  rolloutPercent?: number;
  allowRoles?: string[];
  description?: string;
}

export type FlagSet = Record<string, FlagDefinition>;

export function loadFlags(path: string): FlagSet {
  return JSON.parse(readFileSync(path, "utf8")) as FlagSet;
}

function bucketFor(flagName: string, subjectId: string): number {
  const digest = createHash("sha1").update(`${flagName}:${subjectId}`).digest();
  return digest.readUInt16BE(0) % 100;
}

/**
 * Decides whether a feature is on for a given user. Percentage rollouts are
 * sticky because the bucket is derived from a hash of flag name and user id.
 */
export function isFeatureEnabled(flags: FlagSet, name: string, subject: { id: string; role: string }): boolean {
  const flag = flags[name];
  if (!flag || !flag.enabled) return false;
  if (flag.allowRoles && !flag.allowRoles.includes(subject.role)) return false;
  if (flag.rolloutPercent === undefined) return true;
  return bucketFor(name, subject.id) < flag.rolloutPercent;
}
