
/* Address: 0x1800066d0; Evidence: ev_fcc23974d4692fc4ec283c30ec5ed8e1b3c6c3276926973b6da463c01287c8a4 */

undefined8 *
FUN_1800066d0(undefined8 *param_1,ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  ulonglong uVar4;
  undefined8 *puVar5;
  void *pvVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  undefined8 *puVar10;
  
  uVar3 = param_1[2];
  uVar8 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff - uVar3 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar4 = param_1[3];
  uVar7 = uVar3 + param_2 | 0xf;
  if ((uVar7 < 0x8000000000000000) && (uVar4 <= 0x7fffffffffffffff - (uVar4 >> 1))) {
    uVar1 = (uVar4 >> 1) + uVar4;
    uVar8 = uVar7;
    if (uVar7 < uVar1) {
      uVar8 = uVar1;
    }
    uVar1 = uVar8 + 1;
    if (uVar1 == 0) {
      puVar10 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar7 = uVar8 + 0x28;
        if (uVar7 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_180006776;
      }
      puVar10 = operator_new(uVar1);
    }
  }
  else {
    uVar7 = 0x8000000000000027;
LAB_180006776:
    pvVar6 = operator_new(uVar7);
    if (pvVar6 == (void *)0x0) goto LAB_18000683f;
    puVar10 = (undefined8 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
    puVar10[-1] = pvVar6;
  }
  param_1[2] = uVar3 + param_2;
  pauVar2 = (undefined1 (*) [32])(uVar3 + (longlong)puVar10);
  param_1[3] = uVar8;
  if (uVar4 < 0x10) {
    FUN_180018c60(puVar10,param_1,uVar3);
    FUN_1800188a0(pauVar2,0,param_4);
    (*pauVar2)[param_4] = 0;
  }
  else {
    puVar5 = (undefined8 *)*param_1;
    FUN_180018c60(puVar10,puVar5,uVar3);
    FUN_1800188a0(pauVar2,0,param_4);
    (*pauVar2)[param_4] = 0;
    puVar9 = puVar5;
    if ((0xfff < uVar4 + 1) &&
       (puVar9 = (undefined8 *)puVar5[-1],
       0x1f < (ulonglong)((longlong)puVar5 + (-8 - (longlong)puVar9)))) {
LAB_18000683f:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar9);
  }
  *param_1 = puVar10;
  return param_1;
}

