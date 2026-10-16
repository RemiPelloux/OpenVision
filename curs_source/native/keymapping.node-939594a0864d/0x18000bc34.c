
/* Address: 0x18000bc34; Evidence: ev_6ac887166158487812e89176786a6a8e645ccf74a38ca4cb5f09d22eba1011bf */

void FUN_18000bc34(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_1800271a8 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_1800271a8);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000baa8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000bc70;
    }
    return;
  }
LAB_18000bc70:
                    /* WARNING: Subroutine does not return */
  abort();
}

