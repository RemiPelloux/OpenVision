
/* Address: 0x18000a880; Evidence: ev_c19a162258e5ea594586e39adc3b993cacf995915421ce5d3d3e218cf485a9dd */

undefined8 * FUN_18000a880(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

