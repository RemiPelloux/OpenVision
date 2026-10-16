
/* Address: 0x180003570; Evidence: ev_8273933d22aaaa92d5f2f32387b6352844643846c948d0c6b51fded5efaf5a23 */

void FUN_180003570(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)(param_1 + 0xa8)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x90);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0xa8) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0xa0) = 0;
  *(undefined8 *)(param_1 + 0xa8) = 0xf;
  *(undefined1 *)(param_1 + 0x90) = 0;
  if (0xf < *(ulonglong *)(param_1 + 0x88)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x70);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x88) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x80) = 0;
  *(undefined8 *)(param_1 + 0x88) = 0xf;
  *(undefined1 *)(param_1 + 0x70) = 0;
  if (0xf < *(ulonglong *)(param_1 + 0x68)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x50);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x68) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x60) = 0;
  *(undefined8 *)(param_1 + 0x68) = 0xf;
  *(undefined1 *)(param_1 + 0x50) = 0;
  if (*(longlong **)(param_1 + 0x28) != (longlong *)0x0) {
    FUN_180006630(*(longlong **)(param_1 + 0x28),*(longlong **)(param_1 + 0x30));
    pvVar1 = *(LPVOID *)(param_1 + 0x28);
    pvVar2 = pvVar1;
    if ((0xfff < (*(longlong *)(param_1 + 0x38) - (longlong)pvVar1 & 0xffffffffffffffe0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
    *(undefined8 *)(param_1 + 0x28) = 0;
    *(undefined8 *)(param_1 + 0x30) = 0;
    *(undefined8 *)(param_1 + 0x38) = 0;
  }
  if (0xf < *(ulonglong *)(param_1 + 0x20)) {
    pvVar1 = *(LPVOID *)(param_1 + 8);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x20) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
LAB_18000371d:
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

