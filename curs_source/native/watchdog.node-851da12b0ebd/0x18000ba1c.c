
/* Address: 0x18000ba1c; Evidence: ev_d1091df3718e6c3c68575586744c63eca6b35e162b64d5474c99f6a57d663f22 */

void FUN_18000ba1c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000ba3c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

