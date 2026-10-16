
/* Address: 0x180011378; Evidence: ev_b5bc6acb2c65b46be4a8aa6a2fb186a644272a1483c07890d995c2dab05787de */

__acrt_ptd * FUN_180011378(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_1800280d8 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_1800280d8);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_180011118(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

