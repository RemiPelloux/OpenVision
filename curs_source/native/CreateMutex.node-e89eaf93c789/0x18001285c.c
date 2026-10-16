
/* Address: 0x18001285c; Evidence: ev_5c5b18663d8fba47aab68d281203c501898c44fc24e3bae3e132f4f7c220ec95 */

byte FUN_18001285c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) {
      return *(byte *)((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000affc();
  }
  return 0;
}

