
/* Address: 0x180008c90; Evidence: ev_ea4b547076d996a7888e648654a24976861458e844b03d1c32db8fcd1270e0a2 */

void FUN_180008c90(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_1800088a4(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6a8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6b4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}

