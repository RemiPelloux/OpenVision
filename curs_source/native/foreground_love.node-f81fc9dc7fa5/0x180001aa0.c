
/* Address: 0x180001aa0; Evidence: ev_c0d9cf38f28ac16e0985038a201d509b2a88ea9b2592763431a7ab12bb7d9233 */

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
    FUN_1800057d4(&DAT_18001b048);
    return;
  }
  iVar2 = FUN_180005088();
  if (iVar2 == 0) {
    FUN_18000506c();
  }
  return;
}

