
/* Address: 0x1800125dc; Evidence: ev_52a359e6c3b83c6922f5159b894169e6676b94c3c3bfb7128f97846493eac7de */

byte FUN_1800125dc(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) {
      return *(byte *)((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000ad7c();
  }
  return 0;
}

