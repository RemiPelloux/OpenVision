
/* Address: 0x18000bc78; Evidence: ev_2e06a053ecc65b7ad77c474897f8b83ca32295787bedf447d1c8b11ee0150167 */

__acrt_ptd * FUN_18000bc78(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180028448 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_1800271a8 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_1800271a8);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000baa8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_1800271a8 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000c2bc();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000baa8();
    }
  }
  return p_Var2;
}

