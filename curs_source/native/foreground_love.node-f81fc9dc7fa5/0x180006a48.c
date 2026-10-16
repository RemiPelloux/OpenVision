
/* Address: 0x180006a48; Evidence: ev_c2fa8150df829cf066d596bfa687d2d72ac38544ddb583f75d63dcf9427de49c */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180006a5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}

