
/* Address: 0x180009490; Evidence: ev_0f6a60a7cadec6fd753640e821a3449712d9b526d15974645e46130f3d33b0ec */

undefined8 * FUN_180009490(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

