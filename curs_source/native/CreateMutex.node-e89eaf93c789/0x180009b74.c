
/* Address: 0x180009b74; Evidence: ev_7f4212cb861c84cc158bf2ae0c4abef653061ac9b5edb9a8febe4b4c5aeda1cd */

void FUN_180009b74(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_1800069d0();
  iVar2 = FUN_1800072b0(param_1,param_2,param_3);
  lVar4 = FUN_180007158();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_1800069d0();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_1800069d0();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_1800069d0();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_1800069d0();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180007304(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_1800069d0();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_1800069d0();
        FUN_1800069d0();
      }
      _CallSettingFrame();
      FUN_1800069f8(uVar3);
    }
  }
  lVar4 = FUN_180007158();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180007158();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180007304(param_1,param_3,iVar2);
  return;
}

