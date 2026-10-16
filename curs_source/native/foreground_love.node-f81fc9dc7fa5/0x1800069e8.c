
/* Address: 0x1800069e8; Evidence: ev_d9b71975a33b8361038a9320cc60659a4c8bbb0f05db2e7f76962347369c092c */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800069fa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}

