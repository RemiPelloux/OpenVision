
/* Address: 0x180001760; Evidence: ev_e97406e162842aac824c4339dafd3fdf7c92acdbd27caa86926154203da76212 */

undefined8 * FUN_180001760(undefined8 *param_1,uint param_2)

{
  FUN_180002f40(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}

