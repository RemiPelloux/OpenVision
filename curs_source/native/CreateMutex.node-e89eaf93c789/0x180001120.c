
/* Address: 0x180001120; Evidence: ev_b7b6ed46b814ede135f3ad89b0609ce225d3a74f8d71d578fc739ac587a83437 */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

