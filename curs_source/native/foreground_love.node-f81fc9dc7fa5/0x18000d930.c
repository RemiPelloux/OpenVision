
/* Address: 0x18000d930; Evidence: ev_d5a2269be29bc40309ded949147ba7d03557745aff4dbb28b6007144fb7d0cdf */

bool FUN_18000d930(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

