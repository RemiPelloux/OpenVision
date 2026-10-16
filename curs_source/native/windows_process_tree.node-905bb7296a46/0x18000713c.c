
/* Address: 0x18000713c; Evidence: ev_8d38a44ef18a3114e112f02e997048665c32245c39c8d3fcfba5033aeaf089ad */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180024c94 != 0;
}

