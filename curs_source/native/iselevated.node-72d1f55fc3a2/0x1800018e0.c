
/* Address: 0x1800018e0; Evidence: ev_49f073d94daa98a15ae0e8383dd828ea4d4547e25e1db10d3025a5624d2d1a6c */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_18000228c();
  if (bVar1) {
    bVar1 = FUN_180005890();
    if (bVar1) {
      return 1;
    }
    FUN_1800022a0();
  }
  return 0;
}

