
/* Address: 0x180011608; Evidence: ev_7cf4bfd49955248c53b7a52789e4eb5c1cd0e01f40a383f0d12913293fe724ad */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001161a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_1800295b0 + (longlong)param_1 * 0x28);
  return;
}

