
/* Address: 0x1800069f0; Evidence: ev_d4992c571b4a8f622e5cb1a4794d44f5bed7e43c9349da45918e3bd72c10b920 */

void FUN_1800069f0(longlong *param_1,longlong param_2,longlong param_3,longlong param_4)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0xb0) {
      FUN_180003570(lVar3);
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0xb0) * 0xb0)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
  }
  *param_1 = param_2;
  param_1[1] = param_3 * 0xb0 + param_2;
  param_1[2] = param_4 * 0xb0 + param_2;
  return;
}

