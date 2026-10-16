
/* Address: 0x18000cb58; Evidence: ev_d795a27940faa38ab3ba4094b9f2a0d0d332fc8ecf734634891f7c78b036b2fb */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000cb6a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180023480 + (longlong)param_1 * 0x28);
  return;
}

