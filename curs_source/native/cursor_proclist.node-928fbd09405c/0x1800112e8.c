
/* Address: 0x1800112e8; Evidence: ev_fd5cf20d7146186d7494d0575798f54a06f8410b0e060b83b3869227e4ced1f7 */

__acrt_ptd * FUN_1800112e8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180029598 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_1800280d8 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_1800280d8);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180011118();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_1800280d8 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18001367c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180011118();
    }
  }
  return p_Var2;
}

