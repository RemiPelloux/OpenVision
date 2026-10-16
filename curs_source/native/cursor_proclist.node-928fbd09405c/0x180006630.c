
/* Address: 0x180006630; Evidence: ev_fce6221fb4b1125d20ec17a582b29a53859b08ca8931c5b4ef8ca67bf58b4a0f */

void FUN_180006630(longlong *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  do {
    if (param_1 == param_2) {
      return;
    }
    if (0xf < (ulonglong)param_1[3]) {
      pvVar1 = (LPVOID)*param_1;
      pvVar2 = pvVar1;
      if ((0xfff < param_1[3] + 1U) &&
         (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar2);
    }
    param_1[2] = 0;
    param_1[3] = 0xf;
    *(undefined1 *)param_1 = 0;
    param_1 = param_1 + 4;
  } while( true );
}

