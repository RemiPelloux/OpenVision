
/* Address: 0x180001f00; Evidence: ev_66f22eb0cd1c9444a8c860fb56f980693b0014b945defdd143eb95fc2f6609ae */

longlong *
FUN_180001f00(longlong *param_1,ulonglong param_2,undefined8 param_3,undefined1 (*param_4) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  LPVOID pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = param_2 | 0xf;
  uVar2 = param_1[3];
  if ((uVar6 < 0x8000000000000000) && (uVar2 <= 0x7fffffffffffffff - (uVar2 >> 1))) {
    uVar1 = uVar2 + (uVar2 >> 1);
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      pauVar8 = (undefined1 (*) [32])0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180001f95;
      }
      pauVar8 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001f95:
    pvVar4 = operator_new(uVar6);
    if (pvVar4 == (void *)0x0) goto LAB_18000202d;
    pauVar8 = (undefined1 (*) [32])((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar8[-1] + 0x18) = pvVar4;
  }
  param_1[2] = param_2;
  param_1[3] = uVar7;
  FUN_18000ef50(pauVar8,param_4,param_2);
  (*pauVar8)[param_2] = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar5 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar5)))) {
LAB_18000202d:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pvVar5);
  }
  *param_1 = (longlong)pauVar8;
  return param_1;
}

