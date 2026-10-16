
/* Address: 0x180009d8c; Evidence: ev_523583a845854ab594411a07386dc84d037c3a5497b55e62d5116a2720d6cd57 */

int FUN_180009d8c(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_1800070cc(param_3,param_2);
  FUN_180005ee8(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180007084(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}

