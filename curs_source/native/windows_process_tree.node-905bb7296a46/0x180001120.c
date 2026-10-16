
/* Address: 0x180001120; Evidence: ev_0ade013bbb4d3abd2ca78dbaf2bbcd8f2dcb7b76a0cb2e39a1e91e024ad2c72f */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

