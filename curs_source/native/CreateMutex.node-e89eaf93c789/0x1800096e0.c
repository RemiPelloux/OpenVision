
/* Address: 0x1800096e0; Evidence: ev_db7269df209ec367bff09853f2b8a3cdee7298bd8a2c3c44ca57abc4bfe66630 */

longlong FUN_1800096e0(longlong param_1)

{
  undefined4 uVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  int *piVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  undefined8 *puVar8;
  longlong local_58 [4];
  
  lVar6 = FUN_180007158();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180007158();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_180007158();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_180007158();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_180007158();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180007158();
  }
  lVar6 = FUN_18000a8e0();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000a910();
  FUN_18000697c((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_180006c20(piVar4);
  }
  lVar7 = FUN_180007158();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_180007158();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_180007158();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_180007158();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}

