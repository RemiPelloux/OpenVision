
/* Address: 0x1800048c0; Evidence: ev_445d10a696e3e9e28d393448fe6be2c3c2e8bb516d20347ada9bb8b0de9fc1a3 */

undefined8 * FUN_1800048c0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

