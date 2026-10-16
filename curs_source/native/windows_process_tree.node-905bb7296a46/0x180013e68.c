
/* Address: 0x180013e68; Evidence: ev_1acbe6bcb9c7fccc73b0c4ff352b00c77d9958d51598c67747b49765c2213a77 */

ulonglong FUN_180013e68(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_180010d2c((longlong)param_1);
      uVar1 = FUN_180013ee4(param_1,param_2);
      FUN_180010d38((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180014378((undefined8 *)param_1);
  }
  return 0xffffffff;
}

