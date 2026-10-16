
/* Address: 0x1800097f8; Evidence: ev_36785685a77cd2225335bd2fc893e6a646d3899173dc799accd09785b68734f6 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_18000b654();
  if (bVar1) {
    bVar1 = FUN_1800109fc();
    if (bVar1) {
      return 1;
    }
    FUN_18000b668();
  }
  return 0;
}

