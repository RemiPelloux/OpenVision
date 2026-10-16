
/* Address: 0x18001186c; Evidence: ev_f12faddfc51521f0588143057b33099e830b5c469db8e0683f7c9ac2a7b7b545 */

void FUN_18001186c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001188c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

