
/* Address: 0x180006a34; Evidence: ev_dd9690670f6bd9bc50027415835033522a9d59f3e568ed7cd1213e21921c06be */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180008490();
  if (bVar1) {
    bVar1 = FUN_18000d330();
    if (bVar1) {
      return 1;
    }
    FUN_1800084a4();
  }
  return 0;
}

