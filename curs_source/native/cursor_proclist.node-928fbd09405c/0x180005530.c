
/* Address: 0x180005530; Evidence: ev_be8a3e0e0076959a3a9800654d05aa75cf237e686ac5f722e4bb7db4cd448a65 */

void FUN_180005530(longlong *param_1,ulonglong param_2)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  longlong lVar4;
  LPVOID pvVar5;
  void *pvVar6;
  undefined4 *puVar7;
  longlong lVar8;
  undefined4 *puVar9;
  LPVOID pvVar10;
  undefined4 *puVar11;
  ulonglong uVar12;
  
  lVar1 = *param_1;
  if ((ulonglong)((param_1[2] - lVar1) / 0xb0) < param_2) {
    if (0x1745d1745d1745d < param_2) {
                    /* WARNING: Subroutine does not return */
      FUN_180005fd0();
    }
    lVar2 = param_1[1];
    uVar12 = param_2 * 0xb0;
    if (uVar12 == 0) {
      puVar9 = (undefined4 *)0x0;
    }
    else if (uVar12 < 0x1000) {
      puVar9 = operator_new(uVar12);
    }
    else {
      if (uVar12 + 0x27 <= uVar12) {
                    /* WARNING: Subroutine does not return */
        FUN_180001250();
      }
      pvVar6 = operator_new(uVar12 + 0x27);
      if (pvVar6 == (void *)0x0) goto LAB_1800056e6;
      puVar9 = (undefined4 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
      *(void **)(puVar9 + -2) = pvVar6;
    }
    puVar3 = (undefined4 *)param_1[1];
    puVar7 = puVar9;
    for (puVar11 = (undefined4 *)*param_1; puVar11 != puVar3; puVar11 = puVar11 + 0x2c) {
      FUN_180006d40(puVar7,puVar11);
      puVar7 = puVar7 + 0x2c;
    }
    lVar8 = *param_1;
    if (lVar8 != 0) {
      lVar4 = param_1[1];
      for (; lVar8 != lVar4; lVar8 = lVar8 + 0xb0) {
        FUN_180003570(lVar8);
      }
      pvVar5 = (LPVOID)*param_1;
      pvVar10 = pvVar5;
      if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar5) / 0xb0) * 0xb0)) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
LAB_1800056e6:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar10);
    }
    *param_1 = (longlong)puVar9;
    param_1[1] = (longlong)(puVar9 + ((lVar2 - lVar1) / 0xb0) * 0x2c);
    param_1[2] = (longlong)(puVar9 + param_2 * 0x2c);
  }
  return;
}

