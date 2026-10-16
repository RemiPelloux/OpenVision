
/* Address: 0x180006544; Evidence: ev_6c3476b57e56da5ae1a0a7dbeb860f84fc94600d24ad43eb8e9db9f8ec572982 */

void FUN_180006544(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180019098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180019098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800063b8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_180006580;
    }
    return;
  }
LAB_180006580:
                    /* WARNING: Subroutine does not return */
  abort();
}

