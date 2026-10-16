
/* Address: 0x18000de20; Evidence: ev_201cc3b993f24d2ff50cd1e18dc656bf4bca177b09dc717b3569b97a9efdc9f3 */

undefined8 FUN_18000de20(longlong param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  int *piVar3;
  longlong *plVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  longlong lVar8;
  undefined8 *puVar9;
  undefined8 uVar10;
  undefined8 local_48 [2];
  
  lVar6 = FUN_18000babc();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_18000babc();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_18000babc();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_18000babc();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_18000babc();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_18000babc();
  }
  uVar10 = _CallSettingFrame();
  FUN_18000b2c8((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_18000b4ec(piVar3);
  }
  lVar8 = FUN_18000babc();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_18000babc();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}

