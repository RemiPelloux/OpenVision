
/* Address: 0x180006470; Evidence: ev_d7c58b1ea71efab0698a04c1f6c6818b113a13e67d70308d47f90a4dec4fd74f */

undefined4 * FUN_180006470(longlong *param_1,undefined8 *param_2,undefined4 *param_3)

{
  ulonglong uVar1;
  undefined4 *puVar2;
  longlong lVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  longlong lVar6;
  void *pvVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  LPVOID pvVar10;
  undefined8 *puVar11;
  ulonglong uVar12;
  
  lVar3 = *param_1;
  lVar6 = param_1[1] - lVar3 >> 2;
  if (lVar6 == 0x3fffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180005fd0();
  }
  uVar8 = param_1[2] - lVar3 >> 2;
  uVar1 = lVar6 + 1;
  if (0x3fffffffffffffff - (uVar8 >> 1) < uVar8) {
LAB_180006616:
                    /* WARNING: Subroutine does not return */
    FUN_180001250();
  }
  uVar8 = (uVar8 >> 1) + uVar8;
  uVar12 = uVar1;
  if (uVar1 <= uVar8) {
    uVar12 = uVar8;
  }
  if (0x3fffffffffffffff < uVar12) goto LAB_180006616;
  uVar12 = uVar12 * 4;
  if (uVar12 == 0) {
    puVar11 = (undefined8 *)0x0;
  }
  else if (uVar12 < 0x1000) {
    puVar11 = operator_new(uVar12);
  }
  else {
    if (uVar12 + 0x27 <= uVar12) goto LAB_180006616;
    pvVar7 = operator_new(uVar12 + 0x27);
    if (pvVar7 == (void *)0x0) goto LAB_1800065fd;
    puVar11 = (undefined8 *)((longlong)pvVar7 + 0x27U & 0xffffffffffffffe0);
    puVar11[-1] = pvVar7;
  }
  puVar2 = (undefined4 *)((longlong)puVar11 + ((longlong)param_2 - lVar3 >> 2) * 4);
  *puVar2 = *param_3;
  puVar4 = (undefined8 *)*param_1;
  if (param_2 == (undefined8 *)param_1[1]) {
    uVar8 = param_1[1] - (longlong)puVar4;
    puVar9 = puVar11;
    param_2 = puVar4;
  }
  else {
    FUN_180018c60(puVar11,puVar4,(longlong)param_2 - (longlong)puVar4);
    puVar9 = (undefined8 *)(puVar2 + 1);
    uVar8 = param_1[1] - (longlong)param_2;
  }
  FUN_180018c60(puVar9,param_2,uVar8);
  pvVar5 = (LPVOID)*param_1;
  if (pvVar5 != (LPVOID)0x0) {
    pvVar10 = pvVar5;
    if ((0xfff < (param_1[2] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
       (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
       0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
LAB_1800065fd:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar10);
  }
  *param_1 = (longlong)puVar11;
  param_1[1] = (longlong)puVar11 + uVar1 * 4;
  param_1[2] = uVar12 + (longlong)puVar11;
  return puVar2;
}

