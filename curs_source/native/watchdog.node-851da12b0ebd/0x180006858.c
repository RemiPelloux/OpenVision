
/* Address: 0x180006858; Evidence: ev_53359681da61b2be31fc7d814ded11e0ee541dc3762e42433acc6288abaa071a */

__acrt_ptd * FUN_180006858(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001b300 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_18001a098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_18001a098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180006688();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_18001a098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_180008bcc();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180006688();
    }
  }
  return p_Var2;
}

