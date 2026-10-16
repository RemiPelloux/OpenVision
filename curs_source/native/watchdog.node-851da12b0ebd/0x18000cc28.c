
/* Address: 0x18000cc28; Evidence: ev_3e3f3348d1b5d7354ab0d15c01a25ccf0bdcfcc160478bdba8de023ff0f13fd1 */

ulonglong FUN_18000cc28(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_1800060f0((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_180009a7c((longlong)param_1);
      uVar1 = FUN_18000cca4(param_1,param_2);
      FUN_180009a88((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000d138((undefined8 *)param_1);
  }
  return 0xffffffff;
}

