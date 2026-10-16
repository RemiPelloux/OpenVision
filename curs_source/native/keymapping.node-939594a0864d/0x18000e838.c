
/* Address: 0x18000e838; Evidence: ev_547dfcf208aaf0acc7ce10298abed5c3a0046ff6414ac4c1ea06555e192a437b */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000e84a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180028960 + (longlong)param_1 * 0x28);
  return;
}

