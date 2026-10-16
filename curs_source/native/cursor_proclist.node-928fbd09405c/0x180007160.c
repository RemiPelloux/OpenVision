
/* Address: 0x180007160; Evidence: ev_2f3b784b2e16b86c549234924b51bf93bf6d39a6c36d20a056367d8c8df3b78c */

void FUN_180007160(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)(param_1 + 0x20)) {
    pvVar1 = *(LPVOID *)(param_1 + 8);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x20) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x20) = 0xf;
  *(undefined1 *)(param_1 + 8) = 0;
  return;
}

