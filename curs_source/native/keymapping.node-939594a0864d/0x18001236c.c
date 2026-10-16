
/* Address: 0x18001236c; Evidence: ev_bb5cc8e3103962b05cce6aec7d496988547f77a789243edb99f4b3bfded646e5 */

void FUN_18001236c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001238c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_180028520)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

