
/* Address: 0x1800036b8; Evidence: ev_ce4b26aa7a0531662c7c9ec382fce51a4d8155c4b116fd59ae2e950df8b7b6a5 */

longlong FUN_1800036b8(longlong param_1,int *param_2)

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

