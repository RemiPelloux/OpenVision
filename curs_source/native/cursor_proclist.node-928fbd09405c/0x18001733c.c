
/* Address: 0x18001733c; Evidence: ev_8c1a523682ee3cbb1d615896cdd9f767600245eef6df92cb482bfa0330e909c9 */

byte FUN_18001733c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180029d20)) {
      return *(byte *)((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000f91c();
  }
  return 0;
}

