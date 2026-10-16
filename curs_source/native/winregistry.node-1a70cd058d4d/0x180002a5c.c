
/* Address: 0x180002a5c; Evidence: ev_d52c750dca577e4e219ec8f68080b85c12a0f3d1bce6ee00971e3906f9282167 */

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
    FUN_180006d4c(&DAT_18001c0f8);
    return;
  }
  iVar2 = FUN_180006600();
  if (iVar2 == 0) {
    FUN_1800065e4();
  }
  return;
}

