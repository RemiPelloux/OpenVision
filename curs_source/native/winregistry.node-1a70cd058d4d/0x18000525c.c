
/* Address: 0x18000525c; Evidence: ev_c414d21f512a555a1c318071c849b0b2d3015cfdaf77572789bb1228ae4a6894 */

undefined8 * FUN_18000525c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

