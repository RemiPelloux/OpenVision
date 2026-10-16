
/* Address: 0x18000e7d8; Evidence: ev_acde5694afd18bb647c6abf971387105a47d983911ea45e19912a7120d6ea025 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000e7ea. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180028960 + (longlong)param_1 * 0x28);
  return;
}

