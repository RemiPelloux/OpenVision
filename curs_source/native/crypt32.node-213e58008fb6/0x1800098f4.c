
/* Address: 0x1800098f4; Evidence: ev_8bdb18495bb861ced79f42a26b353335ef3f13909b9b434d54043ede9fbfb5b0 */

void FUN_1800098f4(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180006750();
  iVar2 = FUN_180007030(param_1,param_2,param_3);
  lVar4 = FUN_180006ed8();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180006750();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180006750();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006750();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180006750();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180007084(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006750();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180006750();
        FUN_180006750();
      }
      _CallSettingFrame();
      FUN_180006778(uVar3);
    }
  }
  lVar4 = FUN_180006ed8();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180006ed8();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180007084(param_1,param_3,iVar2);
  return;
}

