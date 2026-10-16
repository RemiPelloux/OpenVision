
/* Address: 0x180006bf8; Evidence: ev_ecb79de12c1d2ca6dab83374712a181878f059e80997bbc746fe00aa77a88680 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180006c0a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}

