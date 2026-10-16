
/* Address: 0x18000ca78; Evidence: ev_3cab97fd3b8ccff27d71ceb12af243411224b4eebcf6c627997b83cfa6100a97 */

ulonglong FUN_18000ca78(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_1800098cc((longlong)param_1);
      uVar1 = FUN_18000caf4(param_1,param_2);
      FUN_1800098d8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000cf88((undefined8 *)param_1);
  }
  return 0xffffffff;
}

