
/* Address: 0x180006618; Evidence: ev_ce687fa02fd68749e4f422649343d9c5f4e028726fc827c4f0f70ef7c3f88c3b */

__acrt_ptd * FUN_180006618(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180019098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180019098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800063b8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

