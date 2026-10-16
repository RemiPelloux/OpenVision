
/* Address: 0x1800048fc; Evidence: ev_34fd4d98463aaddedb28ec7e1b74d3c9f9f6fce51db01df699af255bc35130c8 */

undefined8 * FUN_1800048fc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}

