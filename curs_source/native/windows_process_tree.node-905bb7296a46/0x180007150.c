
/* Address: 0x180007150; Evidence: ev_012556dccf751eddadfcfb5619e718753dc78ab9a0bdbec716954d68461d206b */

undefined8 * FUN_180007150(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}

