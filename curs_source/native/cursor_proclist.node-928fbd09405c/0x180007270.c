
/* Address: 0x180007270; Evidence: ev_09c628a81b654366005c0ff9c6af4fa2e8f944efebac15691a5410a86aa67ff3 */

void FUN_180007270(longlong param_1)

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
  FUN_180008c90(pvVar2,*(undefined8 **)(param_1 + 8));
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}

