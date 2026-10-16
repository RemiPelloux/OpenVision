
/* Address: 0x1800029bc; Evidence: ev_aa1caf192081d848ec14b1c769d0bd2fdfb4a6d406e6c7dc52dd6fad056e1009 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800035c0();
  if (bVar1) {
    bVar1 = FUN_180006f30();
    if (bVar1) {
      return 1;
    }
    FUN_1800035d4();
  }
  return 0;
}

