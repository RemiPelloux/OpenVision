
/* Address: 0x1800026c4; Evidence: ev_e5d158eec8e60669e96d9db514d5817117181d7c9923b616e403551bc9057ca9 */

undefined8 * FUN_1800026c4(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

