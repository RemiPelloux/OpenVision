
/* Address: 0x18000ca0c; Evidence: ev_3442a4e60354b8eaf205e86b05456716e7eee3a80d52b961edaf513f7e608c51 */

byte FUN_18000ca0c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180006350();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      return *(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_180006350();
    *(undefined4 *)p_Var1 = 9;
    FUN_1800061a8();
  }
  return 0;
}

