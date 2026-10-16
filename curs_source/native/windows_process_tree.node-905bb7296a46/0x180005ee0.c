
/* Address: 0x180005ee0; Evidence: ev_951c229b58bc054a39486a74d78f8d9919e2ab39a87441b87005f6ce0107e3d6 */

undefined1 (*) [32]
FUN_180005ee0(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,longlong param_4)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  longlong lVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  ulonglong uVar9;
  undefined2 *puVar10;
  
  lVar2 = *(longlong *)(*param_1 + 0x10);
  uVar9 = 0x7ffffffffffffffe;
  if (0x7ffffffffffffffeU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_1800011f0();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar7 = lVar2 + param_2 | 7;
  if ((uVar7 < 0x7fffffffffffffff) && (uVar3 <= 0x7ffffffffffffffe - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
    uVar9 = uVar7;
    if (uVar7 < uVar1) {
      uVar9 = uVar1;
    }
    uVar7 = uVar9 + 1;
    if (0x7fffffffffffffff < uVar7) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  else {
    uVar7 = 0x7fffffffffffffff;
  }
  pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar7 * 2);
  *(ulonglong *)(*param_1 + 0x18) = uVar9;
  uVar9 = lVar2 * 2;
  *(ulonglong *)(*param_1 + 0x10) = lVar2 + param_2;
  puVar10 = (undefined2 *)(*pauVar5 + uVar9);
  if (uVar3 < 8) {
    FUN_1800154d0(pauVar5,param_1,uVar9);
    lVar6 = param_4;
    if (param_4 != 0) {
      for (; lVar6 != 0; lVar6 = lVar6 + -1) {
        *puVar10 = 0;
        puVar10 = puVar10 + 1;
      }
    }
    *(undefined2 *)(*pauVar5 + (lVar2 + param_4) * 2) = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_1800154d0(pauVar5,pauVar4,uVar9);
    lVar6 = param_4;
    if (param_4 != 0) {
      for (; lVar6 != 0; lVar6 = lVar6 + -1) {
        *puVar10 = 0;
        puVar10 = puVar10 + 1;
      }
    }
    *(undefined2 *)(*pauVar5 + (lVar2 + param_4) * 2) = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 * 2 + 2) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar5;
  return param_1;
}

