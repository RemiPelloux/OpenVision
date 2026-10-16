
/* Address: 0x180001270; Evidence: ev_2105743ce155d5ee73362e521ce78a3035634f08f724213e4d34f926c771805a */

void FUN_180001270(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}

