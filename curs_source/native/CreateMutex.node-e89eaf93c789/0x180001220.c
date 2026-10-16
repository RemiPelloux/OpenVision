
/* Address: 0x180001220; Evidence: ev_31625ce3399953bfe366ce62d2e93ccdd9f5eb3e81fe5f9162f2b030f3db5a07 */

void FUN_180001220(undefined8 *param_1)

{
  FUN_180002a80(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006bf8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}

