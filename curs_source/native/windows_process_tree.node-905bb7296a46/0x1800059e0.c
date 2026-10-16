
/* Address: 0x1800059e0; Evidence: ev_0310e545fedac115c663b14e23ca220b2ef2eb30018109675444c8ff336de5a0 */

void FUN_1800059e0(longlong *param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0x130) {
      FUN_180002f40((longlong *)(lVar3 + 0x110));
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0x130) * 0x130)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar4);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}

