
/* Address: 0x18000b3fc; Evidence: ev_38a86c0dbf4f6911895832a319d6a0af9b0d884e78fecfb7caeba040f465aef2 */

int FUN_18000b3fc(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000873c(param_3,param_2);
  FUN_180007538(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_1800086f4(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}

