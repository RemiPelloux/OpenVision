
/* Address: 0x1800091d0; Evidence: ev_5dfdc37d50ab5511281a108b984aafaf5148fc83247858a0d787427b939240f5 */

void FUN_1800091d0(undefined8 param_1,LPVOID param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)((longlong)param_2 + 0x38)) {
    pvVar1 = *(LPVOID *)((longlong)param_2 + 0x20);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)((longlong)param_2 + 0x38) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)((longlong)param_2 + 0x30) = 0;
  *(undefined8 *)((longlong)param_2 + 0x38) = 0xf;
  *(undefined1 *)((longlong)param_2 + 0x20) = 0;
  thunk_FUN_1800116e0(param_2);
  return;
}

