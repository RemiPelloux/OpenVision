
/* Address: 0x180004228; Evidence: ev_68decfe6af64b7848e66df0b83c33eecc94c4f1c0bbccfdbb25316a41903df3b */

undefined8 * FUN_180004228(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}

