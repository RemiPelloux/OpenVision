
/* Address: 0x1800076e0; Evidence: ev_a080c7495b85b9e1218a9028821b050f84e2e5bccb073c12fc5ee71fd2677dad */

void FUN_1800076e0(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
  if (-1 < *(int *)(param_3 + 4)) {
    pauVar5 = (undefined1 (*) [32])((ulonglong)*(uint *)(param_3 + 0xc) + *(longlong *)*param_2);
  }
  cVar1 = FUN_180007428(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a038(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a044(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}

