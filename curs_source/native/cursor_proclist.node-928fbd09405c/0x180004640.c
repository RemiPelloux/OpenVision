
/* Address: 0x180004640; Evidence: ev_816e83d392402b1cc6f0789cd15cf51c07128338a1a0fbdd2b95df31130ce02b */

void FUN_180004640(longlong param_1)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  pvVar1 = *(LPVOID *)(param_1 + 0x18);
  if (pvVar1 != (LPVOID)0x0) {
    pvVar4 = pvVar1;
    if ((0xfff < (*(longlong *)(param_1 + 0x28) - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
    *(undefined8 *)(param_1 + 0x18) = 0;
    *(undefined8 *)(param_1 + 0x20) = 0;
    *(undefined8 *)(param_1 + 0x28) = 0;
  }
  puVar2 = *(undefined8 **)(param_1 + 8);
  *(undefined8 *)puVar2[1] = 0;
  puVar2 = (undefined8 *)*puVar2;
  while (puVar2 != (undefined8 *)0x0) {
    puVar3 = (undefined8 *)*puVar2;
    thunk_FUN_1800116e0(puVar2);
    puVar2 = puVar3;
  }
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}

