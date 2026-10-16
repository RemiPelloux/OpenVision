
/* Address: 0x180003f68; Evidence: ev_cf1a42cc10999cff5ec70f718043dc035314ea945782613dcc837229a7dff9f4 */

undefined8 * FUN_180003f68(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

