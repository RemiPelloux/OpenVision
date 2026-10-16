
/* Address: 0x180003450; Evidence: ev_e417c5a97012215cbe8645f9771cec3d642095ba925a125c9fbbb3a40bca5a4a */

void FUN_180003450(undefined8 param_1,undefined8 *param_2)

{
  if (param_2 != (undefined8 *)0x0) {
    if (param_2[1] != 0) {
      if (*(char *)(param_2 + 2) == '\0') {
        napi_delete_reference(*param_2);
      }
      param_2[1] = 0;
    }
    thunk_FUN_18000cbe0(param_2);
  }
  return;
}

