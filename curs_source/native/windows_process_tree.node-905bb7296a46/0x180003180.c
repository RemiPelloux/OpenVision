
/* Address: 0x180003180; Evidence: ev_4c698ae5ed28a77562e6fa0966b54386486ec15951e5216fd3250560201b3228 */

undefined1 (*) [32]
FUN_180003180(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  if (0x7fffffffffffffff - uVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_1800011f0();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar6 = uVar2 + param_2 | 0xf;
  uVar7 = 0x7fffffffffffffff;
  if (((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
     (uVar1 = uVar3 + (uVar3 >> 1), uVar7 = uVar6, uVar6 < uVar1)) {
    uVar7 = uVar1;
  }
  pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar7 + 1);
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  pauVar8 = (undefined1 (*) [32])(*pauVar5 + uVar2);
  if (uVar3 < 0x10) {
    FUN_1800154d0(pauVar5,param_1,uVar2);
    FUN_180015110(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_1800154d0(pauVar5,pauVar4,uVar2);
    FUN_180015110(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
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

