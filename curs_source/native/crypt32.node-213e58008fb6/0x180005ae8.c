
/* Address: 0x180005ae8; Evidence: ev_2f0c76e2e2c7a267f4fc0d627e45a1f1af06e1c2ac035e7bae87413933f1bdca */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180022c94 != 0;
}

