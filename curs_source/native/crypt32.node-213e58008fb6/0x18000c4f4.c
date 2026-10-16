
/* Address: 0x18000c4f4; Evidence: ev_fed810f2b29255f38e3559f544fbb3435fa92c60d5472066ceafd285874b0fa2 */

void FUN_18000c4f4(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180021098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180021098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000c368();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000c530;
    }
    return;
  }
LAB_18000c530:
                    /* WARNING: Subroutine does not return */
  abort();
}

