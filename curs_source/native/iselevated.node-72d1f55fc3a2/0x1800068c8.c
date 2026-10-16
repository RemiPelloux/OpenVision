
/* Address: 0x1800068c8; Evidence: ev_ef3847d58ae487116494770a946361a9afea913c6afd669c58682b0420b642f6 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800068da. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001a310 + (longlong)param_1 * 5);
  return;
}

