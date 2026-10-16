
/* Address: 0x1800069e8; Evidence: ev_884837018a18f0485bdd75070e5cf5c57cb1826f4c08b112107fed502d630770 */

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
    uVar2 = FUN_18000695c();
    uVar3 = FUN_18000cc28((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000cda8();
  }
  else {
    uVar2 = FUN_180006ea4();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

