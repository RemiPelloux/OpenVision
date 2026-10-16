
/* Address: 0x18000b74c; Evidence: ev_14fcf4f03f2bf7290f21fa7f432b7450beb4b91f6094dd814398f6e7b09aeab1 */

void FUN_18000b74c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b76c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

