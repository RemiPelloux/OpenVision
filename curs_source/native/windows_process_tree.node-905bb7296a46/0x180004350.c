
/* Address: 0x180004350; Evidence: ev_e55da3d66e1b24d0b54b71ddacaea9dbb7ec6829587c9e9e929ad2435916767b */

undefined8 * FUN_180004350(undefined8 *param_1,uint param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  *param_1 = &PTR_FUN_18001f220;
  pvVar1 = (LPVOID)param_1[0x11];
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[0x13] - (longlong)pvVar1 & 0xffffffffffffffe0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
    param_1[0x11] = 0;
    param_1[0x12] = 0;
    param_1[0x13] = 0;
  }
  if (param_1[0xf] != 0) {
    if (*(char *)(param_1 + 0x10) == '\0') {
      napi_delete_reference(param_1[0xe]);
    }
    param_1[0xf] = 0;
  }
  FUN_180003af0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}

