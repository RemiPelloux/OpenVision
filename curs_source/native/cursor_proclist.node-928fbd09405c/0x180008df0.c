
/* Address: 0x180008df0; Evidence: ev_167c9bc2d33f31beafb521f9b2f580b3ff2dbe9761a9a5b940e5306a76aeeac1 */

void FUN_180008df0(longlong param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  
  lVar1 = *(longlong *)(param_1 + 8);
  if ((lVar1 != 0) && (pvVar2 = *(LPVOID *)(lVar1 + 0x18), pvVar2 != (LPVOID)0x0)) {
    pvVar3 = pvVar2;
    if ((0xfff < (*(longlong *)(lVar1 + 0x28) - (longlong)pvVar2 & 0xfffffffffffffffcU)) &&
       (pvVar3 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar3);
    *(undefined8 *)(lVar1 + 0x18) = 0;
    *(undefined8 *)(lVar1 + 0x20) = 0;
    *(undefined8 *)(lVar1 + 0x28) = 0;
  }
  if (*(LPVOID *)(param_1 + 8) != (LPVOID)0x0) {
    thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  }
  return;
}

