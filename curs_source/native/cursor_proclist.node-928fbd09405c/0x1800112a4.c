
/* Address: 0x1800112a4; Evidence: ev_91d9129354414edeaec4e48ebdd90a1be234d84b2e276d975a99fa5bda29a9fc */

void FUN_1800112a4(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_1800280d8 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_1800280d8);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_180011118();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800112e0;
    }
    return;
  }
LAB_1800112e0:
                    /* WARNING: Subroutine does not return */
  abort();
}

