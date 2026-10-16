
/* Address: 0x180007b48; Evidence: ev_ac4daa756a8efcc192897acacef54f905912b5ae293176ba6d392621f7df1f57 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180007b5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001c3e0 + (longlong)param_1 * 0x28);
  return;
}

