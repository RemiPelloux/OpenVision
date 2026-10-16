
/* Address: 0x18000c990; Evidence: ev_635fa3c29575ff4b37a00bc1f3f49519457bb4b04dd29bd8875b05fa3b36f320 */

void FUN_18000c990(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800236f0) && ((DAT_180022858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000e250();
    *param_2 = lVar1;
  }
  return;
}

