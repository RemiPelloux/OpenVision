
/* Address: 0x18000bbc8; Evidence: ev_f141d85033c2d8806d98539c4d9caa872b1940723b2ddb11565bf0ffb6e7aa27 */

void FUN_18000bbc8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_1800271a8 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_1800271a8);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_1800271a8,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000bff0(p_Var1);
  }
  return;
}

