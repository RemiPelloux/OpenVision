
/* Address: 0x180003d90; Evidence: ev_5561f872a7c2c2681417e51c1c99ab140ab2deb947745b63f354cd7e4cfcd806 */

void FUN_180003d90(longlong param_1,undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  LPVOID pvVar4;
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  LPVOID pvVar7;
  undefined1 (*pauVar8) [32];
  ulonglong uVar9;
  
  pauVar8 = (undefined1 (*) [32])(param_1 + 0x48);
  if (pauVar8 != param_2) {
    uVar2 = *(ulonglong *)(*param_2 + 0x10);
    if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
      param_2 = *(undefined1 (**) [32])*param_2;
    }
    uVar3 = *(ulonglong *)(param_1 + 0x60);
    if (uVar3 < uVar2) {
      if (0x7fffffffffffffff < uVar2) {
                    /* WARNING: Subroutine does not return */
        FUN_1800011f0();
      }
      uVar6 = uVar2 | 0xf;
      uVar9 = 0x7fffffffffffffff;
      if (((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
         (uVar1 = uVar3 + (uVar3 >> 1), uVar9 = uVar6, uVar6 < uVar1)) {
        uVar9 = uVar1;
      }
      pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar9 + 1);
      *(ulonglong *)(param_1 + 0x58) = uVar2;
      *(ulonglong *)(param_1 + 0x60) = uVar9;
      FUN_1800154d0(pauVar5,param_2,uVar2);
      (*pauVar5)[uVar2] = 0;
      if (0xf < uVar3) {
        pvVar4 = *(LPVOID *)*pauVar8;
        pvVar7 = pvVar4;
        if ((0xfff < uVar3 + 1) &&
           (pvVar7 = *(LPVOID *)((longlong)pvVar4 + -8),
           0x1f < (ulonglong)((longlong)pvVar4 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000dfd0(pvVar7);
      }
      *(undefined1 (**) [32])*pauVar8 = pauVar5;
    }
    else {
      if (0xf < uVar3) {
        pauVar8 = *(undefined1 (**) [32])*pauVar8;
      }
      *(ulonglong *)(param_1 + 0x58) = uVar2;
      FUN_1800154d0(pauVar8,param_2,uVar2);
      (*pauVar8)[uVar2] = 0;
    }
  }
  return;
}

