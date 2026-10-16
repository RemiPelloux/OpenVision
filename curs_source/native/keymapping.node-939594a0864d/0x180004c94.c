
/* Address: 0x180004c94; Evidence: ev_7df514909a6a8a779960da082bec033447479c0a206a182b29b8d7b5b7ebbca3 */

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
    FUN_18000b29c(&DAT_180028160);
    return;
  }
  iVar2 = FUN_18000ab50();
  if (iVar2 == 0) {
    FUN_18000ab34();
  }
  return;
}

