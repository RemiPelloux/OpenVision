
/* Address: 0x180005e10; Evidence: ev_b81229cde4c62d322fcf5ff4970c8e26ce45529a748dca88202d27d5a706a6c9 */

undefined8 * FUN_180005e10(undefined8 *param_1,ulonglong param_2)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  
  lVar2 = param_1[2];
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffffU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar6 = lVar2 + param_2 | 0xf;
  uVar3 = param_1[3];
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      puVar9 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_180005eae;
      }
      puVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
LAB_180005eae:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180005f4a;
    puVar9 = (undefined8 *)((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    puVar9[-1] = pvVar5;
  }
  param_1[2] = lVar2 + param_2;
  param_1[3] = uVar7;
  if (uVar3 < 0x10) {
    FUN_180018c60(puVar9,param_1,lVar2 + 1U);
  }
  else {
    puVar4 = (undefined8 *)*param_1;
    FUN_180018c60(puVar9,puVar4,lVar2 + 1U);
    puVar8 = puVar4;
    if ((0xfff < uVar3 + 1) &&
       (puVar8 = (undefined8 *)puVar4[-1],
       0x1f < (ulonglong)((longlong)puVar4 + (-8 - (longlong)puVar8)))) {
LAB_180005f4a:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar8);
  }
  *param_1 = puVar9;
  return param_1;
}

