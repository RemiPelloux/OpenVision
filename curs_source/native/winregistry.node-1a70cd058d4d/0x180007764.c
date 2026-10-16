
/* Address: 0x180007764; Evidence: ev_7af58b165f2dcf87f96831ee82d430f60f9d820f5d40dfa859128915fcb15753 */

void FUN_180007764(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_18001b098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_18001b098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800075d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800077a0;
    }
    return;
  }
LAB_1800077a0:
                    /* WARNING: Subroutine does not return */
  abort();
}

