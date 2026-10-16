
/* Address: 0x18000be50; Evidence: ev_132b36c92c3d5a196b2216a2cc708cdc1fc2bd2b8e0b4b3b02f9a3d06ade0166 */

void FUN_18000be50(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_180028bd0) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000fdf0();
    *param_2 = lVar1;
  }
  return;
}

