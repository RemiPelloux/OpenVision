
/* Address: 0x1800053e4; Evidence: ev_35f5e757de6decf0d84a5d358f64023d22156babfc5001cfc771389b860e9094 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180006e18();
  if (bVar1) {
    bVar1 = FUN_18000bcc0();
    if (bVar1) {
      return 1;
    }
    FUN_180006e2c();
  }
  return 0;
}

