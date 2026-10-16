
/* Address: 0x180013c4c; Evidence: ev_0d4b7c4c6c3b94bbc1f5d95e4c79b8303eadecdab0a342fc114034877d7605c0 */

byte FUN_180013c4c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) {
      return *(byte *)((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000c3ec();
  }
  return 0;
}

