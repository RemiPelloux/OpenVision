
/* Address: 0x1800139b0; Evidence: ev_9a1d2bd9d6a98c3f8f6546d2d1fa092e0efb5a159473e1d84cfd8dd903adc071 */

bool FUN_1800139b0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

