
/* Address: 0x1800066a8; Evidence: ev_0ff339f4cffc79b2bc33c1024bc152f776bcc84ad490a92a1a21d234f10860b8 */

PVOID FUN_1800066a8(void)

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
      p_Var2 = FUN_1800064d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_18001a098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_180008a1c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800064d8();
    }
  }
  return p_Var2;
}

