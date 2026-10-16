
/* Address: 0x1800127f8; Evidence: ev_3eeb480184a8365b3b9b8b16027a80648da45daa7f38c5ca256c006a4f6edafa */

ulonglong FUN_1800127f8(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000f6bc((longlong)param_1);
      uVar1 = FUN_180012874(param_1,param_2);
      FUN_18000f6c8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180012d08((undefined8 *)param_1);
  }
  return 0xffffffff;
}

