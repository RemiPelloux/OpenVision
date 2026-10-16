
/* Address: 0x18000a010; Evidence: ev_f23e703da6f069deac3dd6fe8076a79106645557724afaf501f264caf7f733a5 */

undefined8 * FUN_18000a010(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

