
/* Address: 0x180007774; Evidence: ev_d49b5af77ea28a675c56a142ec715985460b884fe721313a096a36b5c818349b */

void FUN_180007774(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180006170();
  iVar2 = FUN_180006530(param_1,param_2,param_3);
  lVar4 = FUN_180005a98();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180006170();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180006170();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006170();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180006170();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180006584(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006170();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180006170();
        FUN_180006170();
      }
      _CallSettingFrame();
      FUN_180006198(uVar3);
    }
  }
  lVar4 = FUN_180005a98();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180005a98();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180006584(param_1,param_3,iVar2);
  return;
}

