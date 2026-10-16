
/* Address: 0x18000c488; Evidence: ev_9ec6464a1afbc7330ff26eb6b8970a937236a0ec0062e3a2f0182a14011eaff5 */

void FUN_18000c488(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180021098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180021098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180021098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000c960(p_Var1);
  }
  return;
}

