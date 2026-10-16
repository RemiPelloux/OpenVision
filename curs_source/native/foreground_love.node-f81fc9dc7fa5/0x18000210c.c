
/* Address: 0x18000210c; Evidence: ev_0a1a60c1eeaf77bba627a079d36457d88bd1a9c8b5ab375f20459af929445957 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001bb2c != 0;
}

