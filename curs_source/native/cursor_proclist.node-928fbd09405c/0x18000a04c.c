
/* Address: 0x18000a04c; Evidence: ev_1c20cb3029de33568cded5c79ca92284d5864cd18d54914a7c81efae1260f27f */

undefined8 * FUN_18000a04c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}

