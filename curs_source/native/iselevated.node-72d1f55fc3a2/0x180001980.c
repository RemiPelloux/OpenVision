
/* Address: 0x180001980; Evidence: ev_efd6ea12a8da8e9b110aa5e4cc1834913fc87ac9ee2464da23d7dadc0d1ebe76 */

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
    FUN_1800056b4(&DAT_18001a048);
    return;
  }
  iVar2 = FUN_180004f68();
  if (iVar2 == 0) {
    FUN_180004f4c();
  }
  return;
}

