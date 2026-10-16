
/* Address: 0x1800068e8; Evidence: ev_ac6ac897d73a4686bb4644352e7c3e05edf7f12b009f7f8890ba15cfb283fd8e */

__acrt_ptd * FUN_1800068e8(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_18001a098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_18001a098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_180006688(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}

