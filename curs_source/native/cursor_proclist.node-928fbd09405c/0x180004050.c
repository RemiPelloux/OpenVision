
/* Address: 0x180004050; Evidence: ev_f874f25ef4c992469ce5fced5a4bc603ba213abaf3ac1f7cfcd011c4285a040c */

undefined8 * FUN_180004050(undefined8 *param_1,uint param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  FUN_180005ff0(param_1 + 0x14);
  pvVar1 = (LPVOID)param_1[0xe];
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[0x10] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    param_1[0xe] = 0;
    param_1[0xf] = 0;
    param_1[0x10] = 0;
  }
  FUN_180002db0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}

