CREATE TABLE customers (
  id uuid PRIMARY KEY,
  display_name text NOT NULL,
  email text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  preferred_locale text NOT NULL DEFAULT 'en',
  time_zone text NOT NULL DEFAULT 'UTC',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE shipments (
  id uuid PRIMARY KEY,
  tracking_number text NOT NULL UNIQUE,
  customer_id uuid NOT NULL REFERENCES customers (id),
  status text NOT NULL CHECK (status IN ('created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered', 'failed')),
  weight_grams integer NOT NULL CHECK (weight_grams > 0),
  price_minor integer NOT NULL,
  currency char(3) NOT NULL,
  destination_lat double precision NOT NULL,
  destination_lon double precision NOT NULL,
  promised_by timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX shipments_customer_created_idx ON shipments (customer_id, created_at DESC, id DESC);
