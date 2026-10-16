
/* Address: 0x180006830; Evidence: ev_198f519139aee36652a9b7c1ed7e409e03493ebf1d696acd6c957e1ce5b5a0fb */

void FUN_180006830(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  undefined1 (*pauVar5) [32];
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  pauVar5 = param_2;
  if (-1 < *(int *)param_3) {
    pauVar5 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  cVar1 = FUN_18000663c(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_1800058e8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006184();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180007b0c(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_1800058e8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006184();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180007b18(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}

