
/* Address: 0x1800141a0; Evidence: ev_f5cb6e6df4d9b9a617f13fc076940b581e044da31ca8fe60db3c03eb2b408c21 */

byte FUN_1800141a0(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180028920)) {
      return *(byte *)((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000821c();
  }
  return 0;
}

