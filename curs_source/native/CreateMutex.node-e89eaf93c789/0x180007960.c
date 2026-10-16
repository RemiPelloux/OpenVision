
/* Address: 0x180007960; Evidence: ev_ff4d32bf8ec3f7bc243d150ce5967a29908862a4ccdf15add10c710852157bb9 */

void FUN_180007960(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
  cVar1 = FUN_1800076a8(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2b8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2c4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}

