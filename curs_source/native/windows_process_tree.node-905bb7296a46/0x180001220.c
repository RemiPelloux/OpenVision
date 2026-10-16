
/* Address: 0x180001220; Evidence: ev_71d9eaf944c17e966879f448ba6e711144d56f6754dde2e719cc81224ab26e0c */

void FUN_180001220(undefined8 *param_1)

{
  FUN_180002f40(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}

