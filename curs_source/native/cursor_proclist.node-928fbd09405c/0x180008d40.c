
/* Address: 0x180008d40; Evidence: ev_31afcca58e4e06919dd1550390dd19399f9ea4c7ca793c623c1866f8e1e33efa */

void FUN_180008d40(undefined8 param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  LPVOID pvVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  *(undefined8 *)param_2[1] = 0;
  puVar3 = (undefined8 *)*param_2;
  do {
    if (puVar3 == (undefined8 *)0x0) {
      return;
    }
    puVar1 = (undefined8 *)*puVar3;
    if (0xf < (ulonglong)puVar3[7]) {
      pvVar2 = (LPVOID)puVar3[4];
      pvVar4 = pvVar2;
      if ((0xfff < puVar3[7] + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    puVar3[6] = 0;
    puVar3[7] = 0xf;
    *(undefined1 *)(puVar3 + 4) = 0;
    thunk_FUN_1800116e0(puVar3);
    puVar3 = puVar1;
  } while( true );
}

