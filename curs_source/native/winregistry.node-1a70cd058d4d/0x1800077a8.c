
/* Address: 0x1800077a8; Evidence: ev_a1cb0ad63f32de8521cbf67495561ee3a0ff66d06f24f59b8ef2c8ab0f30d3b2 */

__acrt_ptd * FUN_1800077a8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001c3c8 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_18001b098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_18001b098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800075d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_18001b098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_180009b7c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800075d8();
    }
  }
  return p_Var2;
}

