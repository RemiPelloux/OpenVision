
/* Address: 0x18000c834; Evidence: ev_c8c396942a72c1dd7694dee012e6075645db7ace78da194e03867b97107ffd55 */

void FUN_18000c834(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c854. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

