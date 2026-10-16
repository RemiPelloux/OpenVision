
/* Address: 0x180014da0; Evidence: ev_fe8791129e641eba7cbd6bc9ee141c65d80c98a00f9f887fa57e08b25f9a5a88 */

bool FUN_180014da0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

