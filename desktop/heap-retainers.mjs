import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Diagnostic: which objects keep strings containing a marker alive in a V8
// heap snapshot. For every matching string the shortest strong path from the
// GC roots is reported (weak edges are skipped, as the collector does), and
// paths are grouped by their nearest retainers. Used for the OV-1001/OV-1003
// closed-chat retention work; the result is evidence for inspection, not a
// budget.
export function retainerPaths(snapshot, marker, { depth = 14, objectName, nodeId } = {}) {
  const { meta } = snapshot.snapshot;
  const nodeFields = meta.node_fields, edgeFields = meta.edge_fields;
  const nodeTypes = meta.node_types[0], edgeTypes = meta.edge_types[0];
  const N = nodeFields.length, E = edgeFields.length;
  const at = name => nodeFields.indexOf(name), eat = name => edgeFields.indexOf(name);
  const typeOffset = at('type'), nameOffset = at('name'), edgeCountOffset = at('edge_count'), sizeOffset = at('self_size');
  const edgeTypeOffset = eat('type'), edgeNameOffset = eat('name_or_index'), edgeToOffset = eat('to_node');
  const { nodes, edges, strings } = snapshot;
  const count = nodes.length / N;
  const firstEdge = new Uint32Array(count + 1);
  for (let node = 0, edge = 0; node < count; node++) { firstEdge[node] = edge; edge += nodes[node * N + edgeCountOffset] * E; }
  firstEdge[count] = edges.length;
  const nodeType = node => nodeTypes[nodes[node * N + typeOffset]];
  const nodeName = node => strings[nodes[node * N + nameOffset]];
  const edgeLabel = edge => {
    const type = edgeTypes[edges[edge + edgeTypeOffset]], name = edges[edge + edgeNameOffset];
    return type === 'element' || type === 'hidden' ? `[${name}]` : String(strings[name]);
  };
  // Breadth-first from the synthetic root over strong edges: shortest retaining paths.
  // A WeakMap entry (edge named "part of key (... @id) -> value ...") keeps its
  // value only while the key is also alive, so it is followed once both the
  // table and the key have been reached.
  const idOffset = at('id'), indexById = new Map();
  for (let node = 0; node < count; node++) indexById.set(nodes[node * N + idOffset], node);
  const parent = new Int32Array(count).fill(-1), parentEdge = new Int32Array(count).fill(-1);
  const waiting = new Map(); // key node -> [[table node, edge]]
  parent[0] = 0; const queue = [0];
  const reach = (from, edge) => {
    const to = edges[edge + edgeToOffset] / N;
    if (parent[to] !== -1) return;
    parent[to] = from; parentEdge[to] = edge; queue.push(to);
  };
  for (let head = 0; head < queue.length; head++) {
    const node = queue[head];
    for (const [table, edge] of waiting.get(node) ?? []) reach(table, edge);
    waiting.delete(node);
    for (let edge = firstEdge[node]; edge < firstEdge[node + 1]; edge += E) {
      if (edgeTypes[edges[edge + edgeTypeOffset]] === 'weak') continue;
      const label = edgeTypes[edges[edge + edgeTypeOffset]] === 'element' || edgeTypes[edges[edge + edgeTypeOffset]] === 'hidden'
        ? '' : String(strings[edges[edge + edgeNameOffset]]);
      const ephemeron = label.includes('part of key') && /part of key \([^)]*@(\d+)\) -> value/.exec(label);
      const key = ephemeron ? indexById.get(Number(ephemeron[1])) : undefined;
      if (key !== undefined && parent[key] === -1) { waiting.set(key, [...(waiting.get(key) ?? []), [node, edge]]); continue; }
      reach(node, edge);
    }
  }
  const describe = node => {
    const type = nodeType(node), name = nodeName(node);
    return type === 'string' || type === 'concatenated string' || type === 'sliced string'
      ? `${type}(${name.length})` : `${type}:${String(name).slice(0, 60)}`;
  };
  const groups = new Map(); let matched = 0, unreachable = 0, bytes = 0;
  const wanted = nodeId !== undefined ? node => nodes[node * N + idOffset] === nodeId : objectName
    ? node => nodeType(node) === 'object' && nodeName(node) === objectName
    : node => { const type = nodeType(node);
      return (type === 'string' || type === 'concatenated string' || type === 'sliced string') && String(nodeName(node)).includes(marker); };
  for (let node = 0; node < count; node++) {
    if (!wanted(node)) continue;
    matched++; bytes += nodes[node * N + sizeOffset];
    if (parent[node] === -1) { unreachable++; continue; }
    const path = []; let current = node;
    while (current !== 0 && path.length < depth) {
      path.push(`${describe(parent[current])} .${edgeLabel(parentEdge[current])}`);
      current = parent[current];
    }
    // Group by the nearest non-string retainers, which name the owner.
    const key = path.filter(step => !/^(concatenated |sliced )?string/.test(step)).slice(0, 6)
      .map(step => step.replace(/\.\[\d+\]$/, '.[n]').replace(/^array: \.\d+$/, 'array: .[n]')).join(' <- ');
    // For objects, the sample is the value of a string `composerId` property when present.
    let sample = String(nodeName(node));
    if (objectName) for (let edge = firstEdge[node]; edge < firstEdge[node + 1]; edge += E)
      if (edgeLabel(edge) === 'composerId') sample = `composerId ${nodeName(edges[edge + edgeToOffset] / N)}`;
    const group = groups.get(key) ?? { count: 0, example: path, sample: sample.slice(0, 120) };
    group.count++; groups.set(key, group);
  }
  return { matched, unreachable, selfBytes: bytes,
    groups: [...groups.entries()].sort((a, b) => b[1].count - a[1].count).map(([key, group]) => ({ key, ...group })) };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [path, marker, out] = process.argv.slice(2).filter(value => !value.startsWith('--'));
  const objectName = process.argv.find(value => value.startsWith('--object='))?.slice(9);
  const nodeId = process.argv.find(value => value.startsWith('--id='))?.slice(5);
  if (!path || !(marker || objectName || nodeId)) { console.log('Usage: node desktop/heap-retainers.mjs SNAPSHOT MARKER [OUT.json] [--object=CONSTRUCTOR|--id=NODE_ID] [--depth=N]'); process.exit(2); }
  const report = retainerPaths(JSON.parse(await readFile(path, 'utf8')), marker, { objectName, nodeId: nodeId === undefined ? undefined : Number(nodeId),
    depth: Number(process.argv.find(value => value.startsWith('--depth='))?.slice(8) ?? (objectName || nodeId ? 40 : 14)) });
  if (out) await writeFile(out, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ matched: report.matched, unreachable: report.unreachable, selfBytes: report.selfBytes,
    groups: report.groups.slice(0, 25).map(group => ({ count: group.count, key: group.key, sample: group.sample.slice(0, 80) })) }, null, 2));
}
