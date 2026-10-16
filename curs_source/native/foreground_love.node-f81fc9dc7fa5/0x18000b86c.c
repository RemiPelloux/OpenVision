
/* Address: 0x18000b86c; Evidence: ev_5da751659907378dab7ba02819838fe01a07a07d399346813a634c868ba5ef9d */

void FUN_18000b86c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b88c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

