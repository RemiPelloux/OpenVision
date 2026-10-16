
/* Address: 0x180002388; Evidence: ev_3efaf39c416d785821687419066377dc4bc6be97137201503f6b99785eac9fe3 */

longlong FUN_180002388(longlong param_1,int *param_2)

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

