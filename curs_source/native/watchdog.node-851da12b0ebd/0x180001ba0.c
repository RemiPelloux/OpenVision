
/* Address: 0x180001ba0; Evidence: ev_7860f4a448c0e761934b609a1d32680828246d1ec9ac789e1c0e273e8655f186 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_18000254c();
  if (bVar1) {
    bVar1 = FUN_180005b60();
    if (bVar1) {
      return 1;
    }
    FUN_180002560();
  }
  return 0;
}

