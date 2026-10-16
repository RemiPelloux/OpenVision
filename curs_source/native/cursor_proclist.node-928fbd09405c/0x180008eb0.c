
/* Address: 0x180008eb0; Evidence: ev_5a78a74ce4516e6771fba7e3f01f9c45d75061e514bc8965c0c4cd9b767a234e */

void FUN_180008eb0(ulonglong *param_1,ulonglong param_2,undefined8 param_3)

{
  undefined8 *puVar1;
  LPVOID pvVar2;
  void *pvVar3;
  longlong lVar4;
  LPVOID pvVar5;
  ulonglong uVar6;
  undefined8 *puVar7;
  
  puVar7 = (undefined8 *)*param_1;
  lVar4 = (longlong)param_1[1] - (longlong)puVar7;
  if ((ulonglong)(lVar4 >> 3) < param_2) {
    if (0x1fffffffffffffff < param_2) {
LAB_180008ff5:
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
    uVar6 = param_2 * 8;
    puVar7 = (undefined8 *)0x0;
    if (uVar6 != 0) {
      if (uVar6 < 0x1000) {
        puVar7 = operator_new(uVar6);
      }
      else {
        if (uVar6 + 0x27 <= uVar6) goto LAB_180008ff5;
        pvVar3 = operator_new(uVar6 + 0x27);
        if (pvVar3 == (void *)0x0) goto LAB_180008ffb;
        puVar7 = (undefined8 *)((longlong)pvVar3 + 0x27U & 0xffffffffffffffe0);
        puVar7[-1] = pvVar3;
      }
    }
    pvVar2 = (LPVOID)*param_1;
    lVar4 = (longlong)(param_1[2] - (longlong)pvVar2) >> 3;
    if (lVar4 != 0) {
      pvVar5 = pvVar2;
      if ((0xfff < (ulonglong)(lVar4 * 8)) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 - 8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
LAB_180008ffb:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    puVar1 = puVar7 + param_2;
    *param_1 = (ulonglong)puVar7;
    param_1[1] = (ulonglong)puVar1;
    param_1[2] = (ulonglong)puVar1;
    for (; puVar7 != puVar1; puVar7 = puVar7 + 1) {
      *puVar7 = param_3;
    }
  }
  else {
    uVar6 = lVar4 + 7U >> 3;
    if ((undefined8 *)param_1[1] < puVar7) {
      uVar6 = 0;
    }
    if (uVar6 != 0) {
      for (; uVar6 != 0; uVar6 = uVar6 - 1) {
        *puVar7 = param_3;
        puVar7 = puVar7 + 1;
      }
    }
  }
  return;
}

