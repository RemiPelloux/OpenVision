
/* Address: 0x180004a50; Evidence: ev_dad21208d3de804881f7b4bf7bb6dbd2ddc1e5e2454c9d19e7eb60a274a2e74d */

void FUN_180004a50(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180006d00((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

