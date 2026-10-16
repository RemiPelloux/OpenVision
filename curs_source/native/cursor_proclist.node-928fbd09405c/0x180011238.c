
/* Address: 0x180011238; Evidence: ev_23d484a804e4dec29ce37130b872f2ba9b0347938fde0612867d745f340308d8 */

void FUN_180011238(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_1800280d8 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_1800280d8);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_1800280d8,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_1800116e0(p_Var1);
  }
  return;
}

