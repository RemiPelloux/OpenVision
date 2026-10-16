
/* Address: 0x180001220; Evidence: ev_666b11e85beb58b026dd50289d27f0bb5f0335ef65665be7c74c9bb42d5022d6 */

void FUN_180001220(undefined8 *param_1)

{
  FUN_1800035d0(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006978(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}

