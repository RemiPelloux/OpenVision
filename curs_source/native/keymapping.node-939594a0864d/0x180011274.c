
/* Address: 0x180011274; Evidence: ev_480a94c275490dc1836aa4b020eb452698fb58d400d74ae6a0ed670be5d6b16d */

ulonglong FUN_180011274(FILE *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (FILE *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xc & 1) == 0) {
      FUN_18000842c((longlong)param_1);
      uVar1 = FUN_1800112f0(param_1,param_2);
      FUN_180008438((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_1800152f4(&param_1->_ptr);
  }
  return 0xffffffff;
}

