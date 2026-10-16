
/* Address: 0x18000a8bc; Evidence: ev_8d1692fe1420ed91175f16d7d2830d5cc3039062ad962e46fdcb3ac50b5b84fa */

undefined8 * FUN_18000a8bc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

