
/* Address: 0x18000c5c8; Evidence: ev_abd80d089a740f2d387c7b84d6a4e06c494193ac0f2da053baae6340393d51d3 */

__acrt_ptd * FUN_18000c5c8(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180021098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180021098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000c368(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

