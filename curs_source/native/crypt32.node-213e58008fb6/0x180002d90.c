
/* Address: 0x180002d90; Evidence: ev_3661ad1ffa6217509902bb5d59d2901931c39a39b2d7e836a9ae69bc3748e519 */

void FUN_180002d90(undefined8 param_1,undefined8 *param_2)

{
  if (param_2 != (undefined8 *)0x0) {
    if (param_2[1] != 0) {
      if (*(char *)(param_2 + 2) == '\0') {
        napi_delete_reference(*param_2);
      }
      param_2[1] = 0;
    }
    thunk_FUN_18000c960(param_2);
  }
  return;
}

