
/* Address: 0x18000dba8; Evidence: ev_429b1177dd87f39ed2cfd20b4056a267717035b19f9bd6d177d95d632f674627 */

__acrt_ptd * FUN_18000dba8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180024468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180023098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180023098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000d9d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180023098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000ff7c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000d9d8();
    }
  }
  return p_Var2;
}

