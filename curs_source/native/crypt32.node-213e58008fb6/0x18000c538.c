
/* Address: 0x18000c538; Evidence: ev_5d8124df0accf82ad5ac05685acb4feeb42cffc18d7d39699a80f8e674791260 */

__acrt_ptd * FUN_18000c538(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180022468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180021098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180021098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c368();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180021098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000e90c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c368();
    }
  }
  return p_Var2;
}

