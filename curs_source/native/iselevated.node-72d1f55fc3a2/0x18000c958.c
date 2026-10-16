
/* Address: 0x18000c958; Evidence: ev_7edaf7c53a00bd7f6c5d742af0e48ecf78e75ad2bcbe64401f2399bf2fd3624c */

ulonglong FUN_18000c958(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_1800097ac((longlong)param_1);
      uVar1 = FUN_18000c9d4(param_1,param_2);
      FUN_1800097b8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000ce68((undefined8 *)param_1);
  }
  return 0xffffffff;
}

