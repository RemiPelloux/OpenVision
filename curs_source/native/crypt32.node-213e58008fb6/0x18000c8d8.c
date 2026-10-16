
/* Address: 0x18000c8d8; Evidence: ev_24e6bb233add30a7cb31e2dea78d92d210efda81256404c55d0bd57b8f33b321 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c8ea. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180022480 + (longlong)param_1 * 0x28);
  return;
}

