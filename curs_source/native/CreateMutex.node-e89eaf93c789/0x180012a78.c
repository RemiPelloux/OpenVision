
/* Address: 0x180012a78; Evidence: ev_e017d3cb18894b62c16776e62ebda4e7a5fc9022759f72952071d7bb43dd4728 */

ulonglong FUN_180012a78(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000f93c((longlong)param_1);
      uVar1 = FUN_180012af4(param_1,param_2);
      FUN_18000f948((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180012f88((undefined8 *)param_1);
  }
  return 0xffffffff;
}

