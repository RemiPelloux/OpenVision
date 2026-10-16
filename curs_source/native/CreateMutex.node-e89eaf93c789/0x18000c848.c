
/* Address: 0x18000c848; Evidence: ev_31d0c10ad6d6c8d0635a468460cd89777b4101cce68ac28598b963b0aa618029 */

__acrt_ptd * FUN_18000c848(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180022098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180022098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000c5e8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

