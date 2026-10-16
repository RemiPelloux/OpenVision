
/* Address: 0x18000c7b8; Evidence: ev_0bc4f370dc0dd01e72547501c68726abc6ee23d1e051f67406f45e98a8bb17c8 */

__acrt_ptd * FUN_18000c7b8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180023468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180022098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180022098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c5e8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180022098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000eb8c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c5e8();
    }
  }
  return p_Var2;
}

