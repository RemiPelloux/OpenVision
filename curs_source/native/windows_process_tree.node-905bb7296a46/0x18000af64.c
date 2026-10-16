
/* Address: 0x18000af64; Evidence: ev_d80da2b3d1cf6b4c7532c2961603e21be17ac0673760cad7da73dd607eb8058c */

void FUN_18000af64(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180007da0();
  iVar2 = FUN_1800086a0(param_1,param_2,param_3);
  lVar4 = FUN_180008548();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180007da0();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180007da0();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180007da0();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180007da0();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_1800086f4(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180007da0();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180007da0();
        FUN_180007da0();
      }
      _CallSettingFrame();
      FUN_180007dc8(uVar3);
    }
  }
  lVar4 = FUN_180008548();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180008548();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_1800086f4(param_1,param_3,iVar2);
  return;
}

