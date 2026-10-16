
/* Address: 0x180005398; Evidence: ev_398f64fbe9c169d69681c999534044d5e2db2ed1a1e3943acccae96188d3c97b */

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
    uVar2 = FUN_18000530c();
    uVar3 = FUN_18000b5b8((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000b738();
  }
  else {
    uVar2 = FUN_180005850();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

