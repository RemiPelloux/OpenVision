
/* Address: 0x18000c85c; Evidence: ev_b2de8155cb2781d4b82631d83ffbd02044809cf2b1d61c9bd36558a4663b39f9 */

void FUN_18000c85c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c87c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

