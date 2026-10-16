
/* Address: 0x180005e60; Evidence: ev_0dd56fe3d5b93d4feb23489daf954b62c2e441c0cd92d77fcae2ad900f8ea4cc */

void FUN_180005e60(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (7 < (ulonglong)param_1[3]) {
    pvVar1 = (LPVOID)*param_1;
    pvVar2 = pvVar1;
    if ((0xfff < param_1[3] * 2 + 2U) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
  }
  param_1[3] = 7;
  param_1[2] = 0;
  *(undefined2 *)param_1 = 0;
  return;
}

