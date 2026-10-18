// Pinned multi-language autocomplete quality corpus (OV-602). Each document marks
// the cursor with `<|cursor|>`. `exact` lists reference insertions compared after
// whitespace normalization; `expected` lists further acceptable insertions as
// regular expressions over the same normalized text. `midProject` cases are
// project files with imports; their imported files are NOT sent by the adapter,
// so they also measure how far file-local context goes. `projectFiles` are only
// written beside the document for syntax checking (C headers), never sent.
// Changing a case changes the corpus SHA-256 recorded by every quality result.
export const cursorMarker = '<|cursor|>';

export const completionQualityCorpus = Object.freeze([
  // JavaScript
  { id: 'js-sum-return', language: 'javascript', path: 'math.js', midProject: false,
    document: 'function add(a, b) {\n  return <|cursor|>;\n}\n',
    exact: ['a + b'], expected: ['^\\(?(a \\+ b|b \\+ a)\\)?$'] },
  { id: 'js-import-parse', language: 'javascript', path: 'src/config.js', midProject: true,
    document: "import { readFile } from 'node:fs/promises';\nimport { join } from 'node:path';\n\nexport async function loadConfig(directory) {\n  const text = await readFile(join(directory, 'config.json'), 'utf8');\n  return <|cursor|>;\n}\n",
    exact: ['JSON.parse(text)'], expected: [] },
  { id: 'js-map-callback', language: 'javascript', path: 'src/users.js', midProject: false,
    document: "const users = [{ name: 'Ada', active: true }, { name: 'Linus', active: false }];\n\n// Names of active users only.\nexport const activeNames = users\n  .filter(user => user.active)\n  .map(<|cursor|>);\n",
    exact: ['user => user.name'], expected: ['^\\(?(\\w+)\\)? => \\1\\.name$', '^\\(\\{ name \\}\\) => name$'] },
  { id: 'js-class-getter', language: 'javascript', path: 'src/counter.js', midProject: true,
    document: "import { EventEmitter } from 'node:events';\n\nexport class Counter extends EventEmitter {\n  #count = 0;\n\n  increment() {\n    this.#count += 1;\n    this.emit('change', this.#count);\n  }\n\n  get value() {\n    return <|cursor|>;\n  }\n}\n",
    exact: ['this.#count'], expected: [] },
  { id: 'js-query-join', language: 'javascript', path: 'src/query.js', midProject: false,
    document: 'export function toQuery(params) {\n  return Object.entries(params)\n    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)\n    .join(<|cursor|>);\n}\n',
    exact: ["'&'", '"&"'], expected: ['^`&`$'] },
  { id: 'js-guard-clause', language: 'javascript', path: 'src/first.js', midProject: false,
    document: 'export function first(items) {\n  if (items.length === 0) <|cursor|>\n  return items[0];\n}\n',
    exact: ['return undefined;', 'return;'],
    expected: ['^\\{? ?return( undefined| null)?;? ?\\}?$', '^\\{? ?throw new (Range|Type)?Error\\(.*\\);? ?\\}?$'] },

  // TypeScript
  { id: 'ts-template-field', language: 'typescript', path: 'src/greeting.ts', midProject: false,
    document: 'interface User {\n  id: number;\n  name: string;\n}\n\nexport function greeting(user: User): string {\n  return `Hello, ${<|cursor|>}`;\n}\n',
    exact: ['user.name'], expected: [] },
  { id: 'ts-import-digest', language: 'typescript', path: 'src/hash.ts', midProject: true,
    document: "import { createHash } from 'node:crypto';\nimport type { Readable } from 'node:stream';\n\nexport async function sha256(stream: Readable): Promise<string> {\n  const hash = createHash('sha256');\n  for await (const chunk of stream) hash.update(chunk);\n  return hash.digest(<|cursor|>);\n}\n",
    exact: ["'hex'", '"hex"'], expected: ["^['\"](hex|base64)['\"]$"] },
  { id: 'ts-generic-last', language: 'typescript', path: 'src/last.ts', midProject: false,
    document: 'export function last<T>(items: readonly T[]): T | undefined {\n  return items[<|cursor|>];\n}\n',
    exact: ['items.length - 1'], expected: ['^items\\.length ?- ?1$'] },
  { id: 'ts-hypot', language: 'typescript', path: 'src/geometry.ts', midProject: false,
    document: 'type Point = { x: number; y: number };\n\nexport function distance(a: Point, b: Point): number {\n  return Math.hypot(<|cursor|>);\n}\n',
    exact: ['a.x - b.x, a.y - b.y', 'b.x - a.x, b.y - a.y'], expected: [] },
  { id: 'ts-repository-lookup', language: 'typescript', path: 'src/order-service.ts', midProject: true,
    document: "import { Repository } from './repository';\nimport type { Order } from './models';\n\nexport class OrderService {\n  readonly #orders: Repository<Order>;\n\n  constructor(orders: Repository<Order>) {\n    this.#orders = orders;\n  }\n\n  async findById(id: string): Promise<Order | undefined> {\n    return this.#orders.<|cursor|>;\n  }\n}\n",
    exact: ['findById(id)'], expected: ['^(find|get|load|fetch)(One|ById)?\\(id\\)$'] },
  { id: 'ts-union-switch', language: 'typescript', path: 'src/shapes.ts', midProject: false,
    document: "type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; side: number };\n\nexport function area(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle':\n      return Math.PI * shape.radius ** 2;\n    case 'square':\n      return <|cursor|>;\n  }\n}\n",
    exact: ['shape.side ** 2', 'shape.side * shape.side'], expected: ['^Math\\.pow\\(shape\\.side, 2\\)$'] },

  // Python
  { id: 'py-sum-return', language: 'python', path: 'mathx.py', midProject: false,
    document: 'def add(a, b):\n    return <|cursor|>\n',
    exact: ['a + b'], expected: ['^\\(?(a \\+ b|b \\+ a)\\)?$'] },
  { id: 'py-import-json', language: 'python', path: 'app/settings.py', midProject: true,
    document: 'import json\nfrom pathlib import Path\n\n\ndef load_settings(path: Path) -> dict:\n    with path.open(encoding="utf-8") as handle:\n        return <|cursor|>\n',
    exact: ['json.load(handle)'], expected: ['^json\\.loads\\(handle\\.read\\(\\)\\)$'] },
  { id: 'py-comprehension', language: 'python', path: 'app/numbers.py', midProject: false,
    document: 'def even_squares(numbers):\n    """Return the square of every even number."""\n    return [<|cursor|>]\n',
    exact: ['n ** 2 for n in numbers if n % 2 == 0', 'n * n for n in numbers if n % 2 == 0'],
    expected: ['^(\\w+) (\\*\\* 2|\\* \\1) for \\1 in numbers if \\1 % 2 == 0$', '^(\\w+) (\\*\\* 2|\\* \\1) for \\1 in numbers if not \\1 % 2$'] },
  { id: 'py-dataclass-update', language: 'python', path: 'app/inventory.py', midProject: true,
    document: 'from dataclasses import dataclass, field\n\n\n@dataclass\nclass Inventory:\n    items: dict[str, int] = field(default_factory=dict)\n\n    def add(self, name: str, quantity: int = 1) -> None:\n        self.items[name] = <|cursor|>\n',
    exact: ['self.items.get(name, 0) + quantity'], expected: ['^quantity \\+ self\\.items\\.get\\(name, 0\\)$'] },
  { id: 'py-fstring', language: 'python', path: 'app/people.py', midProject: false,
    document: 'def describe(name: str, age: int) -> str:\n    return f"{name} is {<|cursor|>} years old"\n',
    exact: ['age'], expected: [] },
  { id: 'py-uploader-success', language: 'python', path: 'app/uploader.py', midProject: true,
    document: 'import logging\n\nfrom .storage import Storage\n\nlogger = logging.getLogger(__name__)\n\n\nclass Uploader:\n    def __init__(self, storage: Storage) -> None:\n        self.storage = storage\n\n    def upload(self, key: str, data: bytes) -> bool:\n        try:\n            self.storage.put(key, data)\n        except OSError:\n            logger.exception("upload failed for %s", key)\n            return False\n        return <|cursor|>\n',
    exact: ['True'], expected: [] },

  // Go
  { id: 'go-sum-return', language: 'go', path: 'mathx/add.go', midProject: false,
    document: 'package mathx\n\nfunc Add(a, b int) int {\n\treturn <|cursor|>\n}\n',
    exact: ['a + b'], expected: ['^\\(?(a \\+ b|b \\+ a)\\)?$'] },
  { id: 'go-import-config', language: 'go', path: 'config/load.go', midProject: true,
    document: 'package config\n\nimport (\n\t"encoding/json"\n\t"os"\n)\n\ntype Config struct {\n\tName string `json:"name"`\n}\n\nfunc Load(path string) (*Config, error) {\n\tdata, err := os.ReadFile(path)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tvar cfg Config\n\tif err := json.Unmarshal(data, &cfg); err != nil {\n\t\treturn nil, err\n\t}\n\treturn <|cursor|>\n}\n',
    exact: ['&cfg, nil'], expected: [] },
  { id: 'go-error-return', language: 'go', path: 'files/size.go', midProject: true,
    document: 'package files\n\nimport "os"\n\nfunc Size(path string) (int64, error) {\n\tinfo, err := os.Stat(path)\n\tif err != nil {\n\t\treturn <|cursor|>\n\t}\n\treturn info.Size(), nil\n}\n',
    exact: ['0, err'], expected: ['^-1, err$', '^0, fmt\\.Errorf\\(.*%w.*, err\\)$'] },
  { id: 'go-strings-fields', language: 'go', path: 'text/words.go', midProject: true,
    document: 'package text\n\nimport "strings"\n\n// Words splits s on whitespace.\nfunc Words(s string) []string {\n\treturn <|cursor|>\n}\n',
    exact: ['strings.Fields(s)'], expected: [] },
  { id: 'go-defer-unlock', language: 'go', path: 'cart/cart.go', midProject: true,
    document: 'package cart\n\nimport "sync"\n\ntype Cart struct {\n\tmu    sync.Mutex\n\titems map[string]int\n}\n\nfunc (c *Cart) Add(name string, quantity int) {\n\tc.mu.Lock()\n\tdefer <|cursor|>\n\tc.items[name] += quantity\n}\n',
    exact: ['c.mu.Unlock()'], expected: [] },
  { id: 'go-range-sum', language: 'go', path: 'stats/sum.go', midProject: false,
    document: 'package stats\n\nfunc Sum(values []float64) float64 {\n\ttotal := 0.0\n\tfor _, value := range values {\n\t\t<|cursor|>\n\t}\n\treturn total\n}\n',
    exact: ['total += value'], expected: ['^total = total \\+ value$'] },

  // Rust
  { id: 'rs-sum-tail', language: 'rust', path: 'src/math.rs', midProject: false,
    document: 'fn add(a: i32, b: i32) -> i32 {\n    <|cursor|>\n}\n',
    exact: ['a + b'], expected: ['^\\(?(a \\+ b|b \\+ a)\\)?$'] },
  { id: 'rs-import-entry', language: 'rust', path: 'src/words.rs', midProject: true,
    document: 'use std::collections::HashMap;\nuse std::fs;\nuse std::io;\n\npub fn word_counts(path: &str) -> io::Result<HashMap<String, usize>> {\n    let text = fs::read_to_string(path)?;\n    let mut counts = HashMap::new();\n    for word in text.split_whitespace() {\n        *counts.entry(word.to_string()).<|cursor|> += 1;\n    }\n    Ok(counts)\n}\n',
    exact: ['or_insert(0)'], expected: ['^or_default\\(\\)$'] },
  { id: 'rs-find-closure', language: 'rust', path: 'src/find.rs', midProject: false,
    document: 'pub fn first_even(values: &[i32]) -> Option<i32> {\n    values.iter().copied().find(<|cursor|>)\n}\n',
    exact: ['|v| v % 2 == 0'], expected: ['^\\|&?(\\w+)\\| \\*?\\1 % 2 == 0$'] },
  { id: 'rs-impl-area', language: 'rust', path: 'src/shape.rs', midProject: false,
    document: 'pub struct Rectangle {\n    pub width: u32,\n    pub height: u32,\n}\n\nimpl Rectangle {\n    pub fn area(&self) -> u32 {\n        <|cursor|>\n    }\n}\n',
    exact: ['self.width * self.height', 'self.height * self.width'], expected: [] },
  { id: 'rs-match-arm', language: 'rust', path: 'src/token.rs', midProject: true,
    document: "use crate::error::ParseError;\n\npub enum Token {\n    Number(f64),\n    Plus,\n    Minus,\n}\n\npub fn symbol(token: &Token) -> Result<char, ParseError> {\n    match token {\n        Token::Plus => Ok('+'),\n        Token::Minus => <|cursor|>,\n        Token::Number(_) => Err(ParseError::NotASymbol),\n    }\n}\n",
    exact: ["Ok('-')"], expected: [] },
  { id: 'rs-map-len', language: 'rust', path: 'src/len.rs', midProject: false,
    document: 'pub fn total_len(words: &[&str]) -> usize {\n    words.iter().map(<|cursor|>).sum()\n}\n',
    exact: ['|word| word.len()'], expected: ['^\\|(\\w+)\\| \\1\\.len\\(\\)$', '^\\|&?(\\w+)\\| \\1\\.len\\(\\)$'] },

  // C
  { id: 'c-sum-return', language: 'c', path: 'src/math.c', midProject: false,
    document: 'int add(int a, int b) {\n    return <|cursor|>;\n}\n',
    exact: ['a + b'], expected: ['^\\(?(a \\+ b|b \\+ a)\\)?$'] },
  { id: 'c-include-vector', language: 'c', path: 'src/vector.c', midProject: true,
    projectFiles: { 'vector.h': '#ifndef VECTOR_H\n#define VECTOR_H\ntypedef struct { double x; double y; } vector;\ndouble vector_length(vector v);\n#endif\n' },
    document: '#include <math.h>\n#include "vector.h"\n\ndouble vector_length(vector v) {\n    return <|cursor|>;\n}\n',
    exact: ['sqrt(v.x * v.x + v.y * v.y)', 'hypot(v.x, v.y)'], expected: [] },
  { id: 'c-loop-accumulate', language: 'c', path: 'src/sum.c', midProject: true,
    document: '#include <stddef.h>\n\nint sum(const int *values, size_t count) {\n    int total = 0;\n    for (size_t i = 0; i < count; i++) {\n        <|cursor|>\n    }\n    return total;\n}\n',
    exact: ['total += values[i];'], expected: ['^total = total \\+ values\\[i\\];$'] },
  { id: 'c-malloc-null', language: 'c', path: 'src/strings.c', midProject: true,
    document: '#include <stdlib.h>\n#include <string.h>\n\nchar *duplicate(const char *text) {\n    size_t length = strlen(text) + 1;\n    char *copy = malloc(length);\n    if (copy == NULL) {\n        return <|cursor|>;\n    }\n    memcpy(copy, text, length);\n    return copy;\n}\n',
    exact: ['NULL'], expected: ['^0$'] },
  { id: 'c-include-list', language: 'c', path: 'src/list.c', midProject: true,
    projectFiles: { 'list.h': '#ifndef LIST_H\n#define LIST_H\nstruct node { int value; struct node *next; };\n#endif\n' },
    document: '#include <stddef.h>\n#include "list.h"\n\nsize_t list_length(const struct node *head) {\n    size_t length = 0;\n    while (head != NULL) {\n        length++;\n        head = <|cursor|>;\n    }\n    return length;\n}\n',
    exact: ['head->next'], expected: [] },
  { id: 'c-printf-format', language: 'c', path: 'src/point.c', midProject: true,
    document: '#include <stdio.h>\n\nvoid print_point(int x, int y) {\n    printf(<|cursor|>);\n}\n',
    exact: ['"(%d, %d)\\n", x, y'], expected: ['^"\\(?%d, ?%d\\)?\\\\n", x, y$'] },
].map(entry => Object.freeze(entry)));

export const corpusLanguages = Object.freeze(['javascript', 'typescript', 'python', 'go', 'rust', 'c']);

export function corpusCase(entry) {
  const offset = entry.document.indexOf(cursorMarker);
  if (offset < 0 || entry.document.indexOf(cursorMarker, offset + 1) >= 0) throw Error(`${entry.id} needs exactly one cursor`);
  const before = entry.document.slice(0, offset), after = entry.document.slice(offset + cursorMarker.length);
  const lines = before.split(/\r\n|\n|\r/);
  return { ...entry, text: before + after, before, after,
    position: { lineNumber: lines.length, column: lines.at(-1).length + 1 } };
}
