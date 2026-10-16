
/* Address: 0x180001bf0; Evidence: ev_cdac418a1165ec797f284c8977736e5e2b2e4de1a466024e94b5e42ac36506e4 */

undefined1 (*) [32] FUN_180001bf0(undefined1 (*param_1) [32],ulonglong param_2)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  undefined1 (*pauVar9) [32];
  
  lVar2 = *(longlong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffffU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = lVar2 + param_2 | 0xf;
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
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
        goto code_r0x000180001c91;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001c91:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001d3f;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = lVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_18000ef50(pauVar9,param_1,lVar2 + 1U);
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_18000ef50(pauVar9,pauVar4,lVar2 + 1U);
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001d3f:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}

