
/* Address: 0x18000df48; Evidence: ev_01047349d8ef797808def6d396d297ce8a8b5a9f6284e3c658f6cd3200f62860 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000df5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180024480 + (longlong)param_1 * 0x28);
  return;
}

