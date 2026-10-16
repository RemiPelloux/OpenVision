
/* Address: 0x1800115ec; Evidence: ev_2e9c264bde58ad28521fe37d332d8a5b27016d4e5fc7e945ad9891ae071ba866 */

void FUN_1800115ec(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001160c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}

