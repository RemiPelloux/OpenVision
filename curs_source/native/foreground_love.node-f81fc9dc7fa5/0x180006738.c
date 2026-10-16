
/* Address: 0x180006738; Evidence: ev_079e30609920361b82ebd3441c279b5f851740f4c07bdc83091de20f6f129a85 */

__acrt_ptd * FUN_180006738(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_18001a098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_18001a098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800064d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

