
/* Address: 0x180005298; Evidence: ev_29d63ac2ff5a42b238df8dc90a4a64dbb5b6886f94673cd1cf68062dc1070066 */

undefined8 * FUN_180005298(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

