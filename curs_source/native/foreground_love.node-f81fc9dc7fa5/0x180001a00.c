
/* Address: 0x180001a00; Evidence: ev_4cc4b6fa797e6fa5148e02d61f850d38375105efaa174ab3f5dcd8f4a233556e */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800023ac();
  if (bVar1) {
    bVar1 = FUN_1800059b0();
    if (bVar1) {
      return 1;
    }
    FUN_1800023c0();
  }
  return 0;
}

