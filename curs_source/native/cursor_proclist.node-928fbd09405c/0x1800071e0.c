
/* Address: 0x1800071e0; Evidence: ev_a87cefaabf9aeb0d698d44a121141eed187c7d66546f67646c590d84b5e821a7 */

void FUN_1800071e0(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = *(LPVOID *)(param_1 + 0x18);
  pvVar2 = pvVar1;
  if (pvVar1 != (LPVOID)0x0) {
    if ((0xfff < (*(longlong *)(param_1 + 0x28) - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    *(undefined8 *)(param_1 + 0x18) = 0;
    *(undefined8 *)(param_1 + 0x20) = 0;
    *(undefined8 *)(param_1 + 0x28) = 0;
  }
  FUN_180008d40(pvVar2,*(undefined8 **)(param_1 + 8));
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}

