
/* Address: 0x180004790; Evidence: ev_08aa04374e9972eedbfee122c20ab20e7d4215d0bf363a70d53555915477c577 */

void FUN_180004790(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180006a30((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

