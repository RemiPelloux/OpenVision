
/* Address: 0x180011950; Evidence: ev_a30cd75a9f79504fdbaadf293f24884622f78f65c7c9f6515582f880c63479d6 */

undefined8 FUN_180011950(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c290();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) {
      if ((*(byte *)((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000c290();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000affc();
  }
  return 0xffffffffffffffff;
}

