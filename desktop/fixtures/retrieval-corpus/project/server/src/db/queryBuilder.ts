type Primitive = string | number | boolean | null | Date;

interface Condition {
  sql: string;
  values: Primitive[];
}

const IDENTIFIER = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)?$/i;

function quoteIdentifier(name: string): string {
  if (!IDENTIFIER.test(name)) {
    throw new Error(`unsafe identifier: ${name}`);
  }
  return name
    .split(".")
    .map((part) => `"${part}"`)
    .join(".");
}

/**
 * Tiny parameterised SELECT builder for Postgres. Values are always bound as
 * $1, $2, ... placeholders; identifiers are whitelisted by pattern.
 */
export class SelectQuery {
  private columns: string[] = ["*"];
  private conditions: Condition[] = [];
  private orderings: string[] = [];
  private limitValue: number | null = null;
  private offsetValue: number | null = null;

  constructor(private readonly table: string) {}

  select(...columns: string[]): this {
    this.columns = columns.map(quoteIdentifier);
    return this;
  }

  where(column: string, op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "ILIKE", value: Primitive): this {
    this.conditions.push({ sql: `${quoteIdentifier(column)} ${op} ?`, values: [value] });
    return this;
  }

  whereIn(column: string, values: Primitive[]): this {
    if (values.length === 0) {
      this.conditions.push({ sql: "FALSE", values: [] });
      return this;
    }
    const marks = values.map(() => "?").join(", ");
    this.conditions.push({ sql: `${quoteIdentifier(column)} IN (${marks})`, values });
    return this;
  }

  whereAfter(columns: [string, string], values: [Primitive, Primitive]): this {
    const [a, b] = columns.map(quoteIdentifier);
    this.conditions.push({ sql: `(${a}, ${b}) < (?, ?)`, values });
    return this;
  }

  orderBy(column: string, direction: "ASC" | "DESC" = "ASC"): this {
    this.orderings.push(`${quoteIdentifier(column)} ${direction}`);
    return this;
  }

  limit(n: number): this {
    this.limitValue = Math.max(0, Math.floor(n));
    return this;
  }

  offset(n: number): this {
    this.offsetValue = Math.max(0, Math.floor(n));
    return this;
  }

  toSQL(): { text: string; values: Primitive[] } {
    const values: Primitive[] = [];
    let text = `SELECT ${this.columns.join(", ")} FROM ${quoteIdentifier(this.table)}`;
    if (this.conditions.length > 0) {
      const clauses = this.conditions.map((c) => {
        values.push(...c.values);
        return c.sql;
      });
      text += ` WHERE ${clauses.join(" AND ")}`;
    }
    if (this.orderings.length > 0) text += ` ORDER BY ${this.orderings.join(", ")}`;
    if (this.limitValue !== null) text += ` LIMIT ${this.limitValue}`;
    if (this.offsetValue !== null) text += ` OFFSET ${this.offsetValue}`;
    let index = 0;
    text = text.replace(/\?/g, () => `$${++index}`);
    return { text, values };
  }
}

export function insertInto(table: string, row: Record<string, Primitive>): { text: string; values: Primitive[] } {
  const keys = Object.keys(row);
  const cols = keys.map(quoteIdentifier).join(", ");
  const marks = keys.map((_, i) => `$${i + 1}`).join(", ");
  return {
    text: `INSERT INTO ${quoteIdentifier(table)} (${cols}) VALUES (${marks}) RETURNING *`,
    values: keys.map((k) => row[k]),
  };
}
