
/* Address: 0x180001120; Evidence: ev_544721d96a45e90d4434fc3e9f3998620ec30676c6f528e42ff9ca7526f44ebc */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

