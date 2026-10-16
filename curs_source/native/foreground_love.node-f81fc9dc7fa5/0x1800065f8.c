
/* Address: 0x1800065f8; Evidence: ev_7f10811ba1e9def5c647fd66161195b9d8a523902f13d2b9eae4f38406240da6 */

void FUN_1800065f8(void)

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
    FUN_180006b50(p_Var1);
  }
  return;
}

