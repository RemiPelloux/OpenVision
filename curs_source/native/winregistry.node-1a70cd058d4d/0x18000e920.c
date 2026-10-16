
/* Address: 0x18000e920; Evidence: ev_24eeef81cc6ff105f88916ff679b040c4a874f7862239860abfd69ebce7c94be */

bool FUN_18000e920(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

