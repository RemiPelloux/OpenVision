
/* Address: 0x180018490; Evidence: ev_d118c417529b8eb371ed0650a1a221e1046eef751e1d8a83176512c308971828 */

bool FUN_180018490(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

