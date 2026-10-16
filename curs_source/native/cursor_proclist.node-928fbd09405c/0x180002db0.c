
/* Address: 0x180002db0; Evidence: ev_06c63c0bd25c148c089d09283ca5bf363b407d74d64437ed3fb5a11ec7dabe44 */

void FUN_180002db0(undefined8 *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  *param_1 = &PTR_FUN_180022f60;
  if (param_1[2] != 0) {
    napi_delete_async_work(param_1[1]);
    param_1[2] = 0;
  }
  if (0xf < (ulonglong)param_1[0xc]) {
    pvVar1 = (LPVOID)param_1[9];
    pvVar2 = pvVar1;
    if ((0xfff < param_1[0xc] + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
  if (param_1[7] != 0) {
    if (*(char *)(param_1 + 8) == '\0') {
      napi_delete_reference(param_1[6]);
    }
    param_1[7] = 0;
  }
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}

