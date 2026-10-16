
/* Address: 0x180004100; Evidence: ev_731dc27ede08065da3194b1f6425b41007f24fec27957e0fc96d44da961f9173 */

undefined8 * FUN_180004100(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_1800048b0(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006b50(param_1);
  }
  return param_1;
}

