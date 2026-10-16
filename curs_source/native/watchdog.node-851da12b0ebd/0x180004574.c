
/* Address: 0x180004574; Evidence: ev_29b849128f3f9427a9c880a506595f4160b69a1a47ea835d921d21fdd295aca1 */

void FUN_180004574(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180002ed0();
  iVar2 = FUN_180003290(param_1,param_2,param_3);
  lVar4 = FUN_1800027f8();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180002ed0();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180002ed0();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002ed0();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180002ed0();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_1800032e4(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002ed0();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180002ed0();
        FUN_180002ed0();
      }
      _CallSettingFrame();
      FUN_180002ef8(uVar3);
    }
  }
  lVar4 = FUN_1800027f8();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_1800027f8();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_1800032e4(param_1,param_3,iVar2);
  return;
}

