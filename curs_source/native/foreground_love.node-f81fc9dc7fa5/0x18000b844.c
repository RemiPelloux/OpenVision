
/* Address: 0x18000b844; Evidence: ev_53af430f0e1ebacde4e312705916e6444c5b14dc01457ea7acc1d9762a992a27 */

void FUN_18000b844(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b864. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

