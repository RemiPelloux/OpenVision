
/* Address: 0x1800010b0; Evidence: ev_c9df0f457800c53a0f8a23dc30684612f0b000f17541962a7358f4ed51329866 */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180006978(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}

