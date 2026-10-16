
/* Address: 0x18000ddc0; Evidence: ev_a12ebfc48e7103d97e8d5837b8891f67bc03d2f5aa146b1e62b47c93d77ba314 */

undefined8 * FUN_18000ddc0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

