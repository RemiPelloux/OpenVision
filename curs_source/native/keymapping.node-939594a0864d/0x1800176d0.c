
/* Address: 0x1800176d0; Evidence: ev_8f1f02d387d13afb52c2413a07a969324c2b89e7a1cbbd76cc3f88afdd3b3dee */

bool FUN_1800176d0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

