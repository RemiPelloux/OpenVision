
/* Address: 0x180005664; Evidence: ev_e34e6f8d5e865cb54f2c5ac5e726db401983e0e626c18dc7076004f0544523ca */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180007098();
  if (bVar1) {
    bVar1 = FUN_18000bf40();
    if (bVar1) {
      return 1;
    }
    FUN_1800070ac();
  }
  return 0;
}

