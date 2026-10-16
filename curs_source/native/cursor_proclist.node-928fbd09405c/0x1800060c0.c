
/* Address: 0x1800060c0; Evidence: ev_a1c90661d41dc1be034034fefeffa90a8115ddde0631ca1f0f0504a562b13fc8 */

longlong * FUN_1800060c0(longlong *param_1,undefined8 *param_2,ulonglong param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  ulonglong uVar5;
  LPVOID pvVar6;
  longlong *plVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  
  uVar2 = param_1[3];
  if (param_3 <= uVar2) {
    plVar7 = param_1;
    if (0xf < uVar2) {
      plVar7 = (longlong *)*param_1;
    }
    param_1[2] = param_3;
    FUN_180018c60(plVar7,param_2,param_3);
    *(undefined1 *)((longlong)plVar7 + param_3) = 0;
    return param_1;
  }
  uVar8 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff < param_3) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar5 = param_3 | 0xf;
  if ((uVar5 < 0x8000000000000000) && (uVar2 <= 0x7fffffffffffffff - (uVar2 >> 1))) {
    uVar1 = uVar2 + (uVar2 >> 1);
    uVar8 = uVar5;
    if (uVar5 < uVar1) {
      uVar8 = uVar1;
    }
    uVar1 = uVar8 + 1;
    if (uVar1 == 0) {
      puVar9 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar5 = uVar8 + 0x28;
        if (uVar5 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_18000617c;
      }
      puVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar5 = 0x8000000000000027;
LAB_18000617c:
    pvVar4 = operator_new(uVar5);
    if (pvVar4 == (void *)0x0) goto LAB_18000621b;
    puVar9 = (undefined8 *)((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    puVar9[-1] = pvVar4;
  }
  param_1[2] = param_3;
  param_1[3] = uVar8;
  FUN_180018c60(puVar9,param_2,param_3);
  *(undefined1 *)((longlong)puVar9 + param_3) = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar6 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar6 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar6)))) {
LAB_18000621b:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar6);
  }
  *param_1 = (longlong)puVar9;
  return param_1;
}

