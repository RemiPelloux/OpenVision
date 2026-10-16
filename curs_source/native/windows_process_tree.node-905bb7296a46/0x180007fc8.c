
/* Address: 0x180007fc8; Evidence: ev_856ca5fd0180b54ea6e490fbc0212d3056b32eae385698fdbe251158b7013559 */

void FUN_180007fc8(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000dfd0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

