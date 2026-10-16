
/* Address: 0x180008c90; Evidence: ev_e2b083ebbf486fcf0fe6de083687c94591d2280d8e46316b037bca0c6f3177f7 */

void FUN_180008c90(undefined8 param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  *(undefined8 *)param_2[1] = 0;
  puVar3 = (undefined8 *)*param_2;
  do {
    if (puVar3 == (undefined8 *)0x0) {
      return;
    }
    pvVar1 = (LPVOID)puVar3[3];
    puVar2 = (undefined8 *)*puVar3;
    if (pvVar1 != (LPVOID)0x0) {
      pvVar4 = pvVar1;
      if ((0xfff < (puVar3[5] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
      puVar3[3] = 0;
      puVar3[4] = 0;
      puVar3[5] = 0;
    }
    thunk_FUN_1800116e0(puVar3);
    puVar3 = puVar2;
  } while( true );
}

