
/* Address: 0x1800042a0; Evidence: ev_d30c82612644002a23076a67c0d4a143e73b97a306f27b1c7eb751dd449c80ed */

undefined8 * FUN_1800042a0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180004a50(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006d00(param_1);
  }
  return param_1;
}

