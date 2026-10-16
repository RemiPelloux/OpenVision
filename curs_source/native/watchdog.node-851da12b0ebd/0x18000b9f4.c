
/* Address: 0x18000b9f4; Evidence: ev_7051bf1f6d6f0f241b33478ad8d386f248e860c511a738a7957ecd57c705088e */

void FUN_18000b9f4(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000ba14. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

