
/* Address: 0x18000495c; Evidence: ev_a1750d46061485201cf015c0ce57ee42c7138510617073c8cbe2f861ef9d1aa4 */

undefined8 * FUN_18000495c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

