
/* Address: 0x18001634c; Evidence: ev_f39f682f17fac09184feda009c1b0ae14171d65a1300cf5340f971d6a7aa80e9 */

void FUN_18001634c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001636c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_180029920)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

