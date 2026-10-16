
/* Address: 0x180006b98; Evidence: ev_0479dbe8e0ddb4176f70ff4f1918bc711d37256a5908fdab9c9cb4beedad8ec9 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180006baa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}

