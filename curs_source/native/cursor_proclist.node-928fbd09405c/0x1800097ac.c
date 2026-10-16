
/* Address: 0x1800097ac; Evidence: ev_88a416e83827cb329bc9807dcbfa5d6d8d5f5ed63e9b92af40dd40315c58b34c */

/* Library Function - Single Match
    __scrt_dllmain_after_initialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __scrt_dllmain_after_initialize_c(void)

{
  bool bVar1;
  undefined7 extraout_var;
  undefined8 uVar2;
  ulonglong uVar3;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((int)CONCAT71(extraout_var,bVar1) == 0) {
    uVar2 = FUN_18000a3e8();
    uVar3 = FUN_1800100e4((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180010264();
  }
  else {
    uVar2 = FUN_18000a150();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

