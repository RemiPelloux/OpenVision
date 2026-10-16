
/* Address: 0x180005704; Evidence: ev_72ed7f87e073492530a3dad2b0d436a5960cf477f9e614c0693eac33f9d2c4c9 */

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
    FUN_18000bd5c(&DAT_1800231a8);
    return;
  }
  iVar2 = FUN_18000b610();
  if (iVar2 == 0) {
    FUN_18000b5f4();
  }
  return;
}

