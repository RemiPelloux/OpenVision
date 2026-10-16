
/* Address: 0x180005810; Evidence: ev_9bccd2d13d96cb8431fd4148d34c499c5befed61f62fdb1a5f71692ee7c1a093 */

undefined8 * FUN_180005810(undefined8 *param_1,undefined8 *param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  void *pvVar4;
  ulonglong uVar5;
  undefined8 *puVar6;
  
  puVar6 = (undefined8 *)0x0;
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[3] = 0;
  uVar5 = 0xffffffffffffffff;
  do {
    uVar5 = uVar5 + 1;
  } while (*(char *)((longlong)param_2 + uVar5) != '\0');
  if (0x7fffffffffffffff < uVar5) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  if (uVar5 < 0x10) {
    param_1[2] = uVar5;
    param_1[3] = 0xf;
    FUN_180018c60(param_1,param_2,uVar5);
    *(undefined1 *)(uVar5 + (longlong)param_1) = 0;
    return param_1;
  }
  uVar2 = uVar5 | 0xf;
  if (uVar2 < 0x8000000000000000) {
    if (uVar2 < 0x16) {
      uVar2 = 0x16;
    }
    uVar1 = uVar2 + 1;
    if (uVar1 == 0) goto LAB_1800058ef;
    if (uVar1 < 0x1000) {
      puVar6 = operator_new(uVar1);
      goto LAB_1800058ef;
    }
    uVar3 = uVar2 + 0x28;
    if (uVar3 <= uVar1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
  }
  else {
    uVar3 = 0x8000000000000027;
    uVar2 = 0x7fffffffffffffff;
  }
  pvVar4 = operator_new(uVar3);
  if (pvVar4 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  puVar6 = (undefined8 *)((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
  puVar6[-1] = pvVar4;
LAB_1800058ef:
  *param_1 = puVar6;
  param_1[2] = uVar5;
  param_1[3] = uVar2;
  FUN_180018c60(puVar6,param_2,uVar5);
  *(undefined1 *)((longlong)puVar6 + uVar5) = 0;
  return param_1;
}

