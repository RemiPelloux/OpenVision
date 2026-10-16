
/* Address: 0x180002648; Evidence: ev_b99543ca3e4031ee3891ee6e332c004586d3300182859de8c2c04ed4390563dd */

longlong FUN_180002648(longlong param_1,int *param_2)

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

