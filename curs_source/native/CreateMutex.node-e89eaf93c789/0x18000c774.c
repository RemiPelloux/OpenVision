
/* Address: 0x18000c774; Evidence: ev_005cfdbee8e83aa6590a3193e5a09985be199e9f7df73ed85140c178f79f4e2b */

void FUN_18000c774(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180022098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180022098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000c5e8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000c7b0;
    }
    return;
  }
LAB_18000c7b0:
                    /* WARNING: Subroutine does not return */
  abort();
}

