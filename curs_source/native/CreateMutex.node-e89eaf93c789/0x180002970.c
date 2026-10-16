
/* Address: 0x180002970; Evidence: ev_ffa52534d412784118ed14ffe2be46b184b04c256f7b48195c37a37857703ac7 */

void FUN_180002970(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}

