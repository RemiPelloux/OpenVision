
/* Address: 0x180003af0; Evidence: ev_3772f123412c9e07bf41118cbd80f50d76625228a76aea0b00ef810dfd925767 */

void FUN_180003af0(undefined8 *param_1)

{
  *param_1 = &PTR_FUN_18001f1e0;
  if (param_1[2] != 0) {
    napi_delete_async_work(param_1[1]);
    param_1[2] = 0;
  }
  FUN_180002f40(param_1 + 9);
  if (param_1[7] != 0) {
    if (*(char *)(param_1 + 8) == '\0') {
      napi_delete_reference(param_1[6]);
    }
    param_1[7] = 0;
  }
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}

