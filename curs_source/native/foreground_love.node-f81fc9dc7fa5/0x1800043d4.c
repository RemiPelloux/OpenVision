
/* Address: 0x1800043d4; Evidence: ev_d40fa2ab9a621aa5773bea900d28b738e10a5967090932e63892d9124c252362 */

void FUN_1800043d4(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180002d30();
  iVar2 = FUN_1800030f0(param_1,param_2,param_3);
  lVar4 = FUN_180002658();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180002d30();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180002d30();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002d30();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180002d30();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180003144(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002d30();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180002d30();
        FUN_180002d30();
      }
      _CallSettingFrame();
      FUN_180002d58(uVar3);
    }
  }
  lVar4 = FUN_180002658();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180002658();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180003144(param_1,param_3,iVar2);
  return;
}

