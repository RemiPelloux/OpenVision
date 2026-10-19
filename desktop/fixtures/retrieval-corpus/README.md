# Retrieval relevance corpus

A pinned, synthetic code base plus a set of labelled queries, used to measure
the quality of the local code-search engine.

- `project/` is "Harbor", a fictional parcel-tracking service. All of its code
  and docs were written for this repository; nothing is copied from third-party
  projects. It contains 74 text files (about 3,860 lines) in TypeScript,
  JavaScript, Python, Go, Rust, Java, CSS, shell, SQL, Markdown, JSON, YAML and
  TOML. Several concepts (retry/backoff, haversine distance, price rounding,
  CSV escaping, config from environment) exist in more than one language, and
  some files (tests, docs) mention concepts without implementing them.
- `queries.json` holds 50 queries: 25 natural-language questions, 12
  identifier lookups, 8 mixed identifier-plus-intent queries and 5
  path/component queries.

Licence: Written for OpenVision's test suite; same licence as the repository.

## Query schema

```json
{
  "id": "q01",
  "query": "where do we verify the signature of access tokens",
  "kind": "natural | identifier | mixed | path",
  "expected": [{ "path": "server/src/auth/tokenSigner.ts", "startLine": 67, "endLine": 97 }]
}
```

`path` is relative to `project/` with POSIX separators. Each query lists 1 to
3 relevant spans; `startLine` and `endLine` are 1-based and inclusive, running
from the declaration line of the function, method, class or CSS block to its
last line. Every span was checked by reading the files back.

Do not edit files under `project/` without updating the affected spans.
