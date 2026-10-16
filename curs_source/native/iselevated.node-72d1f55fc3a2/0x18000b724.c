
/* Address: 0x18000b724; Evidence: ev_a360107dcf3f5131c5d936ffda8aac5267851af1624b56171f4d0368028c43d3 */

void FUN_18000b724(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b744. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

