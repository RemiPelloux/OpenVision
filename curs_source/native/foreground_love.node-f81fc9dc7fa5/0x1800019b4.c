
/* Address: 0x1800019b4; Evidence: ev_87234443c9d4e3bb5c07758687e3880e80d1fbbb6e5ffab8ba0155564320cf94 */

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
    uVar2 = FUN_180001928();
    uVar3 = FUN_1800052b0((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180005430();
  }
  else {
    uVar2 = FUN_180001e74();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

