
/* Address: 0x180008098; Evidence: ev_e6cb2228832bf34c41341be8300eb0e4990f7b9aaa84d10462c5a33aee8cc273 */

longlong FUN_180008098(longlong param_1,int *param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = param_2[1];
  lVar2 = *param_2 + param_1;
  if (-1 < iVar1) {
    lVar2 = lVar2 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(iVar1 + param_1)) +
                    (longlong)iVar1;
  }
  return lVar2;
}

