
/* Address: 0x180009898; Evidence: ev_04e43a064e3f84bc4fab6016d6e9190f3e5e9f4384e3ab1b6fc0030e5c003ac9 */

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
    FUN_180010804(&DAT_180028d30);
    return;
  }
  iVar2 = FUN_18000febc();
  if (iVar2 == 0) {
    FUN_18000fea0();
  }
  return;
}

