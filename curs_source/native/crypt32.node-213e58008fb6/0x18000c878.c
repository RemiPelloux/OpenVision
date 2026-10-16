
/* Address: 0x18000c878; Evidence: ev_494c81f614859596f4c8e835f190436ed6f17b8174b0b0c82a1cd4898ffb6d82 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c88a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180022480 + (longlong)param_1 * 0x28);
  return;
}

