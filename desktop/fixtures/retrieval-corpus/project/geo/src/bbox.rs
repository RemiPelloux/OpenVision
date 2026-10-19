use crate::distance::{Coord, EARTH_RADIUS_KM};

/// Axis-aligned latitude/longitude rectangle used to prefilter depots.
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct BoundingBox {
    pub min_lat: f64,
    pub min_lon: f64,
    pub max_lat: f64,
    pub max_lon: f64,
}

impl BoundingBox {
    /// Smallest box that contains a circle of `radius_km` around `center`.
    pub fn around(center: Coord, radius_km: f64) -> BoundingBox {
        let d_lat = (radius_km / EARTH_RADIUS_KM).to_degrees();
        let d_lon = (radius_km / (EARTH_RADIUS_KM * center.lat.to_radians().cos())).to_degrees();
        BoundingBox {
            min_lat: (center.lat - d_lat).max(-90.0),
            max_lat: (center.lat + d_lat).min(90.0),
            min_lon: center.lon - d_lon,
            max_lon: center.lon + d_lon,
        }
    }

    pub fn contains(&self, point: Coord) -> bool {
        point.lat >= self.min_lat && point.lat <= self.max_lat && point.lon >= self.min_lon && point.lon <= self.max_lon
    }
}
