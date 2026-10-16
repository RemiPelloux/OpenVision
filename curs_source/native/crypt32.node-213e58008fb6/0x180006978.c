
/* Address: 0x180006978; Evidence: ev_e842318916e227a52e4a081b25e70f7b29143dcbd9633919f7b887fec8a9f7a4 */

void FUN_180006978(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000c960((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

