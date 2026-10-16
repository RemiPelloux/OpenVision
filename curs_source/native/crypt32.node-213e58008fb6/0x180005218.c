
/* Address: 0x180005218; Evidence: ev_26acb146967a8c325351a003de9ec476bbaa1da79e90a6fe4d2a7caa94c00509 */

undefined8 * FUN_180005218(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

