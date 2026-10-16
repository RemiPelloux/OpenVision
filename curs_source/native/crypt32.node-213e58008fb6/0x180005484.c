
/* Address: 0x180005484; Evidence: ev_285ce0363219a8ff82ef89121a93c140fcbfa341df701755f8f6b2a12816c7ec */

/* Library Function - Single Match
    __scrt_dllmain_uninitialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_dllmain_uninitialize_c(void)

{
  bool bVar1;
  undefined3 extraout_var;
  int iVar2;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if (CONCAT31(extraout_var,bVar1) != 0) {
    FUN_18000badc(&DAT_1800221a8);
    return;
  }
  iVar2 = FUN_18000b390();
  if (iVar2 == 0) {
    FUN_18000b374();
  }
  return;
}

