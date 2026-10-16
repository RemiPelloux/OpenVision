
/* Address: 0x180004b50; Evidence: ev_83508bf3242b38ebe64d575fc4bbe5636a6117739c2cf976d3db8fa3e17e0ea4 */

undefined8 * FUN_180004b50(longlong *param_1,undefined1 (*param_2) [32],undefined8 *param_3)

{
  longlong lVar1;
  undefined1 (*pauVar2) [32];
  LPVOID pvVar3;
  code *pcVar4;
  undefined8 uVar5;
  undefined1 (*pauVar6) [32];
  undefined8 *puVar7;
  ulonglong uVar8;
  undefined1 (*pauVar9) [32];
  LPVOID pvVar10;
  longlong lVar11;
  ulonglong uVar12;
  ulonglong uVar13;
  
  lVar1 = *param_1;
  lVar11 = param_1[1] - lVar1 >> 5;
  if (lVar11 == 0x7ffffffffffffff) {
    FUN_180004ce0();
    pcVar4 = (code *)swi(3);
    puVar7 = (undefined8 *)(*pcVar4)();
    return puVar7;
  }
  uVar12 = lVar11 + 1;
  uVar8 = param_1[2] - lVar1 >> 5;
  if (0x7ffffffffffffff - (uVar8 >> 1) < uVar8) {
    uVar13 = 0x7ffffffffffffff;
  }
  else {
    uVar8 = (uVar8 >> 1) + uVar8;
    uVar13 = uVar12;
    if (uVar12 <= uVar8) {
      uVar13 = uVar8;
    }
    if (0x7ffffffffffffff < uVar13) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  pauVar6 = (undefined1 (*) [32])FUN_1800032d0(uVar13 * 0x20);
  uVar5 = param_3[1];
  puVar7 = (undefined8 *)(*pauVar6 + ((longlong)param_2 - lVar1 & 0xffffffffffffffe0));
  *puVar7 = *param_3;
  puVar7[1] = uVar5;
  uVar5 = param_3[3];
  puVar7[2] = param_3[2];
  puVar7[3] = uVar5;
  pauVar2 = (undefined1 (*) [32])*param_1;
  if (param_2 == (undefined1 (*) [32])param_1[1]) {
    uVar8 = param_1[1] - (longlong)pauVar2;
    pauVar9 = pauVar6;
    param_2 = pauVar2;
  }
  else {
    FUN_1800154d0(pauVar6,pauVar2,(longlong)param_2 - (longlong)pauVar2);
    pauVar9 = (undefined1 (*) [32])(puVar7 + 4);
    uVar8 = param_1[1] - (longlong)param_2;
  }
  FUN_1800154d0(pauVar9,param_2,uVar8);
  pvVar3 = (LPVOID)*param_1;
  if (pvVar3 != (LPVOID)0x0) {
    pvVar10 = pvVar3;
    if ((0xfff < (param_1[2] - (longlong)pvVar3 & 0xffffffffffffffe0U)) &&
       (pvVar10 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar10);
  }
  *param_1 = (longlong)pauVar6;
  param_1[1] = (longlong)(pauVar6 + uVar12);
  param_1[2] = (longlong)(pauVar6 + uVar13);
  return puVar7;
}

