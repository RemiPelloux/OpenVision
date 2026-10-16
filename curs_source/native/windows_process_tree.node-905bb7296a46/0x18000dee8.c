
/* Address: 0x18000dee8; Evidence: ev_cb816dad554d8e68b31d9e61798bbc64c36a30e6295f546eed8702eda26a047c */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000defa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180024480 + (longlong)param_1 * 0x28);
  return;
}

