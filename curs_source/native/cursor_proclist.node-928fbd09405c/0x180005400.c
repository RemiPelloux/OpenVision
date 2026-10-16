
/* Address: 0x180005400; Evidence: ev_7249060ba2cb5bc21829d7a6a70618d1a796466a703db2e005dbabe74d0f4207 */

/* WARNING: Removing unreachable block (ram,0x0001800054ee) */
/* WARNING: Removing unreachable block (ram,0x0001800054fb) */
/* WARNING: Removing unreachable block (ram,0x000180005500) */

undefined4 * FUN_180005400(undefined4 *param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  undefined8 *puVar5;
  longlong lVar6;
  LPVOID pvVar7;
  
  *param_1 = 0;
  *(undefined8 *)(param_1 + 2) = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  pvVar4 = operator_new(0x18);
  *(void **)pvVar4 = pvVar4;
  *(void **)((longlong)pvVar4 + 8) = pvVar4;
  *(void **)(param_1 + 2) = pvVar4;
  *(undefined8 *)(param_1 + 6) = 0;
  *(undefined8 *)(param_1 + 8) = 0;
  *(undefined8 *)(param_1 + 10) = 0;
  *(undefined8 *)(param_1 + 0xc) = 7;
  *(undefined8 *)(param_1 + 0xe) = 8;
  *param_1 = 0x3f800000;
  uVar2 = *(undefined8 *)(param_1 + 2);
  puVar5 = operator_new(0x80);
  pvVar3 = *(LPVOID *)(param_1 + 6);
  lVar6 = *(longlong *)(param_1 + 10) - (longlong)pvVar3 >> 3;
  if (lVar6 != 0) {
    pvVar7 = pvVar3;
    if ((0xfff < (ulonglong)(lVar6 * 8)) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
  }
  *(undefined8 **)(param_1 + 6) = puVar5;
  puVar1 = puVar5 + 0x10;
  *(undefined8 **)(param_1 + 8) = puVar1;
  *(undefined8 **)(param_1 + 10) = puVar1;
  for (; puVar5 != puVar1; puVar5 = puVar5 + 1) {
    *puVar5 = uVar2;
  }
  return param_1;
}

