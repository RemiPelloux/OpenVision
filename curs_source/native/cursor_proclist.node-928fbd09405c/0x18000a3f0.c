
/* Address: 0x18000a3f0; Evidence: ev_0459c9924e7d41c76fb676eefdd2bc3df50c839bd11174a2492f3837719a9da2 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180029e68 != 0;
}

