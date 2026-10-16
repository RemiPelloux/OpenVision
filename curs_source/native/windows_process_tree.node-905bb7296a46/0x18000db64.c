
/* Address: 0x18000db64; Evidence: ev_b25304f49a9deaf2e06ffe45fab4886bc222887b5da9e090e05ae5664a8c8707 */

void FUN_18000db64(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180023098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180023098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000d9d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000dba0;
    }
    return;
  }
LAB_18000dba0:
                    /* WARNING: Subroutine does not return */
  abort();
}

