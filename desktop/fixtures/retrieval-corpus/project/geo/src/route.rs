use crate::distance::{distance_matrix, Coord};

/// The order in which a courier should visit stops, starting from the depot.
#[derive(Debug, Clone, PartialEq)]
pub struct RoutePlan {
    /// Indices into the input stops, in visiting order.
    pub order: Vec<usize>,
    pub total_km: f64,
}

fn tour_length(matrix: &[Vec<f64>], depot: usize, order: &[usize]) -> f64 {
    let mut total = 0.0;
    let mut previous = depot;
    for &stop in order {
        total += matrix[previous][stop];
        previous = stop;
    }
    total + matrix[previous][depot]
}

/// Greedy construction: always drive to the closest unvisited stop.
fn nearest_neighbour_order(matrix: &[Vec<f64>], depot: usize, stops: &[usize]) -> Vec<usize> {
    let mut remaining: Vec<usize> = stops.to_vec();
    let mut order = Vec::with_capacity(stops.len());
    let mut current = depot;
    while !remaining.is_empty() {
        let (pos, _) = remaining
            .iter()
            .enumerate()
            .min_by(|(_, &a), (_, &b)| matrix[current][a].partial_cmp(&matrix[current][b]).unwrap())
            .expect("remaining is not empty");
        current = remaining.swap_remove(pos);
        order.push(current);
    }
    order
}

/// 2-opt local search: reverse segments while doing so shortens the tour.
fn two_opt(matrix: &[Vec<f64>], depot: usize, order: &mut Vec<usize>, max_rounds: usize) {
    let n = order.len();
    if n < 3 {
        return;
    }
    for _ in 0..max_rounds {
        let mut improved = false;
        for i in 0..n - 1 {
            for k in (i + 1)..n {
                let before = if i == 0 { depot } else { order[i - 1] };
                let after = if k + 1 == n { depot } else { order[k + 1] };
                let current = matrix[before][order[i]] + matrix[order[k]][after];
                let swapped = matrix[before][order[k]] + matrix[order[i]][after];
                if swapped + 1e-9 < current {
                    order[i..=k].reverse();
                    improved = true;
                }
            }
        }
        if !improved {
            break;
        }
    }
}

/// Plans a round trip from `depot` through every stop, minimising distance
/// with a nearest-neighbour start followed by 2-opt improvement.
pub fn optimise_route(depot: Coord, stops: &[Coord]) -> RoutePlan {
    let mut points = Vec::with_capacity(stops.len() + 1);
    points.push(depot);
    points.extend_from_slice(stops);
    let matrix = distance_matrix(&points);
    let stop_indices: Vec<usize> = (1..points.len()).collect();

    let mut order = nearest_neighbour_order(&matrix, 0, &stop_indices);
    two_opt(&matrix, 0, &mut order, 50);
    let total_km = tour_length(&matrix, 0, &order);
    RoutePlan {
        order: order.into_iter().map(|i| i - 1).collect(),
        total_km,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn visits_every_stop_once() {
        let depot = Coord { lat: 52.37, lon: 4.90 };
        let stops = [
            Coord { lat: 52.38, lon: 4.95 },
            Coord { lat: 52.30, lon: 4.85 },
            Coord { lat: 52.36, lon: 4.80 },
            Coord { lat: 52.40, lon: 4.88 },
        ];
        let plan = optimise_route(depot, &stops);
        let mut seen = plan.order.clone();
        seen.sort();
        assert_eq!(seen, vec![0, 1, 2, 3]);
        assert!(plan.total_km > 0.0);
    }
}
