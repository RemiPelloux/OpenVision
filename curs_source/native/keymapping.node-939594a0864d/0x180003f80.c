
/* Address: 0x180003f80; Evidence: ev_6520776131c90583db7a5126e31c8f5377b2b5fef25e496f807b64d89be556c4 */

longlong *
FUN_180003f80(longlong *param_1,ulonglong param_2,undefined8 param_3,undefined1 (*param_4) [32])

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
        goto code_r0x000180004015;
      }
      pauVar8 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180004015:
    pvVar4 = operator_new(uVar6);
    if (pvVar4 == (void *)0x0) goto LAB_1800040ad;
    pauVar8 = (undefined1 (*) [32])((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar8[-1] + 0x18) = pvVar4;
  }
  param_1[2] = param_2;
  param_1[3] = uVar7;
  FUN_180017e30(pauVar8,param_4,param_2);
  (*pauVar8)[param_2] = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar5 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar5)))) {
LAB_1800040ad:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pvVar5);
  }
  *param_1 = (longlong)pauVar8;
  return param_1;
}

