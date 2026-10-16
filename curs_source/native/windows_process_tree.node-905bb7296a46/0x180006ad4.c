
/* Address: 0x180006ad4; Evidence: ev_880c7331eb5711908835c839ca3eb78388d58eb85684e6ceb89243c1e7bafbd0 */

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
    FUN_18000d14c(&DAT_1800241a8);
    return;
  }
  iVar2 = FUN_18000ca00();
  if (iVar2 == 0) {
    FUN_18000c9e4();
  }
  return;
}

