
/* Address: 0x180012478; Evidence: ev_660bd98d1274dd9c517e2de14dbdf5e22eba75c02d8ed246b3e2fc3c345703e6 */

undefined8 FUN_180012478(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000b750();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180028920)) {
      if ((*(byte *)((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000b750();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000821c();
  }
  return 0xffffffffffffffff;
}

