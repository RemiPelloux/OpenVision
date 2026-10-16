
/* Address: 0x1800017d0; Evidence: ev_462d986c4fe35be9d4aa23240295c6018b49aa463b509905c75b1f8ac5fc6a31 */

undefined8 * FUN_1800017d0(undefined8 *param_1,uint param_2)

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
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}

