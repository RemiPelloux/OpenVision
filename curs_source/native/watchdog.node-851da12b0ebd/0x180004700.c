
/* Address: 0x180004700; Evidence: ev_651a6ed6f4298f91e28efb43213b190a837cbcae3ab880a67c9a1063f2d3888d */

int FUN_180004700(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000332c(param_3,param_2);
  FUN_180002b18(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_1800032e4(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}

