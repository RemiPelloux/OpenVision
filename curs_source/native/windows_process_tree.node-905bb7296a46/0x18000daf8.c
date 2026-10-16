
/* Address: 0x18000daf8; Evidence: ev_0acd781884ea3bb88f1ed7408b36eb9109a7d971694a0b559b1fdbc0a2b141d8 */

void FUN_18000daf8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180023098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180023098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180023098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000dfd0(p_Var1);
  }
  return;
}

