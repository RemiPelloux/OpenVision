
/* Address: 0x180005710; Evidence: ev_1da8cc42e13afefbe4ee872a93905cefffaaf3eba071ef0fc4f419e1e1bba271 */

void thunk_FUN_180005ff0(longlong *param_1)

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
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}

