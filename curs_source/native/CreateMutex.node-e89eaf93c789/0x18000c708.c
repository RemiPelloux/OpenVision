
/* Address: 0x18000c708; Evidence: ev_4ce9a509cc2f70f5d091a87ca96ccde3616a0053be57e8688cf28f2427d4ab94 */

void FUN_18000c708(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180022098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180022098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180022098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000cbe0(p_Var1);
  }
  return;
}

