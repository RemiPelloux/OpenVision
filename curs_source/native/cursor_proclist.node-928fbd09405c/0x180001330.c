
/* Address: 0x180001330; Evidence: ev_c43dd4a0cffdf48b59bd9372f0799d046db36b697350e18d95b97d29d5562ea3 */

void FUN_180001330(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}

