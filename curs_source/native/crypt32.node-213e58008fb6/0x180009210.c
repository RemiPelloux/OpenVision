
/* Address: 0x180009210; Evidence: ev_f904a2e67429707e7d823b3871e65f1fbf458da92933ceec51640d7bc89dca35 */

undefined8 * FUN_180009210(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

