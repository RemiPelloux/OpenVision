
/* Address: 0x1800081c0; Evidence: ev_af3ed20cf161da5991a731a196e0f711ce278f51b22eed9ab3ea1aa5efb985bd */

undefined8 *
FUN_1800081c0(undefined8 *param_1,undefined8 param_2,undefined4 *param_3,undefined4 *param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  void *pvVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  void *pvVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  
  *param_1 = param_2;
  puVar8 = (undefined8 *)0x0;
  param_1[1] = 0;
  pvVar4 = operator_new(0x40);
  param_1[1] = pvVar4;
  *(undefined4 *)((longlong)pvVar4 + 0x10) = *param_3;
  *(undefined4 *)((longlong)pvVar4 + 0x18) = *param_4;
  *(undefined4 *)((longlong)pvVar4 + 0x1c) = param_4[1];
  puVar9 = (undefined8 *)(param_4 + 2);
  *(undefined8 *)((longlong)pvVar4 + 0x20) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x28) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x30) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x38) = 0;
  uVar2 = *(ulonglong *)(param_4 + 6);
  if (0xf < *(ulonglong *)(param_4 + 8)) {
    puVar9 = (undefined8 *)*puVar9;
  }
  if (0x7fffffffffffffff < uVar2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  if (uVar2 < 0x10) {
    *(ulonglong *)((longlong)pvVar4 + 0x30) = uVar2;
    *(undefined8 *)((longlong)pvVar4 + 0x38) = 0xf;
    uVar3 = puVar9[1];
    *(undefined8 *)((longlong)pvVar4 + 0x20) = *puVar9;
    *(undefined8 *)((longlong)pvVar4 + 0x28) = uVar3;
    return param_1;
  }
  uVar5 = uVar2 | 0xf;
  if (uVar5 < 0x8000000000000000) {
    if (uVar5 < 0x16) {
      uVar5 = 0x16;
    }
    uVar1 = uVar5 + 1;
    if (uVar1 == 0) goto LAB_1800082cc;
    if (uVar1 < 0x1000) {
      puVar8 = operator_new(uVar1);
      goto LAB_1800082cc;
    }
    uVar6 = uVar5 + 0x28;
    if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
  }
  else {
    uVar6 = 0x8000000000000027;
    uVar5 = 0x7fffffffffffffff;
  }
  pvVar7 = operator_new(uVar6);
  if (pvVar7 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  puVar8 = (undefined8 *)((longlong)pvVar7 + 0x27U & 0xffffffffffffffe0);
  puVar8[-1] = pvVar7;
LAB_1800082cc:
  *(undefined8 **)((longlong)pvVar4 + 0x20) = puVar8;
  *(ulonglong *)((longlong)pvVar4 + 0x30) = uVar2;
  *(ulonglong *)((longlong)pvVar4 + 0x38) = uVar5;
  FUN_180018c60(puVar8,puVar9,uVar2 + 1);
  return param_1;
}

