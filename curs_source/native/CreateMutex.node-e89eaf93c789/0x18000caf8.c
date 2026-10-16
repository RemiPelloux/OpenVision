
/* Address: 0x18000caf8; Evidence: ev_4501916b8f458273027042d148988800055652a60e9cec9f8b83c87c1de60932 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000cb0a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180023480 + (longlong)param_1 * 0x28);
  return;
}

