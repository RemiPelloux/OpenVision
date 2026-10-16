
/* Address: 0x1800011b0; Evidence: ev_5b969bd1ce22e41dcdbe9d43252ba05c319f1420149d5f29ab21772a0792b775 */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

