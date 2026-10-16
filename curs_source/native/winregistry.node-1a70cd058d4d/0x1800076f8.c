
/* Address: 0x1800076f8; Evidence: ev_3171db1c8bc2d6f18977de1d535fe428eed5c544c0670cdd887804d76605d5df */

void FUN_1800076f8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_18001b098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_18001b098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_18001b098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180007bd0(p_Var1);
  }
  return;
}

