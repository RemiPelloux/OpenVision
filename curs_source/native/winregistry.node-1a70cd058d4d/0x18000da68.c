
/* Address: 0x18000da68; Evidence: ev_7c20bf1ed4660471be1a4ce2eba889f48ec21c1b19f333d2e6e59e187fd2cea1 */

ulonglong FUN_18000da68(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000a92c((longlong)param_1);
      uVar1 = FUN_18000dae4(param_1,param_2);
      FUN_18000a938((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000df78((undefined8 *)param_1);
  }
  return 0xffffffff;
}

