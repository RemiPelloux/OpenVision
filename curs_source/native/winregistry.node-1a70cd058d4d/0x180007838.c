
/* Address: 0x180007838; Evidence: ev_a9871b042a7f205f1f821332576f25e0d02cb80916d1378c1df35af45a8f5311 */

__acrt_ptd * FUN_180007838(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_18001b098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_18001b098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800075d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

