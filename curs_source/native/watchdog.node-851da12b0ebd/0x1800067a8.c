
/* Address: 0x1800067a8; Evidence: ev_9a28e943c6dc418bbd7baf436def318374404fc480a9265833e2eb283d90f4d5 */

void FUN_1800067a8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_18001a098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_18001a098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_18001a098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180006d00(p_Var1);
  }
  return;
}

