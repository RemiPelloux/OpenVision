
/* Address: 0x180002724; Evidence: ev_05985162ab49f6a67da05e5dbca0a0d893b72faf9455ffaa6b22b8530f0a70bd */

undefined8 * FUN_180002724(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

