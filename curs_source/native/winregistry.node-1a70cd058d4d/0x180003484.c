
/* Address: 0x180003484; Evidence: ev_00145b9185cd39c815cc95dcf988e4549ce5310b161d5f1354d7002222d0bdc3 */

void FUN_180003484(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180007bd0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

