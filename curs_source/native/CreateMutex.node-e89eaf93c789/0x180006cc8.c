
/* Address: 0x180006cc8; Evidence: ev_6b333530caf8a8973b19edfc097afe81e71017c0d407c6d32b62a10c10662095 */

longlong FUN_180006cc8(longlong param_1,int *param_2)

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

