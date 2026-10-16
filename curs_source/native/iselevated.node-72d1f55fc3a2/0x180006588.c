
/* Address: 0x180006588; Evidence: ev_6e7ce91480a573da224b84243353d1bc6185b5c296db27be87c04075716c9964 */

__acrt_ptd * FUN_180006588(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001a300 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180019098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180019098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800063b8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180019098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_1800088fc();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800063b8();
    }
  }
  return p_Var2;
}

