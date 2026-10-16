
/* Address: 0x180007ae8; Evidence: ev_e66ac4febd0ab2999dd1275dcc43c8a3fcbe3dd378261d82d5fcb46701cb7da1 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180007afa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001c3e0 + (longlong)param_1 * 0x28);
  return;
}

