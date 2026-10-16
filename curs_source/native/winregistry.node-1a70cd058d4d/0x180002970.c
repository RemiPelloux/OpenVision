
/* Address: 0x180002970; Evidence: ev_9e11312d8e6fd0d21341e5e509b87cf6d5e5bb27a195807ba3fd0938b07c37f2 */

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
    uVar2 = FUN_1800028e4();
    uVar3 = FUN_180006828((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_1800069a8();
  }
  else {
    uVar2 = FUN_180002e5c();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

