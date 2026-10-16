
/* Address: 0x18000aad0; Evidence: ev_c73407b12712389bc85ddbe616156a579988eb6f82ff4688fee44cf401c25976 */

longlong FUN_18000aad0(longlong param_1)

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
  
  lVar6 = FUN_180008548();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180008548();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_180008548();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_180008548();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_180008548();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180008548();
  }
  lVar6 = FUN_18000bcd0();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000bd00();
  FUN_180007d4c((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_180007ff0(piVar4);
  }
  lVar7 = FUN_180008548();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_180008548();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_180008548();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_180008548();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}

