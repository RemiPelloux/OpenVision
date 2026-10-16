
/* Address: 0x18000dae0; Evidence: ev_e66bb3645f8a483d97926fd1c72b132875842b51967ccc34a434f4ea6a5fd891 */

bool FUN_18000dae0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

