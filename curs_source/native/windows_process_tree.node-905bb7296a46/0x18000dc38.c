
/* Address: 0x18000dc38; Evidence: ev_6308a1c2bd55612b3de5f8d170342812acf79b2ca85f0003d59844b6d5ed3d63 */

__acrt_ptd * FUN_18000dc38(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180023098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180023098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000d9d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

