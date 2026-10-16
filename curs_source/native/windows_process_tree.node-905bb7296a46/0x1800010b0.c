
/* Address: 0x1800010b0; Evidence: ev_d0c2637a36351d96cabdf6c86d4f2c3a5e93b134fa031553d7fe43646513aeed */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}

