
/* Address: 0x180001690; Evidence: ev_0f2c6a11a366410d8501cb6a605a42c8a0f60d92dd52142c1c3709d5099d0a42 */

undefined1 (*) [32] FUN_180001690(undefined1 (*param_1) [32])

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
  undefined1 in_stack_00000028;
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (uVar2 == 0x7fffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = uVar2 + 1 | 0xf;
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
        goto code_r0x000180001732;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001732:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001800;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_180017e30(pauVar9,param_1,uVar2);
    (*pauVar9)[uVar2] = in_stack_00000028;
    (*pauVar9)[uVar2 + 1] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_180017e30(pauVar9,pauVar4,uVar2);
    (*pauVar9)[uVar2] = in_stack_00000028;
    (*pauVar9)[uVar2 + 1] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001800:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}

