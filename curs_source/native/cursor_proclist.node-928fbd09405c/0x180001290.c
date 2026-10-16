
/* Address: 0x180001290; Evidence: ev_a2ce732a9903a136c9ce145f523eabc921ffc8ce8c702243792e2c756cc17077 */

void FUN_180001290(undefined8 *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < (ulonglong)param_1[6]) {
    pvVar1 = (LPVOID)param_1[3];
    pvVar2 = pvVar1;
    if ((0xfff < param_1[6] + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}

