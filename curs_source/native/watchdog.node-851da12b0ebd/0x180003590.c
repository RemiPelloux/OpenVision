
/* Address: 0x180003590; Evidence: ev_19d12bb2f1613d2bf65402028826700c9278fd32c2831f99ac5c33b93329250c */

void FUN_180003590(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_18000339c(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180002648(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002ee4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000490c(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180002648(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002ee4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180004918(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}

