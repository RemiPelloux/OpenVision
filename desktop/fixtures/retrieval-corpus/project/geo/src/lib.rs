//! Geographic helpers used by the dispatch service to plan courier rounds.

pub mod bbox;
pub mod distance;
pub mod route;

pub use distance::{haversine_km, Coord};
pub use route::{optimise_route, RoutePlan};
