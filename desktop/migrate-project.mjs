import { resolve } from 'node:path';
import { migrateProjectNamespace } from './project-namespace-migration.mjs';

const projects = process.argv.slice(2);
if (!projects.length) throw new Error('Usage: npm run migrate:project -- <project-folder> [more-folders]');
for (const project of projects) {
  const result = await migrateProjectNamespace(resolve(project));
  console.log(JSON.stringify(result, null, 2));
  if (result.errors.length || result.conflicts.length || result.skippedLinks.length) process.exitCode = 1;
}
