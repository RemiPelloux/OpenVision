
/* Address: 0x180001c40; Evidence: ev_0592803caf05d38c1e86dd3125007d83fecc8715094a85b3f7fde4c63c30b4d7 */

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
    FUN_180005980(&DAT_18001b048);
    return;
  }
  iVar2 = FUN_180005034();
  if (iVar2 == 0) {
    FUN_180005018();
  }
  return;
}

