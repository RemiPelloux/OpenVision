
/* Address: 0x180008730; Evidence: ev_3a5ec9dfd248d61ce4b2c375171cdfe3d9b9f31a9533414a5b00c3b957a9044f */

void FUN_180008730(longlong param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  
  lVar1 = *(longlong *)(param_1 + 8);
  if (lVar1 != 0) {
    if (0xf < *(ulonglong *)(lVar1 + 0x38)) {
      pvVar2 = *(LPVOID *)(lVar1 + 0x20);
      pvVar3 = pvVar2;
      if ((0xfff < *(ulonglong *)(lVar1 + 0x38) + 1) &&
         (pvVar3 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar3);
    }
    *(undefined8 *)(lVar1 + 0x30) = 0;
    *(undefined8 *)(lVar1 + 0x38) = 0xf;
    *(undefined1 *)(lVar1 + 0x20) = 0;
  }
  if (*(LPVOID *)(param_1 + 8) != (LPVOID)0x0) {
    thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  }
  return;
}

