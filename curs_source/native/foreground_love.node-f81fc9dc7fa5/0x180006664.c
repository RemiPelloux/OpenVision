
/* Address: 0x180006664; Evidence: ev_e0a9f7513ed11bc8e0bc57c1b57ee24f7f6cf64f50b2d7708155bf0f75632668 */

void FUN_180006664(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_18001a098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_18001a098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800064d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800066a0;
    }
    return;
  }
LAB_1800066a0:
                    /* WARNING: Subroutine does not return */
  abort();
}

