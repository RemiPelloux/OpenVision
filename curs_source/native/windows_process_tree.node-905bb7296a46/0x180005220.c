
/* Address: 0x180005220; Evidence: ev_13efe194f5e1324ece55f7bd837625ddc2efcd094c3ecb9a7d57c94de061af9e */

undefined8 * FUN_180005220(undefined8 *param_1,uint param_2)

{
  *param_1 = &PTR_FUN_18001f2b8;
  FUN_1800059e0(param_1 + 0xe);
  FUN_180003af0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}

