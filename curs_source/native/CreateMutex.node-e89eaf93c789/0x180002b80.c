
/* Address: 0x180002b80; Evidence: ev_867d6c7357f1a417a2a6787a1ce23bac147d054c950a0aec398710abc462ae5b */

undefined1 (*) [32]
FUN_180002b80(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  code *pcVar5;
  undefined1 (*pauVar6) [32];
  undefined1 (*pauVar7) [32];
  ulonglong uVar8;
  ulonglong uVar9;
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  if (0x7fffffffffffffff - uVar2 < param_2) {
    FUN_1800011f0();
    pcVar5 = (code *)swi(3);
    pauVar7 = (undefined1 (*) [32])(*pcVar5)();
    return pauVar7;
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar8 = uVar2 + param_2 | 0xf;
  uVar9 = 0x7fffffffffffffff;
  if (((uVar8 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
     (uVar1 = uVar3 + (uVar3 >> 1), uVar9 = uVar8, uVar8 < uVar1)) {
    uVar9 = uVar1;
  }
  pauVar6 = FUN_180002cd0(uVar9 + 1);
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar9;
  pauVar7 = (undefined1 (*) [32])(*pauVar6 + uVar2);
  if (uVar3 < 0x10) {
    FUN_180014070(pauVar6,param_1,uVar2);
    FUN_180013cb0(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_180014070(pauVar6,pauVar4,uVar2);
    FUN_180013cb0(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
    pauVar7 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar7 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000cbe0(pauVar7);
  }
  *(undefined1 (**) [32])*param_1 = pauVar6;
  return param_1;
}

