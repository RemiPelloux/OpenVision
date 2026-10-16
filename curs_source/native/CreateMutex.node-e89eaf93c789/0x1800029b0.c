
/* Address: 0x1800029b0; Evidence: ev_6f86184100e189da1e85513dba165b4096cad0ce50772d16c578b2aebd0e81ae */

longlong * FUN_1800029b0(longlong *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  longlong lVar2;
  LPVOID pvVar3;
  
  if (param_1 != param_2) {
    if (0xf < (ulonglong)param_1[3]) {
      pvVar1 = (LPVOID)*param_1;
      pvVar3 = pvVar1;
      if ((0xfff < param_1[3] + 1U) &&
         (pvVar3 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000cbe0(pvVar3);
    }
    param_1[3] = 0xf;
    param_1[2] = 0;
    *(undefined1 *)param_1 = 0;
    lVar2 = param_2[1];
    *param_1 = *param_2;
    param_1[1] = lVar2;
    lVar2 = param_2[3];
    param_1[2] = param_2[2];
    param_1[3] = lVar2;
    *(undefined1 *)param_2 = 0;
    param_2[2] = 0;
    param_2[3] = 0xf;
  }
  return param_1;
}

