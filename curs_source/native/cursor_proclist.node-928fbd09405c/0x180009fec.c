
/* Address: 0x180009fec; Evidence: ev_a4643553d0cd5a3a81421369d80ea770713b9674c4d438c67e140db3cfab347b */

undefined8 * FUN_180009fec(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

