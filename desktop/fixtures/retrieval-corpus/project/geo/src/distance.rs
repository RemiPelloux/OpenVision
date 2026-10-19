/// A WGS84 coordinate in decimal degrees.
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct Coord {
    pub lat: f64,
    pub lon: f64,
}

impl Coord {
    pub fn new(lat: f64, lon: f64) -> Option<Coord> {
        if (-90.0..=90.0).contains(&lat) && (-180.0..=180.0).contains(&lon) {
            Some(Coord { lat, lon })
        } else {
            None
        }
    }
}

pub const EARTH_RADIUS_KM: f64 = 6371.0088;

/// Great-circle distance in kilometres using the haversine formula.
pub fn haversine_km(a: Coord, b: Coord) -> f64 {
    let d_lat = (b.lat - a.lat).to_radians();
    let d_lon = (b.lon - a.lon).to_radians();
    let h = (d_lat / 2.0).sin().powi(2)
        + a.lat.to_radians().cos() * b.lat.to_radians().cos() * (d_lon / 2.0).sin().powi(2);
    2.0 * EARTH_RADIUS_KM * h.sqrt().min(1.0).asin()
}

/// Initial compass bearing from `a` towards `b`, in degrees 0..360.
pub fn initial_bearing_deg(a: Coord, b: Coord) -> f64 {
    let (lat1, lat2) = (a.lat.to_radians(), b.lat.to_radians());
    let d_lon = (b.lon - a.lon).to_radians();
    let y = d_lon.sin() * lat2.cos();
    let x = lat1.cos() * lat2.sin() - lat1.sin() * lat2.cos() * d_lon.cos();
    (y.atan2(x).to_degrees() + 360.0) % 360.0
}

/// Pairwise distance matrix, symmetric with zeros on the diagonal.
pub fn distance_matrix(points: &[Coord]) -> Vec<Vec<f64>> {
    let n = points.len();
    let mut matrix = vec![vec![0.0; n]; n];
    for i in 0..n {
        for j in (i + 1)..n {
            let d = haversine_km(points[i], points[j]);
            matrix[i][j] = d;
            matrix[j][i] = d;
        }
    }
    matrix
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn amsterdam_to_rotterdam_is_about_57_km() {
        let ams = Coord::new(52.3676, 4.9041).unwrap();
        let rtm = Coord::new(51.9244, 4.4777).unwrap();
        let d = haversine_km(ams, rtm);
        assert!((d - 57.0).abs() < 1.5, "got {d}");
    }

    #[test]
    fn rejects_out_of_range() {
        assert!(Coord::new(91.0, 0.0).is_none());
    }
}
