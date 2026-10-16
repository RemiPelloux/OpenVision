
/* Address: 0x180004bf4; Evidence: ev_c7c2da5be23ff688960ea94bee10e11ccb335e1866f45d9491b0a926b8a40f1e */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800057f0();
  if (bVar1) {
    bVar1 = FUN_18000b480();
    if (bVar1) {
      return 1;
    }
    FUN_180005804();
  }
  return 0;
}

