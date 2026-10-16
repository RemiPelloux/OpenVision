
/* Address: 0x180007980; Evidence: ev_835d55e3fa6e050ea61c6060cef318dce2fde93235ad32080a817a5ae2f258e6 */

void FUN_180007980(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001c650) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180009240();
    *param_2 = lVar1;
  }
  return;
}

