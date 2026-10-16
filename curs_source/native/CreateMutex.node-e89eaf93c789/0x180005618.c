
/* Address: 0x180005618; Evidence: ev_38ade28cc5266e0527429c10e4fcd0273c20e10845d4f0f93b0ae3fe914540dc */

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
    uVar2 = FUN_18000558c();
    uVar3 = FUN_18000b838((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000b9b8();
  }
  else {
    uVar2 = FUN_180005ad0();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

