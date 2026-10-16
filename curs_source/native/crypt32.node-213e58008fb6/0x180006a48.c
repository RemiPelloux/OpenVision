
/* Address: 0x180006a48; Evidence: ev_142f91b699842565053180e7d4ab05a088c9ef61120c7dede656d1c5cd1687b7 */

longlong FUN_180006a48(longlong param_1,int *param_2)

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

