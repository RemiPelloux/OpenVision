
/* Address: 0x1800064d8; Evidence: ev_559fbdceecc6b5528372eb98aac48234ae1cbdd93d6097175995182a3c50a886 */

void FUN_1800064d8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180019098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180019098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180019098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180006a30(p_Var1);
  }
  return;
}

