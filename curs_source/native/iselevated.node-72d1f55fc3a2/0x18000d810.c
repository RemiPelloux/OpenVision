
/* Address: 0x18000d810; Evidence: ev_5219291700d26c6e740920dab38da27e2259dd1bb4bb7797e2a26472cdbf075f */

bool FUN_18000d810(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}

