
/* Address: 0x180005d68; Evidence: ev_cd9a00ced03f09a74e2a6f635c88efcf0378d28eec00abb75e573e3721c97f26 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180023c94 != 0;
}

