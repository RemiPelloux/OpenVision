
/* Address: 0x180006928; Evidence: ev_c869b4c4fdf1c0daa4bddf62f820cf265392d18759f0ba54a72fccf9827e43d6 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000693a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001a310 + (longlong)param_1 * 5);
  return;
}

