
/* Address: 0x180006814; Evidence: ev_43a5fbe6ae38504ba0732f8066b40dbd0fed38b0ad14bed65d3e1ab058bccbee */

void FUN_180006814(void)

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
      p_Var2 = FUN_180006688();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_180006850;
    }
    return;
  }
LAB_180006850:
                    /* WARNING: Subroutine does not return */
  abort();
}

