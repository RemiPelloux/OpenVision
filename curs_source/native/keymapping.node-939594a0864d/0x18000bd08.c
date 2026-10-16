
/* Address: 0x18000bd08; Evidence: ev_1756fc68be4749ce0989c6c0ce390f02f661175e40f1fb1a7f1535c6df204862 */

__acrt_ptd * FUN_18000bd08(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_1800271a8 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_1800271a8);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000baa8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

