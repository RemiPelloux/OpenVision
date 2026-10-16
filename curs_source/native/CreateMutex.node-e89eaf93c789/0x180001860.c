
/* Address: 0x180001860; Evidence: ev_9f19b3a46bb888a85436af5d74bcfabc7372bd4d5ee59848edbcf03d35307abc */

undefined8 * FUN_180001860(undefined8 *param_1,uint param_2)

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
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}

