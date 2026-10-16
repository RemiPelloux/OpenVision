
/* Address: 0x180001d60; Evidence: ev_6090c56e462a42b65038aa3f8e8a474a4fdb8b2085c50aad91ce7f27f3fd52c6 */

undefined1 (*) [32]
FUN_180001d60(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  undefined1 (*pauVar9) [32];
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff - uVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar6 = uVar2 + param_2 | 0xf;
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = (uVar3 >> 1) + uVar3;
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      pauVar9 = (undefined1 (*) [32])0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180001e09;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001e09:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001ee4;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  pauVar8 = (undefined1 (*) [32])(*pauVar9 + uVar2);
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_18000ef50(pauVar9,param_1,uVar2);
    FUN_18000eb90(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_18000ef50(pauVar9,pauVar4,uVar2);
    FUN_18000eb90(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001ee4:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}

