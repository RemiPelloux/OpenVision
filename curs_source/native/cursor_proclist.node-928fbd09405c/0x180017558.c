
/* Address: 0x180017558; Evidence: ev_6584be09ed7cc094f93a24050427be0e873c6036d383bdd184774096ea826205 */

ulonglong FUN_180017558(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18001441c((longlong)param_1);
      uVar1 = FUN_1800175d4(param_1,param_2);
      FUN_180014428((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180017a5c((undefined8 *)param_1);
  }
  return 0xffffffff;
}

